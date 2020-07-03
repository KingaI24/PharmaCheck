using FluentValidation;
using Microsoft.AspNetCore.Identity;
using PharmaCheck.Models.Account;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PharmaCheck.Models.Validators
{
    public class UserValidator : AbstractValidator<RegisterModel>
    {
        public UserValidator()
        {
            RuleFor(x => x.Email)
                .EmailAddress().WithMessage("Invalid email format");

            RuleFor(x => x.Password)
                .Password();

            //RuleFor(x => x.ConfirmPassword)
            //    .Equal(x => x.Password).WithMessage("Passwords are not the same")
            //    .Password();
        }
    }
    public static class RuleBuilderExtensions
    {
        public static IRuleBuilder<T, string> Password<T>(this IRuleBuilder<T, string> ruleBuilder)
        {
            var options = ruleBuilder
                .MinimumLength(8).WithMessage("Password should be minimum 8 character long")
                .Matches("[A-Z]").WithMessage("Password should contain uppercase letters")
                .Matches("[a-z]").WithMessage("Password should contain lower letters")
                .Matches("[0-9]").WithMessage("Password should contain digits")
                .Matches("[^a-zA-Z0-9]").WithMessage("Password should cointain special characters");
            return options;
        }
    }
}
