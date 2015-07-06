/// <reference path="~/GeneratedArtifacts/viewModel.js" />


myapp.AddEditContactpersonen1.EmailAdres_postRender = function (element, contentItem) {
    // Write code here.
    $("[data-ls-tap='tap:{data.shell.saveCommand.command}']").hide();
};
myapp.AddEditContactpersonen1.VolgendScherm_Tap_execute = function (screen) {
    // Write code here.
    screen.findContentItem("VolledigeNaam").isVisible = true;
};