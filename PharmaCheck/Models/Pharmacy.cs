using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PharmaCheck.Models
{
    public class Pharmacy
    {
        public long Id {get; set; }
        public string Name { get; set; }
        public virtual ICollection<Address> Addresses { get; set; }
        public virtual ICollection<Supply> Supplies { get; set; }
    }
}
