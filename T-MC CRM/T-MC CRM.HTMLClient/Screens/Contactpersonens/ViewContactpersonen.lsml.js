/// <reference path="~/GeneratedArtifacts/viewModel.js" />

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
    myapp.showToonStandplaatsAdres(screen.Contactpersonen.StandplaatsId);
};