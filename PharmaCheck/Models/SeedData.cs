using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PharmaCheck.Models
{
    public class SeedData
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            using (var context = new SupplyChainContext(serviceProvider
                .GetRequiredService<DbContextOptions<SupplyChainContext>>()))
            {
                // Look for any tasks.
                if (context.Pharmacies.Any() && 
                    context.Products.Any() && 
                    context.Addresses.Any() &&
                    context.Supplies.Any()) 
                {
                    return;   // DB table has been seeded
                }

                var supply = new Supply
                {
                    Product = new Product()
                    {
                        Name = "Euthyrox",
                        ActiveSubstance = "Levothyroxine",
                        Dosage = 25.00,
                        Formulation = Formulation.tablet,
                        OnPrescription = true,
                        RCP = "https://www.anm.ro/_/_RCP/RCP_7542_16.04.15.pdf"
                    },
                    Pharmacy = new Pharmacy()
                    {
                        Name = "PharmaCode",
                        Address = new Address()
                        {
                            Description = "Mihai Viteazul 1",
                            Latitude = 46.7743027,
                            Longitude = 23.589522225358266
                        }
                    }
                };
                context.SaveChanges();
            }
        }
    }
}
