using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.LightSwitch;
namespace LightSwitchApplication
{
    public partial class Bedrijven
    {
        partial void Bedrijven_Created()
        {
            this.Actief = true;
        }

        partial void Telefoonnummer_Validate(EntityValidationResultsBuilder results)
        {
            // results.AddPropertyError("<Error-Message>");

        }
    }
}
