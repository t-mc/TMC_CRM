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
myapp.AddEditAdressen.beforeApplyChanges = function (screen) {
    // Write code here.
    if (screen.Adressen.Land == "Nederland") { 
        var Expr = /^[1-9][0-9]{3}[\s](?!SS|SA|SD|[A-Z](F|I|O|Q|U|Y))[A-Z]{2}$/;
        var Postcode = screen.Adressen.Postcode;

        if (Postcode.length == 6) {
            var PostcodeCijfers = Postcode.substring(0, 4)
            var PostcodeLetters = Postcode.substring(4);
            Postcode = PostcodeCijfers + " " + PostcodeLetters;
        }
        Postcode = Postcode.toUpperCase();

        if (Expr.test(Postcode) !== true) {
            alert("Voor Nederland een geldige postcode in de vorm van 1234 XX invoeren! \nOf kies eerst voor een ander land!");
            return false;
        } else {
            screen.Adressen.Postcode = Postcode;
        }
    }
};

myapp.AddEditAdressen.created = function (screen) {
    // Write code here.
    if (screen.Adressen.Land == null) {
        screen.Adressen.Land = "Nederland";
    }
};