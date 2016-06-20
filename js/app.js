var dbApp = angular.module('dbApp',['ui.router']);

dbApp.config(function($stateProvider, $urlRouterProvider){
	$stateProvider
		.state('home',{
			url: "/",
			templateUrl: "pages/homepage.html",
			controller: "HomeController",
		})
})

// load the module
/*angular.module('myApp', ['dropbox'])

  .config(function () {
    console.log("home")
    DropboxProvider.config("50xpikcl2y0l1y1", "http://localhost/Dropbox/callback.html ");
  })

  // inject the service
  .controller('DropboxCtrl', function ($scope, Dropbox) {

    // assign a promise to scope
    $scope.accountInfo = Dropbox.accountInfo();

    // or use callbacks
    Dropbox.copy('dir/image1.jpg', 'dir/image2.jpg').then(function (res) {
      Dropbox.move('dir/image1.jpg', 'dir/image.jpg').then(function (res) {
        $scope.photos = Dropbox.stat('dir');
      });
    });

  });*/