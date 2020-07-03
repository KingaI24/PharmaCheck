using AutoMapper;
using PharmaCheck.Models;
using PharmaCheck.ViewModels;
using PharmaCheck.ViewModels.Collections;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TaskAPI.Models
{
    public class AutoMapping : Profile
    {
        public AutoMapping()
        { 
            CreateMap<InsertAddressVM,Address>();
            
            CreateMap<Address,ShowAddressVM>();

            CreateMap<Product,ShowProductVM>()
                .ForMember(p => p.totalSupplier, opt => opt.MapFrom(src => src.Supplies.Count())); 

            CreateMap<Pharmacy, ShowPharmacyVM>();

            CreateMap<Supply, ShowSupplyVM>()
                .ForMember(p => p.PharmacyName, opt => opt.MapFrom(src => src.Pharmacy.Name))
                .ForMember(p => p.Dosage, opt => opt.MapFrom(src => src.Product.Dosage))
                .ForMember(p => p.ProductName, opt => opt.MapFrom(src => src.Product.Name));
        }
    }
}
