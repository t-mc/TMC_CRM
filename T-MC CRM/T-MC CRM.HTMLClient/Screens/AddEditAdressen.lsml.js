/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.AddEditAdressen.DeleteAdres_execute = function (screen) {
    // Write code here.

   screen.OrderDetail.deleteEntity();

   return myapp.commitChanges().then(null, function fail(e) {

       myapp.cancelChanges();

       throw e;

   });

};