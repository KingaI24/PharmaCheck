using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PharmaCheck.Data;
using PharmaCheck.Models;
using PharmaCheck.ViewModel.Collections;
using PharmaCheck.ViewModels.Collections;

namespace PharmaCheck.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SupplyController : Controller
    {
        private readonly PharmaCheckContext _context;
        private readonly IMapper _mapper;

        public SupplyController(PharmaCheckContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        // GET: api/supply?prodid=5&pharmid=5
        /// <summary>
        /// Show all supplies.
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public async Task<IActionResult> GetSupplies(
            [FromQuery] long? ProdId = null,
            [FromQuery] long? PharmId = null,
            [FromQuery] int page = 0,
            [FromQuery] int itemsPerPage = 3)
        {
            IQueryable<Supply> result = _context.Supplies;
            
            if (ProdId != null)
            {
                result = result.Where(f => ProdId == f.ProdId);
            }
            if (PharmId != null)
            {
                result = result.Where(f => f.PharmId == PharmId);
            }

            var supplyRepo = await result
                .Include(t => t.Product)
                .Include(t => t.Pharmacy)
                .ToListAsync();

            var returnTasks = _mapper.Map<IEnumerable<ShowSupplyVM>>(supplyRepo);
            var paginatedList = new PaginatedList<ShowSupplyVM>(page, await result.CountAsync(), itemsPerPage);
            paginatedList.Items.AddRange(returnTasks); //addrange -> to add collections

            return Ok(paginatedList);
        }


        // PUT: api/supply/5/5
        /// <summary>
        /// Update supply. 
        /// </summary>
        /// <param name="id"></param>
        /// <param name="supply"></param>
        /// <returns></returns>
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSupply(long id, Supply supply)
        {
            if (id != supply.id)
            {
                return BadRequest();
            }

            if (supply.Stock == 0)
            {
                _context.Supplies.Remove(supply);
            } else
            {
                _context.Entry(supply).State = EntityState.Modified;
            }

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SupplyExists(id))
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

        // POST: api/supply
        /// <summary>
        /// Insert new supply.
        /// </summary>
        /// <param name="supply"></param>
        /// <returns></returns>
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Supply>> PostSupply(Supply supply)
        {
            if (!ProductPerPharmacyExists(supply.ProdId, supply.PharmId))
            {
                _context.Supplies.Add(supply);
                await _context.SaveChangesAsync();
                return CreatedAtAction("GetSupply", new { pharmid = supply.PharmId, prodid = supply.ProdId }, supply);

            } else {
                var entry = await _context.Supplies
                    .Where(t => t.PharmId == supply.PharmId && t.ProdId == supply.ProdId)
                    .FirstOrDefaultAsync();

                entry.Stock = entry.Stock + supply.Stock ;
                _context.Entry(entry).State = EntityState.Modified;
                
                try
                {
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!SupplyExists(supply.id))
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
        }

        // DELETE: api/supply?prodid=5&pharmid=5
        /// <summary>
        /// Delete supply by id.
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpDelete("{id}")]
        public async Task<ActionResult<Supply>> DeleteSupply(long id)
        {
            var supply = await _context.Supplies.FindAsync(id);
            if (supply == null)
            {
                return NotFound();
            }

            _context.Supplies.Remove(supply);
            await _context.SaveChangesAsync();

            return supply;
        }

        private bool SupplyExists(long id)
        {
            return _context.Supplies.Any(e => e.id == id);
            //return _context.Supplies.Any(e => e.PharmId == PharmId && e.ProdId == ProdId);
        }

        private bool ProductPerPharmacyExists(long PharmId, long ProdId)
        {
            return _context.Supplies.Any(e => e.PharmId == PharmId && e.ProdId == ProdId);
        }
    }
}