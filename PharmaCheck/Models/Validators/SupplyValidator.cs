using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PharmaCheck.Models.Validators
{
    public class SupplyValidator : AbstractValidator<Supply>
    {
        public SupplyValidator()
        {
            RuleFor(x => x.Price)
                .GreaterThan(0.00).WithMessage("Price cannot be negative");
            RuleFor(x => x.Discount)
                .InclusiveBetween(0,100).WithMessage("Discount percentage is between 0-100");
            //RuleFor(x => x.Stock)
            //    .GreaterThan(0).WithMessage("Stock cannot be negative");
        }
    }
}
