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
    if (MoederAccount == "< voeg moeder account in >") {
        MoederAccount = null;
    }

    myapp.showZoekBedrijf({
        afterClosed: function () {
            if (KeuzeBedrijf !== MoederAccount) {
                if (KeuzeBedrijf !== "< Choice Deleted >") {
                    screen.Bedrijven.MoederAccount = KeuzeBedrijf;
                } else {
                    screen.Bedrijven.MoederAccount = "< voeg moeder account in >";
                }
            }
            MoederAccount = null;
            KeuzeBedrijf = null;
        }
    });
};
myapp.AddEditBedrijven.PrimairContact_Tap_execute = function (screen) {
    // Write code here.
    CurrentBedrijf = screen.Bedrijven.Bedrijfsnaam;
    var PrimairContact = screen.Bedrijven.PrimairContact;
    if (PrimairContact == "< voeg primair contact in >") {
        PrimairContact = null;
    }
    myapp.showZoekContact(screen.Bedrijven.Bedrijfsnaam, PrimairContact, {
        afterClosed: function () {
            if (KeuzeContact !== PrimairContact && KeuzeContact !== null && KeuzeContact !== "") {
                if (KeuzeContact !== "< Choice Deleted >") {
                    screen.Bedrijven.PrimairContact = KeuzeContact;
                } else {
                    screen.Bedrijven.PrimairContact = "< voeg primair contact in >";
                }
            }
            CurrentBedrijf = null;
            PrimairContact = null;
            KeuzeContact = null;
        }
    })
};
myapp.AddEditBedrijven.Branche_Tap_execute = function (screen) {
    // Write code here.
    var Branche = screen.Bedrijven.Branche;
    KeuzeBranche = Branche;

    myapp.showZoekBranches({
    afterClosed: function () {
        if (KeuzeBranche !== Branche) {
            if (KeuzeBranche == "< Choice Deleted >") {
                screen.Bedrijven.Branche = "< voeg branche in >";
            } else {
                screen.Bedrijven.Branche = KeuzeBranche;
            }
        }
        KeuzeBranche = null;
        Branche = null;
    }
    })
};

myapp.AddEditBedrijven.beforeApplyChanges = function (screen) {
    // Write code here.
    var RegExpr = /^\+[1-9]{2,4}[ ][1-9][0-9]{0,2}[ ][1-9][0-9]{5,14}$/;

    if (RegExpr.test(screen.Bedrijven.Telefoonnummer) == false) {
        alert("Voer telefoonnummer op juiste wijze in, bijv:\n+31 6 22397311, \n+31 20 1234567 of\n+31 348 501462");
        return false;
    }
};