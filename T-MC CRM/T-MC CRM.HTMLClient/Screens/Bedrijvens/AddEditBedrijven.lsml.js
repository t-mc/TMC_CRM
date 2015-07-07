/// <reference path="~/GeneratedArtifacts/viewModel.js" />
var KeuzeBedrijf = "";
var KeuzeContact = "";
var KeuzeBranche = "";
var CurrentBedrijf = "";

myapp.AddEditBedrijven.created = function (screen) {
    // Write code here.
    screen.findContentItem("MoederAccount")
    .dataBind("value.selectedItem", function (newValue) {
        if (newValue == screen.Bedrijven.MoederAccount) {
            screen.Bedrijven.MoederAccount = "< voeg moeder account in >";
        }
    })
    screen.findContentItem("Branche")
    .dataBind("value.selected", function (newValue) {
        if (newValue == screen.Bedrijven.Branche) {
            screen.Bedrijven.Branche = "< voeg branche in >"
        }
    })
    screen.findContentItem("Actief")
    .dataBind("value.selected", function (newValue) {
        if (newValue == screen.Bedrijven.Actief) {
            screen.Bedrijven.Actief = true;
        }
    })
    screen.findContentItem("PrimairContact")
    .dataBind("value.selected", function (newValue) {
        if (newValue == screen.Bedrijven.PrimairContact) {
            screen.Bedrijven.PrimairContact = "< voeg primair contact in >";
        }
    })
};
myapp.AddEditBedrijven.MoederAccount_Tap_execute = function (screen) {
    // Write code here.
    var MoederAccount = screen.Bedrijven.MoederAccount;
    myapp.showZoekBedrijf({
        afterClosed: function () {
            if (KeuzeBedrijf !== MoederAccount) {
                screen.Bedrijven.MoederAccount = KeuzeBedrijf;
            }
        }
    });
};
myapp.AddEditBedrijven.PrimairContact_Tap_execute = function (screen) {
    // Write code here.
    CurrentBedrijf = screen.Bedrijven.Bedrijfsnaam;
    var PrimairContact = screen.Bedrijven.PrimairContact;
    myapp.showZoekContact(screen.Bedrijven.Bedrijfsnaam, null, {
        afterClosed: function () {
            if (KeuzeContact !== PrimairContact) {
                screen.Bedrijven.PrimairContact = KeuzeContact;
            }
            CurrentBedrijf = "";
        }
    })
};
myapp.AddEditBedrijven.Branche_Tap_execute = function (screen) {
    // Write code here.
    var Branche = screen.Bedrijven.Branche;
        myapp.showZoekBranches({
        afterClosed: function () {
            if (KeuzeBranche !== Branche) {
                screen.Bedrijven.Branche = KeuzeBranche;
            }
        }
    })
};
