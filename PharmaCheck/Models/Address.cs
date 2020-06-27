using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace PharmaCheck.Models
{
    public class Address
    {
        [ForeignKey("Pharmacy")]
        public long Id { get; set; }
        public string Description { get; set; }
        public Double Latitude { get; set; }
        public Double Longitude { get; set; }
        public virtual Pharmacy Pharmacy { get; set; }

    }
}
