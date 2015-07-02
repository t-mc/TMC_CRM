/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ZoekOpdrachtgever.Contactpersonens_ItemTap_execute = function (screen) {
    // Write code here.
        KeuzeContact = screen.details.properties.Contactpersonens.value.selectedItem.VolledigeNaam;

};
myapp.ZoekOpdrachtgever.created = function (screen) {
    // Write code here.
    screen.setLpBedrijfsnaam(CurrentBedrijf);
};