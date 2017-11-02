(function () {
    'use strict';

    angular
        .module('mangaWords')
        //Controller of the main page
        .controller('MainController', function (routerHelper,$state,dataModel, analyticsService, cqConstantes, soundService, starService, dataService, $ionicHistory) {

            var vm = this;
            vm.goBack = function (){
                $ionicHistory.goBack(); 
                vm.clickSound();
            };

            vm.clickSound = function(){
                soundService.playSound('click');
            };

            vm.goToState = function(to, params, options){
                routerHelper.goToState(to, params, options);
                vm.clickSound();
            };

            vm.open = function(url,target){
                if(typeof cordova !== 'undefined'){
                    cordova.InAppBrowser.open(url,target);
                }
            };

            function init(){
                analyticsService.logEvent('app_open');
                //Init Data
                dataService.getData();
                starService.init();
            }

            init();
        });

})();
