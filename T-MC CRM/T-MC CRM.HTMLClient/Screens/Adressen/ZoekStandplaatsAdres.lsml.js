/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ZoekStandplaatsAdres.created = function (screen) {
    // Write code here.
    screen.setLpBedrijfsnaam(CurrentBedrijf);
};
myapp.ZoekStandplaatsAdres.Adressens_ItemTap_execute = function (screen) {
    // Write code here.
    KeuzeStandplaatsId = screen.details.properties.Adressens.value.selectedItem.Id;
    KeuzeStandplaats = screen.details.properties.Adressens.value.selectedItem.Plaats;
};