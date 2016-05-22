angular.module('app.controllers', [])
  
.controller('inicioCtrl', function($scope) {
    $scope.allImages = [{
        'src' : 'img/pic1.jpg'
    }, {
        'src' : 'img/pic2.jpg'
    }, {
        'src' : 'img/pic3.jpg'
    }];
    
    $scope.aImages = [{
        'src' : 'img/imagen-pantalla1.png'
    }, {
        'src' : 'img/musica.jpg'
    }];
    
    $scope.testClick = function () {
        confirm("Usted ha votado por esta foto\n"
        +"muchas gracias");
    };
    
    $scope.showImages = function(index) {
        $scope.activeSlide = index;
        $scope.showModal('templates/image-popover.html');
    };
    
   $scope.showModal = function(templateUrl) {
        $ionicModal.fromTemplateUrl(templateUrl, {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.modal = modal;
            $scope.modal.show();
        });
    };

    $scope.closeModal = function() {
        $scope.modal.hide();
        $scope.modal.remove();
    };
})
   
.controller('musicaCtrl', function($scope) {

})
   
.controller('audioVisualesCtrl', function($scope) {

})
      
.controller('letrasCtrl', function($scope) {

})
   
.controller('visualesCtrl', function($scope) {

})
   
.controller('escenicasCtrl', function($scope) {

})
 