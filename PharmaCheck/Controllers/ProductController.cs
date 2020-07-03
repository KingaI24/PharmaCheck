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
using PharmaCheck.ViewModels;

namespace PharmaCheck.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : Controller
    {
        private readonly PharmaCheckContext _context;
        private readonly IMapper _mapper;

        public ProductController(PharmaCheckContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        // GET: api/Product
        /// <summary>
        /// Show all products.
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Product>>> GetProducts(
            [FromQuery] string? substance = null,
            [FromQuery] int page = 0,
            [FromQuery] int itemsPerPage = 3)
        {
            IQueryable<Product> result = _context.Products;
            if (substance != null)
            {
                result = result.Where(f => substance == f.ActiveSubstance);
            }

            var repo = await result
                .Include(t => t.Supplies)
                .Skip(page * itemsPerPage)
                .Take(itemsPerPage)
                .ToListAsync();

            var returnTasks = _mapper.Map<IEnumerable<ShowProductVM>>(repo);
            var paginatedList = new PaginatedList<ShowProductVM>(page, await result.CountAsync(), itemsPerPage);
            paginatedList.Items.AddRange(returnTasks); //addrange -> to add collections

            return Ok(paginatedList);
        }

        // GET: api/product/5
        /// <summary>
        /// Find product based on id.
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> GetProduct(long id)
        {
            var product = await _context.Products
                .Include(t => t.Supplies)
                .FirstOrDefaultAsync(t => t.Id == id);

            if (product == null)
            {
                return NotFound();
            }

            return product;
        }

        // PUT: api/product/5
        /// <summary>
        /// Update product. 
        /// </summary>
        /// <param name="id"></param>
        /// <param name="product"></param>
        /// <returns></returns>
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAddress(long id, Product product)
        {
            if (id != product.Id)
            {
                return BadRequest();
            }

            _context.Entry(product).State = EntityState.Modified;
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProductExists(id))
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

        // POST: api/product
        /// <summary>
        /// Insert new product.
        /// </summary>
        /// <param name="product"></param>
        /// <returns></returns>
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Address>> PostAddress(Product product)
        {
            _context.Products.Add(product);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetProduct", new { id = product.Id }, product);
        }

        // DELETE: api/product/5
        /// <summary>
        /// Delete product by id.
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpDelete("{id}")]
        public async Task<ActionResult<Product>> DeleteAddress(long id)
        {
            var product = await _context.Products.FindAsync(id);
            if (product == null)
            {
                return NotFound();
            }

            _context.Products.Remove(product);
            await _context.SaveChangesAsync();

            return product;
        }

        private bool ProductExists(long id)
        {
            return _context.Products.Any(e => e.Id == id);
        }
    }
}
