/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ZoekContact.Contactpersonens_ItemTap_execute = function (screen) {
    // Write code here.
    KeuzeContact = screen.details.properties.Contactpersonens.value.selectedItem.VolledigeNaam;
};
myapp.ZoekContact.created = function (screen) {
    // Write code here.
    screen.setLpBedrijfsnaam(CurrentBedrijf);
};