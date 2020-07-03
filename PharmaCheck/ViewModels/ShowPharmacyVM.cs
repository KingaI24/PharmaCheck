using PharmaCheck.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PharmaCheck.ViewModels
{
    public class ShowPharmacyVM
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public ICollection<ShowAddressVM> Addresses { get; set; }
    }
}
