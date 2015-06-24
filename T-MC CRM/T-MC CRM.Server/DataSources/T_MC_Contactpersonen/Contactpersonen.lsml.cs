using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.LightSwitch;
namespace LightSwitchApplication
{
    public partial class Contactpersonen
    {
        partial void Contactpersonen_Created()
        {
            this.Actief = true;
            this.Nieuwsbrief = true;
        }
    }
}
