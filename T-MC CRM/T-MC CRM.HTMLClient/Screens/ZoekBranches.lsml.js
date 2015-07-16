/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ZoekBranches.Branche_Tap_execute = function (screen) {
    // Write code here.
    KeuzeBranche = screen.details.properties.Branches.value.selectedItem.Branche1;
};
myapp.ZoekBranches.VerwijderKeuze_execute = function (screen) {
    // Write code here.
    var BewaarBranche = KeuzeBranche;
    var r = confirm("Keuze verwijderen?");
    if (r == true) {
        KeuzeBranche = "< Choice Deleted >";
        //screen.BedrijvenOpNaam.load();
    } else {
        KeuzeBranche = BewaarBranche;
    }


};