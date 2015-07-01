/// <reference path="~/GeneratedArtifacts/viewModel.js" />
var ZoekPrimairContact = "";
var ZoekBedrijf = "";

myapp.ViewBedrijven.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.Bedrijven.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.Bedrijven." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}


myapp.ViewBedrijven.DeleteAdres_execute = function (screen) {
    // Write code here.

};


myapp.ViewBedrijven.PrimairContact_Tap_execute = function (screen) {
    // Write code here.
    ZoekPrimairContact = screen.Bedrijven.PrimairContact;
    myapp.showToonDetailsPrimairContact();
};
myapp.ViewBedrijven.MoederAccount_Tap_execute = function (screen) {
    // Write code here.
    ZoekBedrijf = screen.Bedrijven.MoederAccount;
    myapp.showToonDetailsBedrijf();
};