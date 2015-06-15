/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewBedrijven.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.Bedrijven.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.Bedrijven." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}

