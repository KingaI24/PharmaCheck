using SQLitePCL;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace PharmaCheck.Models
{
    public class Address
    {
        public long Id { get; set; }
        public string Description { get; set; }
        public Double Latitude { get; set; }
        public Double Longitude { get; set; }
        public Pharmacy Pharmacy { get; set; }
        public long PharmId { get; set; }
    }
}
