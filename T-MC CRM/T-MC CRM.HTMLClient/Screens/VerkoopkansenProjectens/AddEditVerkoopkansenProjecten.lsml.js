/// <reference path="~/GeneratedArtifacts/viewModel.js" />
var VerkoopStadium;
var KeuzeBedrijf;
var KeuzeContact;

myapp.AddEditVerkoopkansenProjecten.beforeApplyChanges = function (screen) {
    // Write code here.
    // alert("Koekoek 2");
    if (screen.VerkoopkansenProjecten.Verkoopstadium != VerkoopStadium) {
        switch (screen.VerkoopkansenProjecten.Verkoopstadium) {
            case "Marktkans":
                screen.VerkoopkansenProjecten.Verkoopkans = 0;
                break;
            case "Lead":
                screen.VerkoopkansenProjecten.Verkoopkans = 0.1;
                break;
            case "Prospect":
                screen.VerkoopkansenProjecten.Verkoopkans = 0.25;
                break;
            case "Verkoopkans":
                screen.VerkoopkansenProjecten.Verkoopkans = 0.5;
                break;
            case "Offerte":
                screen.VerkoopkansenProjecten.Verkoopkans = 0.75;
                break;
            case "Order":
                screen.VerkoopkansenProjecten.Verkoopkans = 1;
                break;
            case "Order afgerond":
                screen.VerkoopkansenProjecten.Verkoopkans = 0;
                break;
            case "Loss":
                screen.VerkoopkansenProjecten.Verkoopkans = 0;
                break;

            }
    }
};

myapp.AddEditVerkoopkansenProjecten.Contactpersonens_ItemTap_execute = function (screen) {
    // Write code here.
    screen.VerkoopkansenProjecten.Opdrachtgever = screen.Contactpersonens.selectedItem.VolledigeNaam;
    screen.closePopup();
};

myapp.AddEditVerkoopkansenProjecten.created = function (screen) {
    // Zet default tekst als Bedrijfsnaam leeg is.
    screen.findContentItem("Bedrijfsnaam")
    .dataBind("value.selectedItem", function (newValue) {
        if (newValue == screen.VerkoopkansenProjecten.Bedrijfsnaam) {
            screen.VerkoopkansenProjecten.Bedrijfsnaam = "< voeg bedrijf in >";
        }
    });
    // Zet default tekst als Opdrachtgever leeg is.
    screen.findContentItem("Opdrachtgever")
    .dataBind("value.selectedItem", function (newValue) {
        if (newValue == screen.VerkoopkansenProjecten.Opdrachtgever) {
            screen.VerkoopkansenProjecten.Opdrachtgever = "< voeg opdrachtgever in >";
        }

    });
};
myapp.AddEditVerkoopkansenProjecten.BedrijvenOpNaam_ItemTap_execute = function (screen) {
    // Write code here.
    screen.VerkoopkansenProjecten.Bedrijfsnaam = screen.BedrijvenOpNaam.selectedItem.Bedrijfsnaam;
    screen.closePopup();
};
myapp.AddEditVerkoopkansenProjecten.Opdrachtgever_Tap_execute = function (screen) {
    // Write code here.
    myapp.showZoekContact({
        afterClosed: function () {
            screen.VerkoopkansenProjecten.Opdrachtgever = KeuzeContact;
        }
    });
};
myapp.AddEditVerkoopkansenProjecten.Bedrijfsnaam_Tap_execute = function (screen) {
    // Write code here.
    myapp.showZoekBedrijf( {
        afterClosed: function () {
            screen.VerkoopkansenProjecten.Bedrijfsnaam = KeuzeBedrijf;
        }
    });
};