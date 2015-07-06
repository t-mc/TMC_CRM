/// <reference path="~/GeneratedArtifacts/viewModel.js" />
var VerkoopStadium = "";
var KeuzeBedrijf = "";
var KeuzeContact = "";
var CurrentBedrijf = "";

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
myapp.AddEditVerkoopkansenProjecten.beforeApplyChanges = function (screen) {
    // Write code here.

    if (screen.VerkoopkansenProjecten.Bedrijfsnaam == "< voeg bedrijf in >") {
        alert("Voeg een bedrijf toe om verder te gaan!");
        return false;
    } else if (screen.VerkoopkansenProjecten.Opdrachtgever == "< voeg opdrachtgever in >") {
        alert("Voeg een opdrachtgever toe om verder te gaan!");
        return false;
    } else {
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
    }

};

myapp.AddEditVerkoopkansenProjecten.Contactpersonens_ItemTap_execute = function (screen) {
    // Write code here.
    screen.VerkoopkansenProjecten.Opdrachtgever = screen.Contactpersonens.selectedItem.VolledigeNaam;
    screen.closePopup();
};


myapp.AddEditVerkoopkansenProjecten.BedrijvenOpNaam_ItemTap_execute = function (screen) {
    // Write code here.
    screen.VerkoopkansenProjecten.Bedrijfsnaam = screen.BedrijvenOpNaam.selectedItem.Bedrijfsnaam;
    screen.closePopup();
};
myapp.AddEditVerkoopkansenProjecten.Bedrijfsnaam_Tap_execute = function (screen) {
    // Write code here.
    var BewaarBedrijf = screen.VerkoopkansenProjecten.Bedrijfsnaam;
    myapp.showZoekBedrijf( {
        afterClosed: function () {
            if (KeuzeBedrijf == null || KeuzeBedrijf == "") {
                screen.VerkoopkansenProjecten.Bedrijfsnaam = BewaarBedrijf;
            } else if (BewaarBedrijf == KeuzeBedrijf) {
                screen.VerkoopkansenProjecten.Bedrijfsnaam = BewaarBedrijf;
            } else {
                screen.VerkoopkansenProjecten.Bedrijfsnaam = KeuzeBedrijf;
            }
            BewaarBedrijf = "";
            KeuzeBedrijf = "";
        }
    });
};
myapp.AddEditVerkoopkansenProjecten.Opdrachtgever_Tap_execute = function (screen) {
    // Write code here.
    if (screen.VerkoopkansenProjecten.Bedrijfsnaam == "< voeg bedrijf in >") {
        alert("Voeg eerst bedrijf in!");
    }
    else {
        var BewaarContact = screen.VerkoopkansenProjecten.Opdrachtgever;
        CurrentBedrijf = screen.VerkoopkansenProjecten.Bedrijfsnaam;
        myapp.showZoekOpdrachtgever(null, {
            afterClosed: function () {
                if (KeuzeContact == null || KeuzeContact == "") {
                    screen.VerkoopkansenProjecten.Opdrachtgever = BewaarContact;
                } else if (BewaarContact == KeuzeContact) {
                    screen.VerkoopkansenProjecten.Opdrachtgever = BewaarContact;
                } else {
                    screen.VerkoopkansenProjecten.Opdrachtgever = KeuzeContact;
                }
                BewaarContact = "";
                KeuzeContact = "";
            }
        });
    }
};
myapp.AddEditVerkoopkansenProjecten.Verkoopstadium_postRender = function (element, contentItem) {
    // Write code here.
    // Write code here.
    if (contentItem.value == undefined || contentItem.value == null) {
        contentItem.value = "Marktkans";
    }
};