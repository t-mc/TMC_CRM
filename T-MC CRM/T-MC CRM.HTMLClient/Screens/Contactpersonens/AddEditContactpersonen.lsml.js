/// <reference path="~/GeneratedArtifacts/viewModel.js" />
var KeuzeBedrijf = "";
var KeuzeContact = "";
var KeuzeStandplaatsId = null;
var KeuzeStandplaats = "";
var ZoekBedrijf = "";
var CurrentBedrijf = "";

myapp.AddEditContactpersonen.beforeApplyChanges = function (screen) {
    // Write code here.
    if ( screen.Contactpersonen.Tussenvoegsel != null ) {
        screen.Contactpersonen.VolledigeNaam = screen.Contactpersonen.Voornaam + " " + screen.Contactpersonen.Tussenvoegsel + " " + screen.Contactpersonen.Achternaam;
    } else {
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
    // Zet default tekst als standplaats leeg is.
    screen.findContentItem("Standplaats")
    .dataBind("value.selectedItem", function (newValue) {
        if (newValue == screen.Contactpersonen.Standplaats) {
            screen.Contactpersonen.Standplaats = "< voeg standplaats in >";
        }
    });
};
myapp.AddEditContactpersonen.Bedrijfsnaam_Tap_execute = function (screen) {
    // Write code here.
    var BewaarBedrijf = screen.Contactpersonen.Bedrijfsnaam;
    myapp.showZoekBedrijf({
        afterClosed: function () {
            if (KeuzeBedrijf !== BewaarBedrijf) {
                screen.Contactpersonen.Bedrijfsnaam = KeuzeBedrijf;
                screen.Contactpersonen.Standplaats = "< voeg standplaats in >";
                screen.Contactpersonen.StandplaatsId = null;
            }
            KeuzeBedrijf = "";
            BewaarBedrijf = "";
        }
    });
};
myapp.AddEditContactpersonen.Assistent_Tap_execute = function (screen) {
    // Write code here.
    myapp.showZoekContact({
        afterClosed: function () {
            screen.Contactpersonen.Assistent = KeuzeContact;
            KeuzeContact = "";
        }
    });
};
myapp.AddEditContactpersonen.Manager_Tap_execute = function (screen) {
    // Write code here.
    myapp.showZoekContact({
        afterClosed: function () {
            screen.Contactpersonen.Manager = KeuzeContact;
            KeuzeContact = "";
        }
    });
};



myapp.AddEditContactpersonen.Standplaats_Tap_execute = function (screen) {
    // Write code here.
    if (screen.Contactpersonen.Bedrijfsnaam == "< voeg bedrijf in >") {
        alert("Voer eerst het bedrijf in!")
    } else {
        var BewaarStandplaats = screen.Contactpersonen.Standplaats;
        CurrentBedrijf = screen.Contactpersonen.Bedrijfsnaam;
        myapp.showZoekStandplaatsAdres(null, {
            afterClosed: function () {
                if ( KeuzeStandplaats !== BewaarStandplaats ) {
                    screen.Contactpersonen.setStandplaatsId(KeuzeStandplaatsId);
                    screen.Contactpersonen.setStandplaats(KeuzeStandplaats);
                }
                KeuzeStandplaatsId = null;
                KeuzeStandplaats = "";
                BewaarStandplaats = "";
            }
        });
    }
};
