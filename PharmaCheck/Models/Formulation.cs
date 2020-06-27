using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PharmaCheck.Models
{
    public enum Formulation
    {
        tablet = 0,
        capsule = 1,
        suppository = 2,
        suspension = 3,
        solution = 4,
        injectable = 5,
        perfuzable = 6,
        IUD = 7
    }
}
