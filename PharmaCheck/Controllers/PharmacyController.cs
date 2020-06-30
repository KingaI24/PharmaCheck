using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PharmaCheck.Data;
using PharmaCheck.Models;

namespace PharmaCheck.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PharmacyController : Controller
    {
        private readonly PharmaCheckContext _context;

        public PharmacyController(PharmaCheckContext context)
        {
            _context = context;
        }

        // GET: api/pharmacy
        /// <summary>
        /// Show all pharmacies.
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Pharmacy>>> GetPharmacies()
        {
            return await _context.Pharmacies
                .Include(t => t.Addresses)
                .Include(t => t.Supplies)
                .ToListAsync();
        }

        // GET: api/pharmacy/5
        /// <summary>
        /// Find pharmacy based on id.
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpGet("{id}")]
        public async Task<ActionResult<Pharmacy>> GetPharmacy(long id)
        {
            var pharmacy = await _context.Pharmacies
                .Include(t => t.Addresses)
                .Include(t => t.Supplies)
                .FirstOrDefaultAsync(t => t.Id == id);

            if (pharmacy == null)
            {
                return NotFound();
            }

            return pharmacy;
        }

        // PUT: api/pharmacy/5
        /// <summary>
        /// Update pharmacy. 
        /// </summary>
        /// <param name="id"></param>
        /// <param name="pharmacy"></param>
        /// <returns></returns>
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPharmacy(long id, Pharmacy pharmacy)
        {
            if (id != pharmacy.Id)
            {
                return BadRequest();
            }

            _context.Entry(pharmacy).State = EntityState.Modified;
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PharmacyExists(id))
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

        // POST: api/pharmacy
        /// <summary>
        /// Insert new pharmacy.
        /// </summary>
        /// <param name="pharmacy"></param>
        /// <returns></returns>
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Pharmacy>> PostPharmacy(Pharmacy pharmacy)
        {
            _context.Pharmacies.Add(pharmacy);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPharmacy", new { id = pharmacy.Id }, pharmacy);
        }

        // DELETE: api/pharmacy/5
        /// <summary>
        /// Delete pharmacy by id.
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpDelete("{id}")]
        public async Task<ActionResult<Pharmacy>> DeletePharmacy(long id)
        {
            var pharmacy = await _context.Pharmacies.FindAsync(id);
            if (pharmacy == null)
            {
                return NotFound();
            }

            _context.Pharmacies.Remove(pharmacy);
            await _context.SaveChangesAsync();

            return pharmacy;
        }

        private bool PharmacyExists(long id)
        {
            return _context.Pharmacies.Any(e => e.Id == id);
        }
    }
}