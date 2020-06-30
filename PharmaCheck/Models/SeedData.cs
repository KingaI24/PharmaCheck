using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using PharmaCheck.Data;
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
            using (var context = new PharmaCheckContext(serviceProvider
                .GetRequiredService<DbContextOptions<PharmaCheckContext>>()))
            {
                // Look for any tasks.
                if (context.Pharmacies.Any() && 
                    context.Products.Any() && 
                    context.Addresses.Any() &&
                    context.Supplies.Any()) 
                {
                    return;   // DB table has been seeded
                }

                var pharmacy1 = new Pharmacy { Name = "PharmaCode", Addresses = new List<Address>() };
                var pharmacy2 = new Pharmacy { Name = "Primula", Addresses = new List<Address>() };

                var address1 = new Address
                {
                    Description = "Mihai Viteazul 1",
                    Latitude = 46.7743027,
                    Longitude = 23.589522225358266
                };

                var address2 = new Address
                {
                    Description = "Unirii 5",
                    Latitude = 46.768020,
                    Longitude = 23.624350
                };

                var address3 = new Address
                {
                    Description = "Alexandru Vlahuta 50",
                    Latitude = 46.769930,
                    Longitude = 23.557400
                };

                pharmacy1.Addresses.Add(address1);
                pharmacy1.Addresses.Add(address2);
                pharmacy2.Addresses.Add(address3);

                context.Pharmacies.Add(pharmacy1);
                context.Pharmacies.Add(pharmacy2);

                context.Addresses.Add(address1);
                context.Addresses.Add(address2);
                context.Addresses.Add(address3);

                var product1 = new Product()
                {
                    Name = "Euthyrox",
                    ActiveSubstance = "Levothyroxine",
                    Dosage = 25.00,
                    Formulation = Formulation.tablet,
                    OnPrescription = true,
                    RCP = "https://www.anm.ro/_/_RCP/RCP_7542_16.04.15.pdf"
                };

                context.Supplies.AddRange(
                    new Supply 
                    { 
                        Product = product1, 
                        ProdId = product1.Id, 
                        Pharmacy = pharmacy1, 
                        PharmId = pharmacy1.Id, 
                        Price = 12.00, 
                        Discount = 10 
                    }
                );

                context.SaveChanges();
            }
        }
    }
}
