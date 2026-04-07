app.controller('title.controller', function ($scope, $http, $location, $routeParams, $rootScope, $window, $cookies, AppService) {
    $scope.setTitle = function(title) {
        document.title = title;
    }

    $scope.GenerateTitle = function() {
        setTimeout(function(){
            if($location.$$path == '/'){
                $scope.setTitle(`${AppService.TITLE}`);
            }
        
            else if($location.$$path == '/home'){
                $scope.setTitle(``);
            }

            else{
                $scope.setTitle("ChatApp");
            }
        }, 100);
    };
});