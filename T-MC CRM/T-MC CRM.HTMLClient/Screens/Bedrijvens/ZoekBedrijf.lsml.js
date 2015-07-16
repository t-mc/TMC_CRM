/// <reference path="~/GeneratedArtifacts/viewModel.js" />


myapp.ZoekBedrijf.Bedrijfsnaam_Tap_execute = function (screen) {
    // Write code here.
    KeuzeBedrijf = screen.details.properties.BedrijvenOpNaam.value.selectedItem.Bedrijfsnaam;
};

myapp.ZoekBedrijf.DeleteChoice_execute = function (screen) {
    // Write code here.
    var BewaarKeuze = KeuzeBedrijf;
    var r = confirm("Keuze verwijderen?");
    if (r == true) {
        KeuzeBedrijf = "< Choice Deleted >";
        screen.setBedrijvenBedrijfsnaam(null);
        screen.BedrijvenOpNaam.load();
    } else {
        KeuzeBedrijf = BewaarKeuze;
    }
};