using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace PharmaCheck.Models
{
    public class Supply
    {
        public long ProdId { get; set; }
        public long PharmId { get; set; }
        public Product Product { get; set; }
        public Pharmacy Pharmacy { get; set; }
        public Double Price { get; set; }
        public int Discount { get; set; }
    }
}
