/// <reference path="~/GeneratedArtifacts/viewModel.js" />
var KeuzeBedrijf = "";
var KeuzeContact = null;
var KeuzeStandplaatsId = null;
var KeuzeStandplaats = "";
var ZoekBedrijf = "";
var CurrentBedrijf = "";
var BewaarContact = null;

myapp.AddEditContactpersonen.beforeApplyChanges = function (screen) {
    // Write code here.
    if ( screen.Contactpersonen.Tussenvoegsel != null ) {
        screen.Contactpersonen.VolledigeNaam = screen.Contactpersonen.Voornaam + " " + screen.Contactpersonen.Tussenvoegsel + " " + screen.Contactpersonen.Achternaam;
    } else {
        screen.Contactpersonen.VolledigeNaam = screen.Contactpersonen.Voornaam + " " + screen.Contactpersonen.Achternaam;
    }

    var RegExpr = /^\+[1-9]{2,4}[ ][1-9][0-9]{0,2}[ ][1-9][0-9]{5,14}$/;

    if (screen.Contactpersonen.Telefoonnummer !== null) { 
        if (RegExpr.test(screen.Contactpersonen.Telefoonnummer) == false) {
            alert("Voer telefoonnummer op juiste wijze in, bijv:\n+31 6 22397311, \n+31 20 1234567 of\n+31 348 501462");
            return false;
        }
    }
    if (screen.Contactpersonen.MobielNummer !== null) {
        if (RegExpr.test(screen.Contactpersonen.MobielNummer) == false) {
            alert("Voer mobiel nummer op juiste wijze in, bijv:\n+31 6 22397311");
            return false;
        }
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
    // screen.Contactpersonen.VolledigeNaam = "Deze niet invullen, wordt automatisch gevuld!";

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
    screen.findContentItem("Nieuwsbrief")
    .dataBind("value.selected", function (newValue) {
        if (newValue == screen.Contactpersonen.Nieuwsbrief) {
            screen.Contactpersonen.Nieuwsbrief = true;
        }
    });
    screen.findContentItem("Actief")
    .dataBind("value.selected", function (newValue) {
        if (newValue == screen.Contactpersonen.Actief) {
            screen.Contactpersonen.Actief = true;
        }
    });
};
myapp.AddEditContactpersonen.Bedrijfsnaam_Tap_execute = function (screen) {
    // Write code here.
    var BewaarBedrijf = screen.Contactpersonen.Bedrijfsnaam;
    myapp.showZoekBedrijf({
        afterClosed: function () {
            if (KeuzeBedrijf !== BewaarBedrijf && KeuzeBedrijf !== null && KeuzeBedrijf !== "") {
                    if (KeuzeBedrijf !== "< Choice Deleted >") {
                        screen.Contactpersonen.Bedrijfsnaam = KeuzeBedrijf;
                    } else {
                        screen.Contactpersonen.Bedrijfsnaam = "< voeg bedrijf in >";
                    }
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
    BewaarContact = screen.Contactpersonen.Assistent;
    KeuzeContact = screen.Contactpersonen.Assistent;
    var ZoekAssistent = screen.Contactpersonen.Assistent;
    if (ZoekAssistent == "< voeg assistent in >") {
        ZoekAssistent = null;
    }
    myapp.showZoekContact(screen.Contactpersonen.Bedrijfsnaam, ZoekAssistent, {
        afterClosed: function () {
            if (BewaarContact !== KeuzeContact) {
                if (KeuzeContact !== "< Choice Deleted >" ) {
                    screen.Contactpersonen.Assistent = KeuzeContact;
                } else {
                    screen.Contactpersonen.Assistent = "< voeg assistent in >";
                }
            }
            KeuzeContact = null;
            BewaarContact = null;
        }
    });
};
myapp.AddEditContactpersonen.Manager_Tap_execute = function (screen) {
    // Write code here.
    BewaarContact = screen.Contactpersonen.Manager;
    KeuzeContact = screen.Contactpersonen.Manager;
    var ZoekManager = screen.Contactpersonen.Manager;
    if (ZoekManager == "< voeg manager in >") {
        ZoekManager = null;
    }
    myapp.showZoekContact(screen.Contactpersonen.Bedrijfsnaam, ZoekManager, {
        afterClosed: function () {
            if (BewaarContact !== KeuzeContact) {
                if ( KeuzeContact !== "< Choice Deleted >" ) {
                    screen.Contactpersonen.Manager = KeuzeContact;
                } else {
                    screen.Contactpersonen.Manager = "< voeg manager in >";
                }
            }
            KeuzeContact = null;
            BewaarContact = null;
        }
    });
};
myapp.AddEditContactpersonen.Standplaats_Tap_execute = function (screen) {
    // Write code here.
    if (screen.Contactpersonen.Bedrijfsnaam == "< voeg bedrijf in >") {
        alert("Voer eerst het bedrijf in!")
    } else {
        var BewaarStandplaats = screen.Contactpersonen.Standplaats;
        myapp.showZoekStandplaatsAdres(screen.Contactpersonen.Bedrijfsnaam, {
            afterClosed: function () {
                if ( KeuzeStandplaats !== BewaarStandplaats ) {
                    screen.Contactpersonen.setStandplaatsId(KeuzeStandplaatsId);
                    screen.Contactpersonen.setStandplaats(KeuzeStandplaats);
                }
                KeuzeStandplaatsId = null;
                KeuzeStandplaats = "";
            }
        });
    }
};
