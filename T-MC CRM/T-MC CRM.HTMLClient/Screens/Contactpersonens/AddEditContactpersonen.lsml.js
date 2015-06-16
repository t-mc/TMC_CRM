/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.AddEditContactpersonen.beforeApplyChanges = function (screen) {
    // Write code here.
    // alert("Koek koek 1");
    if ( screen.Contactpersonen.Tussenvoegsel != null ) {
        // alert("Koek koek 2");
        screen.Contactpersonen.VolledigeNaam = screen.Contactpersonen.Voornaam + " " + screen.Contactpersonen.Tussenvoegsel + " " + screen.Contactpersonen.Achternaam;
    } else {
        // alert("Koek koek 3");
        screen.Contactpersonen.VolledigeNaam = screen.Contactpersonen.Voornaam + " " + screen.Contactpersonen.Achternaam;
    }
};

myapp.AddEditContactpersonen.created = function (screen) {
    // Write code here.
    screen.Contactpersonen.VolledigeNaam = "Deze niet invullen, wordt automatisch gevuld!";
};