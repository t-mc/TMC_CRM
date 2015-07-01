/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.AddEditAdressen.DeleteAdres_execute = function (screen) {
    // Vraag bevestiging voor verwijderen
    var bevestig = confirm("Weet je zeker dat je dit adres wilt verwijderen?");

    if (bevestig == true) {
        screen.Adressen.deleteEntity();
        return myapp.commitChanges().then(null, function fail(e) {
            myapp.cancelChanges();
            throw e;
        });
    } 


};