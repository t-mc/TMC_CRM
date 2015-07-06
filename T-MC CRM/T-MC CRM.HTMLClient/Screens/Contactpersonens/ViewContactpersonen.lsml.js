/// <reference path="~/GeneratedArtifacts/viewModel.js" />
var KeuzeStandplaats = null;
var ZoekBedrijf = "";
var ZoekManager = "";
var ZoekAssistent = "";

myapp.ViewContactpersonen.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.Contactpersonen.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.Contactpersonen." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}
myapp.ViewContactpersonen.DeleteContact_execute = function (screen) {
    // Write code here.
    var bevestig = confirm("Weet je zeker dat je deze contactpersoon wilt verwijderen?");

    if (bevestig == true) {
        screen.Contactpersonen.deleteEntity();
        return myapp.commitChanges().then(null, function fail(e) {
            myapp.cancelChanges();
            throw e;
        });
    }
};
myapp.ViewContactpersonen.Standplaats_Tap_execute = function (screen) {
    // Write code here.
    KeuzeStandplaats = screen.Contactpersonen.StandplaatsId;
    myapp.showToonStandplaatsAdres();
};
myapp.ViewContactpersonen.Contactpersonen_Bedrijfsnaam_Tap_execute = function (screen) {
    // Write code here.
    ZoekBedrijf = screen.Contactpersonen.Bedrijfsnaam;
    myapp.showToonDetailsBedrijf();
};
myapp.ViewContactpersonen.Manager_Tap_execute = function (screen) {
    // Write code here.
    ZoekManager = screen.Contactpersonen.Manager;
    myapp.showToonDetailsManager();
};
myapp.ViewContactpersonen.Assistent_Tap_execute = function (screen) {
    // Write code here.
    ZoekAssistent = screen.Contactpersonen.Assistent;
    myapp.showToonDetailAssistent();
};
myapp.ViewContactpersonen.ShowBrowseContactpersonens_Tap_execute = function (screen) {
    // Write code here.
    myapp.navigateBack();
};