using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PharmaCheck.Models
{
    public class SupplyChainContext : IdentityDbContext
    {
        public SupplyChainContext(DbContextOptions<SupplyChainContext> options)
            : base(options)
        { }

        public DbSet<Pharmacy> Pharmacies { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<Address> Addresses { get; set; }
        public DbSet<Supply> Supplies { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Supply>(supply =>
            {
                supply
                    .HasKey(t => new { t.PharmId, t.ProdId });

                supply
                    .HasOne(pt => pt.Product)
                    .WithMany(p => p.Supplies)
                    .HasForeignKey(pt => pt.ProdId)
                    .OnDelete(DeleteBehavior.Cascade); ;

                supply
                    .HasOne(pt => pt.Pharmacy)
                    .WithMany(t => t.Supplies)
                    .HasForeignKey(pt => pt.PharmId)
                    .OnDelete(DeleteBehavior.Cascade);
            });

            modelBuilder.Entity<Pharmacy>()
                .HasOne<Address>(s => s.Address)
                .WithOne(ad => ad.Pharmacy)
                .HasForeignKey<Address>(ad => ad.Id);
        }
    }
}
