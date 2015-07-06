/// <reference path="~/GeneratedArtifacts/viewModel.js" />
myapp.ZoekContact.Contactpersonens_ItemTap_execute = function (screen) {
    // Write code here.
    KeuzeContact = screen.details.properties.Contactpersonens.value.selectedItem.VolledigeNaam;
};
myapp.ZoekContact.DeleteChoice_execute = function (screen) {
    // Write code here.
    var BewaarKeuze = BewaarContact;
    var r = confirm("Keuze verwijderen?");
    if (r == true) {
        KeuzeContact = "< Choice Deleted >";
        screen.setLpVolledigeNaam(null);
        screen.Contactpersonens.load();
    } else {
        KeuzeContact = BewaarKeuze;
    }
};
