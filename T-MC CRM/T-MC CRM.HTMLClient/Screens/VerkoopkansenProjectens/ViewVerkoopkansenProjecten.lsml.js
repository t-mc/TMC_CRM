/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewVerkoopkansenProjecten.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.VerkoopkansenProjecten.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.VerkoopkansenProjecten." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}

