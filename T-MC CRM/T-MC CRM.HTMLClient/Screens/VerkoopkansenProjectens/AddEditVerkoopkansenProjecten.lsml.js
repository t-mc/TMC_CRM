/// <reference path="~/GeneratedArtifacts/viewModel.js" />
var VerkoopStadium;

myapp.AddEditVerkoopkansenProjecten.created = function (screen) {
    // Write code here.
    // alert("Koekoek 1");
    VerkoopStadium = screen.VerkoopkansenProjecten.Verkoopstadium;
};

myapp.AddEditVerkoopkansenProjecten.beforeApplyChanges = function (screen) {
    // Write code here.
    // alert("Koekoek 2");
    if (screen.VerkoopkansenProjecten.Verkoopstadium != VerkoopStadium) {
        switch (screen.VerkoopkansenProjecten.Verkoopstadium) {
            case "Marktkans":
                screen.VerkoopkansenProjecten.Verkoopkans = 0;
                break;
            case "Lead":
                screen.VerkoopkansenProjecten.Verkoopkans = 0.1;
                break;
            case "Prospect":
                screen.VerkoopkansenProjecten.Verkoopkans = 0.25;
                break;
            case "Verkoopkans":
                screen.VerkoopkansenProjecten.Verkoopkans = 0.5;
                break;
            case "Offerte":
                screen.VerkoopkansenProjecten.Verkoopkans = 0.75;
                break;
            case "Order":
                screen.VerkoopkansenProjecten.Verkoopkans = 1;
                break;
            case "Order afgerond":
                screen.VerkoopkansenProjecten.Verkoopkans = 0;
                break;
            case "Loss":
                screen.VerkoopkansenProjecten.Verkoopkans = 0;
                break;

            }
    }
};
