using PharmaCheck.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PharmaCheck.ViewModels
{
    public class ShowProductVM
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public string ActiveSubstance { get; set; }
        public Double Dosage { get; set; }
        public Formulation Formulation { get; set; }
        public bool OnPrescription { get; set; }
        public string RCP { get; set; }
        public int totalSupplier { get; set; }
    }
}
