/// <reference path="~/GeneratedArtifacts/viewModel.js" />
var KeuzeBedrijf;
var KeuzeContact;

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
    // Zet default tekst als bedrijfsnaam leeg is.
     screen.findContentItem("VolledigeNaam")
    .dataBind("value.selectedItem", function (newValue) {
        if (newValue == screen.Contactpersonen.VolledigeNaam) {
            screen.Contactpersonen.VolledigeNaam = "< voeg bedrijf in >";
        }
    });
    screen.Contactpersonen.VolledigeNaam = "Deze niet invullen, wordt automatisch gevuld!";

    // Zet default tekst als bedrijfsnaam leeg is.
    screen.findContentItem("Bedrijfsnaam")
    .dataBind("value.selectedItem", function (newValue) {
        if (newValue == screen.Contactpersonen.Bedrijfsnaam) {
            screen.Contactpersonen.Bedrijfsnaam = "< voeg bedrijf in >";
        }
    });
    // Zet default tekst als assistent leeg is.
    screen.findContentItem("Assistent")
    .dataBind("value.selectedItem", function (newValue) {
        if (newValue == screen.Contactpersonen.Assistent) {
            screen.Contactpersonen.Assistent = "< voeg assistent in >";
        }
    });
    // Zet default tekst als manager leeg is.
    screen.findContentItem("Manager")
    .dataBind("value.selectedItem", function (newValue) {
        if (newValue == screen.Contactpersonen.Manager) {
            screen.Contactpersonen.Manager = "< voeg manager in >";
        }
    });
};
myapp.AddEditContactpersonen.Bedrijfsnaam_Tap_execute = function (screen) {
    // Write code here.
    myapp.showZoekBedrijf({
        afterClosed: function () {
            screen.Contactpersonen.Bedrijfsnaam = KeuzeBedrijf;
        }
    });
};
myapp.AddEditContactpersonen.Assistent_Tap_execute = function (screen) {
    // Write code here.
    myapp.showZoekContact({
        afterClosed: function () {
            screen.Contactpersonen.Assistent = KeuzeContact;
        }
    });
};
myapp.AddEditContactpersonen.Manager_Tap_execute = function (screen) {
    // Write code here.
    myapp.showZoekContact({
        afterClosed: function () {
            screen.Contactpersonen.Manager = KeuzeContact;
        }
    });
};