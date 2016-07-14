angular.module('app.controllers', [])

  //codigo feo por que nos pagaron poco por mucho xD
.controller('inicioCtrl', function($scope,$ionicModal) {
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
        'src' : 'img/imagen2-pantalla1.png'
    },{
        'src' : 'img/imagen3-pantalla1.png'
    }];
    
    $scope.testClick = function () {
        confirm("Usted va a votar por este artista/obra\n"
        +"esta seguro?");
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

.controller('musicaCtrl', function($scope, $ionicModal) {
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
        'src' : 'img/imagen2-pantalla1.png'
    },{
        'src' : 'img/imagen3-pantalla1.png'
    }];
    
    $scope.testClick = function () {
        confirm("Usted va a votar por este artista/obra\n"
        +"esta seguro?");
    };
    
    $scope.showImages = function(index) {
        $scope.activeSlide = index;
        $scope.showModal('templates/image-popover.html');
        
    };

     $scope.showEvents = function(index) {
        $scope.activeSlide = index;
        $scope.showModal('templates/event-popover.html');
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

    $scope.createCalendarEvent = function(index) {
        switch(index)
        {
            case 0:
                var title = 'Dia 1 interesante';
                var loc = 'algun lugar del mundo';
                var notes = 'My interesting Event notes.';
                var startDate = new Date("July 14, 2016");
                var endDate = new Date("July 14, 2016");
                var calendarName = "MyCal";
                var e = '';
                console.log(index);
                startDate.setMinutes(0);
                endDate.setMinutes(0);
                startDate.setSeconds(0);
                break
            case 1:
                var title = 'Dia 2 interesante';
                var loc = 'algun lugar del mundo';
                var notes = 'My interesting Event notes.';
                var startDate = new Date("July 14, 2016");
                var endDate = new Date("July 14, 2016");
                var calendarName = "MyCal";
                var e = '';
                console.log(index);
                startDate.setMinutes(0);
                endDate.setMinutes(0);
                startDate.setSeconds(0);
                break
            case 2:
                var title = 'Dia 3 interesante';
                var loc = 'algun lugar del mundo';
                var notes = 'My interesting Event notes.';
                var startDate = new Date("July 14, 2016");
                var endDate = new Date("July 14, 2016");
                var calendarName = "MyCal";
                var e = '';
                console.log(index);
                startDate.setMinutes(0);
                endDate.setMinutes(0);
                startDate.setSeconds(0);
                break
            default:
                console.log("no mejoramos el codigo si no nos pagan mas");
        }
        try{
            window.plugins.calendar.createEvent(title, loc, notes, startDate, endDate);
            window.plugins.toast.showLongBottom('Añadido '+ title);
            }
            catch(e)
            {
                alert('error '+ e);
            }     
    }
})
   
.controller('audioVisualesCtrl', function($scope) {
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
        'src' : 'img/imagen2-pantalla1.png'
    },{
        'src' : 'img/imagen3-pantalla1.png'
    }];
    
    $scope.testClick = function () {
        confirm("Usted va a votar por este artista/obra\n"
        +"esta seguro?");
    };
    
    $scope.showImages = function(index) {
        $scope.activeSlide = index;
        $scope.showModal('templates/image-popover.html');
        
    };

     $scope.showEvents = function(index) {
        $scope.activeSlide = index;
        $scope.showModal('templates/event-popover.html');
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

    $scope.createCalendarEvent = function(index) {
        switch(index)
        {
            case 0:
                var title = 'Dia 1 interesante';
                var loc = 'algun lugar del mundo';
                var notes = 'My interesting Event notes.';
                var startDate = new Date("July 14, 2016");
                var endDate = new Date("July 14, 2016");
                var calendarName = "MyCal";
                var e = '';
                console.log(index);
                startDate.setMinutes(0);
                endDate.setMinutes(0);
                startDate.setSeconds(0);
                break
            case 1:
                var title = 'Dia 2 interesante';
                var loc = 'algun lugar del mundo';
                var notes = 'My interesting Event notes.';
                var startDate = new Date("July 14, 2016");
                var endDate = new Date("July 14, 2016");
                var calendarName = "MyCal";
                var e = '';
                console.log(index);
                startDate.setMinutes(0);
                endDate.setMinutes(0);
                startDate.setSeconds(0);
                break
            case 2:
                var title = 'Dia 3 interesante';
                var loc = 'algun lugar del mundo';
                var notes = 'My interesting Event notes.';
                var startDate = new Date("July 14, 2016");
                var endDate = new Date("July 14, 2016");
                var calendarName = "MyCal";
                var e = '';
                console.log(index);
                startDate.setMinutes(0);
                endDate.setMinutes(0);
                startDate.setSeconds(0);
                break
            default:
                console.log("no mejoramos el codigo si no nos pagan mas");
        }
        try{
            window.plugins.calendar.createEvent(title, loc, notes, startDate, endDate);

            //fucking toast!
            //$ cordova plugin add cordova-plugin-x-toast
            window.plugins.toast.showLongBottom('Añadido '+ title);
            }
            catch(e)
            {
                alert('error '+ e);
            }     
    }
})
      
.controller('letrasCtrl', function($scope) {
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
        'src' : 'img/imagen2-pantalla1.png'
    },{
        'src' : 'img/imagen3-pantalla1.png'
    }];
    
    $scope.testClick = function () {
        confirm("Usted va a votar por este artista/obra\n"
        +"esta seguro?");
    };
    
    $scope.showImages = function(index) {
        $scope.activeSlide = index;
        $scope.showModal('templates/image-popover.html');
        
    };

     $scope.showEvents = function(index) {
        $scope.activeSlide = index;
        $scope.showModal('templates/event-popover.html');
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

    $scope.createCalendarEvent = function(index) {
        switch(index)
        {
            case 0:
                var title = 'Dia 1 interesante';
                var loc = 'algun lugar del mundo';
                var notes = 'My interesting Event notes.';
                var startDate = new Date("July 14, 2016");
                var endDate = new Date("July 14, 2016");
                var calendarName = "MyCal";
                var e = '';
                console.log(index);
                startDate.setMinutes(0);
                endDate.setMinutes(0);
                startDate.setSeconds(0);
                break
            case 1:
                var title = 'Dia 2 interesante';
                var loc = 'algun lugar del mundo';
                var notes = 'My interesting Event notes.';
                var startDate = new Date("July 14, 2016");
                var endDate = new Date("July 14, 2016");
                var calendarName = "MyCal";
                var e = '';
                console.log(index);
                startDate.setMinutes(0);
                endDate.setMinutes(0);
                startDate.setSeconds(0);
                break
            case 2:
                var title = 'Dia 3 interesante';
                var loc = 'algun lugar del mundo';
                var notes = 'My interesting Event notes.';
                var startDate = new Date("July 14, 2016");
                var endDate = new Date("July 14, 2016");
                var calendarName = "MyCal";
                var e = '';
                console.log(index);
                startDate.setMinutes(0);
                endDate.setMinutes(0);
                startDate.setSeconds(0);
                break
            default:
                console.log("no mejoramos el codigo si no nos pagan mas");
        }
        try{
            window.plugins.calendar.createEvent(title, loc, notes, startDate, endDate);

            //fucking toast!
            //$ cordova plugin add cordova-plugin-x-toast
            window.plugins.toast.showLongBottom('Añadido '+ title);
            }
            catch(e)
            {
                alert('error '+ e);
            }     
    }
})
   
.controller('visualesCtrl', function($scope) {
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
        'src' : 'img/imagen2-pantalla1.png'
    },{
        'src' : 'img/imagen3-pantalla1.png'
    }];
    
    $scope.testClick = function () {
        confirm("Usted va a votar por este artista/obra\n"
        +"esta seguro?");
    };
    
    $scope.showImages = function(index) {
        $scope.activeSlide = index;
        $scope.showModal('templates/image-popover.html');
        
    };

     $scope.showEvents = function(index) {
        $scope.activeSlide = index;
        $scope.showModal('templates/event-popover.html');
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

    $scope.createCalendarEvent = function(index) {
        switch(index)
        {
            case 0:
                var title = 'Dia 1 interesante';
                var loc = 'algun lugar del mundo';
                var notes = 'My interesting Event notes.';
                var startDate = new Date("July 14, 2016");
                var endDate = new Date("July 14, 2016");
                var calendarName = "MyCal";
                var e = '';
                console.log(index);
                startDate.setMinutes(0);
                endDate.setMinutes(0);
                startDate.setSeconds(0);
                break
            case 1:
                var title = 'Dia 2 interesante';
                var loc = 'algun lugar del mundo';
                var notes = 'My interesting Event notes.';
                var startDate = new Date("July 14, 2016");
                var endDate = new Date("July 14, 2016");
                var calendarName = "MyCal";
                var e = '';
                console.log(index);
                startDate.setMinutes(0);
                endDate.setMinutes(0);
                startDate.setSeconds(0);
                break
            case 2:
                var title = 'Dia 3 interesante';
                var loc = 'algun lugar del mundo';
                var notes = 'My interesting Event notes.';
                var startDate = new Date("July 14, 2016");
                var endDate = new Date("July 14, 2016");
                var calendarName = "MyCal";
                var e = '';
                console.log(index);
                startDate.setMinutes(0);
                endDate.setMinutes(0);
                startDate.setSeconds(0);
                break
            default:
                console.log("no mejoramos el codigo si no nos pagan mas");
        }
        try{
            window.plugins.calendar.createEvent(title, loc, notes, startDate, endDate);

            //fucking toast!
            //$ cordova plugin add cordova-plugin-x-toast
            window.plugins.toast.showLongBottom('Añadido '+ title);
            }
            catch(e)
            {
                alert('error '+ e);
            }     
    }
})
   
.controller('escenicasCtrl', function($scope) {
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
        'src' : 'img/imagen2-pantalla1.png'
    },{
        'src' : 'img/imagen3-pantalla1.png'
    }];
    
    $scope.testClick = function () {
        confirm("Usted va a votar por este artista/obra\n"
        +"esta seguro?");
    };
    
    $scope.showImages = function(index) {
        $scope.activeSlide = index;
        $scope.showModal('templates/image-popover.html');
        
    };

     $scope.showEvents = function(index) {
        $scope.activeSlide = index;
        $scope.showModal('templates/event-popover.html');
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

    $scope.createCalendarEvent = function(index) {
        switch(index)
        {
            case 0:
                var title = 'Dia 1 interesante';
                var loc = 'algun lugar del mundo';
                var notes = 'My interesting Event notes.';
                var startDate = new Date("July 14, 2016");
                var endDate = new Date("July 14, 2016");
                var calendarName = "MyCal";
                var e = '';
                console.log(index);
                startDate.setMinutes(0);
                endDate.setMinutes(0);
                startDate.setSeconds(0);
                break
            case 1:
                var title = 'Dia 2 interesante';
                var loc = 'algun lugar del mundo';
                var notes = 'My interesting Event notes.';
                var startDate = new Date("July 14, 2016");
                var endDate = new Date("July 14, 2016");
                var calendarName = "MyCal";
                var e = '';
                console.log(index);
                startDate.setMinutes(0);
                endDate.setMinutes(0);
                startDate.setSeconds(0);
                break
            case 2:
                var title = 'Dia 3 interesante';
                var loc = 'algun lugar del mundo';
                var notes = 'My interesting Event notes.';
                var startDate = new Date("July 14, 2016");
                var endDate = new Date("July 14, 2016");
                var calendarName = "MyCal";
                var e = '';
                console.log(index);
                startDate.setMinutes(0);
                endDate.setMinutes(0);
                startDate.setSeconds(0);
                break
            default:
                console.log("no mejoramos el codigo si no nos pagan mas");
        }
        try{
            window.plugins.calendar.createEvent(title, loc, notes, startDate, endDate);

            //fucking toast!
            //$ cordova plugin add cordova-plugin-x-toast
            window.plugins.toast.showLongBottom('Añadido '+ title);
            }
            catch(e)
            {
                alert('error '+ e);
            }     
    }
})