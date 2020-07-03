using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PharmaCheck.Data;
using PharmaCheck.Models;
using PharmaCheck.ViewModel.Collections;
using PharmaCheck.ViewModels;

namespace PharmaCheck.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AddressController : Controller
    {
        private readonly PharmaCheckContext _context;
        private readonly IMapper _mapper;

        public AddressController(PharmaCheckContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        // GET: api/Address
        /// <summary>
        /// Show all addressed.
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ShowAddressVM>>> GetAddresses()
        {
            var addresses = await _context.Addresses
                .Include(t => t.Pharmacy)
                .ToListAsync();

            var addressesDto = _mapper.Map<IEnumerable<ShowAddressVM>>(addresses);
            return Ok(addressesDto);
        }

        // GET: api/Address/5
        /// <summary>
        /// Find addresses of same franchise.
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpGet("{id}")]
        public async Task<ActionResult<ShowAddressVM>> GetAddressesByPharmacyId(long id)
        {
            IQueryable<Address> result = _context.Addresses;

            if (result == null)
            {
                return NotFound();
            } else {
                result = result.Where(f => f.PharmId == id);
            }

            var addresses = await result
                .Include(t => t.Pharmacy)
                .ToListAsync();

            var addressesDto = _mapper.Map<IEnumerable<ShowAddressVM>>(addresses);
            return Ok(addressesDto);
        }

        // PUT: api/Address/5
        /// <summary>
        /// Update address. 
        /// </summary>
        /// <param name="id"></param>
        /// <param name="addressDto"></param>
        /// <returns></returns>
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAddress(long id, InsertAddressVM addressDto)
        {
            if (id != addressDto.Id)
            {
                return BadRequest();
            }

            var address = _mapper.Map<Address>(addressDto);

            _context.Entry(address).State = EntityState.Modified;
            try
            {
                await _context.SaveChangesAsync();
            }

            catch (DbUpdateConcurrencyException)
            {
                if (!AddressExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Address
        /// <summary>
        /// Insert new address.
        /// </summary>
        /// <param name="addressDto"></param>
        /// <returns></returns>
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Address>> PostAddress(InsertAddressVM addressDto)
        {
            var address = _mapper.Map<Address>(addressDto);

            _context.Addresses.Add(address);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAddress", new { id = address.Id }, address);
        }

        // DELETE: api/Address/5
        /// <summary>
        /// Delete address by id.
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpDelete("{id}")]
        public async Task<ActionResult<Address>> DeleteAddress(long id)
        {
            var address = await _context.Addresses.FindAsync(id);
            if (address == null)
            {
                return NotFound();
            }

            _context.Addresses.Remove(address);
            await _context.SaveChangesAsync();

            return address;
        }

        private bool AddressExists(long id)
        {
            return _context.Addresses.Any(e => e.Id == id);
        }
    }
}
