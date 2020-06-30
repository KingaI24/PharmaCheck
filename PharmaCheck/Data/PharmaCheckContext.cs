using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using PharmaCheck.Models;

namespace PharmaCheck.Data
{
    public class PharmaCheckContext : IdentityDbContext
    {
        public PharmaCheckContext(DbContextOptions<PharmaCheckContext> options)
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
                    .HasKey(t => t.id);

                supply
                    .HasOne(pt => pt.Product)
                    .WithMany(p => p.Supplies)
                    .HasForeignKey(pt => pt.ProdId)
                    .OnDelete(DeleteBehavior.Cascade); 

                supply
                    .HasOne(pt => pt.Pharmacy)
                    .WithMany(t => t.Supplies)
                    .HasForeignKey(pt => pt.PharmId)
                    .OnDelete(DeleteBehavior.Cascade);
            });

            modelBuilder.Entity<Address>()
                .HasOne<Pharmacy>(s => s.Pharmacy)
                .WithMany(ad => ad.Addresses)
                .HasForeignKey(s => s.PharmId);
        }
    }
}
