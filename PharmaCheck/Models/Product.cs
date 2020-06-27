using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Policy;
using System.Threading.Tasks;

namespace PharmaCheck.Models
{
    public class Product
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public string ActiveSubstance { get; set; }
        public Double Dosage { get; set; }
        public Formulation Formulation { get; set; }
        public bool OnPrescription { get; set; }
        public string RCP { get; set; }

        public virtual ICollection<Supply> Supplies { get; set; }
    }
}
