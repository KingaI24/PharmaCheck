using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PharmaCheck.ViewModels.Collections
{
    public class ShowSupplyVM
    {
        public long Id { get; set; }
        public long ProdId { get; set; }
        public long PharmId { get; set; }
        public string PharmacyName { get; set; }
        public Double Dosage { get; set; }
        public string ProductName { get; set; }
        public Double Price { get; set; }
        public int Discount { get; set; }
        public int Stock { get; set; }
    }
}
