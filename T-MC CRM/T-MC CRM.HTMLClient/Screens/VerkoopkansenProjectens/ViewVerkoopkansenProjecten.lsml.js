/// <reference path="~/GeneratedArtifacts/viewModel.js" />
var ZoekBedrijf = "";
var ZoekOpdrachtgever = "";

myapp.ViewVerkoopkansenProjecten.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.VerkoopkansenProjecten.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.VerkoopkansenProjecten." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}



myapp.ViewVerkoopkansenProjecten.DeleteVerkoopkans_execute = function (screen) {
    // Write code here.
    var bevestig = confirm("Weet je zeker dat je deze verkoopkans wilt verwijderen?");

    if (bevestig == true) {
        screen.VerkoopkansenProjecten.deleteEntity();
        return myapp.commitChanges().then(null, function fail(e) {
            myapp.cancelChanges();
            throw e;
        });
    }
};
myapp.ViewVerkoopkansenProjecten.Verkoopkans_render = function (element, contentItem) {
    // Write code here.
    var verkoopKans = $("<p><i>" + contentItem.value * 100 + " %</i></p>");
    verkoopKans.appendTo($(element));
};
myapp.ViewVerkoopkansenProjecten.Bedrijfsnaam_Tap_execute = function (screen) {
    // Write code here.
    ZoekBedrijf = screen.VerkoopkansenProjecten.Bedrijfsnaam;
    myapp.showToonDetailsBedrijf();
};
myapp.ViewVerkoopkansenProjecten.Opdrachtgever_Tap_execute = function (screen) {
    // Write code here.
    ZoekOpdrachtgever = screen.VerkoopkansenProjecten.Opdrachtgever;
    myapp.showToonDetailsOpdrachtgever();
};
myapp.ViewVerkoopkansenProjecten.ShowBrowseOrders_Tap_execute = function (screen) {
    // Write code here.
    myapp.navigateBack();
};