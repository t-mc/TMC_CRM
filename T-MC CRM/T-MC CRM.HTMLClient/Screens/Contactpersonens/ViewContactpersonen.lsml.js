/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewContactpersonen.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.Contactpersonen.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.Contactpersonen." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}

