﻿/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ZoekAdressen.created = function (screen) {
    // Write code here.
    screen.setLpBedrijfsnaam(ZoekBedrijf);
};
myapp.ZoekAdressen.Adressens_ItemTap_execute = function (screen) {
    // Write code here.
    KeuzeStandplaatsId = screen.details.properties.Adressens.value.selectedItem.Id;
    KeuzeStandplaats = screen.details.properties.Adressens.value.selectedItem.Plaats;
};

