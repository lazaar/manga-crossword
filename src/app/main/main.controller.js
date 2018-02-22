(function () {
    'use strict';

    angular
        .module('mangaWords')
        //Controller of the main page
        .controller('MainController', function (routerHelper,$translate,storageHelper, analyticsService, cqConstantes, soundService, starService, $ionicHistory) {

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
                starService.init();
                $translate.use(storageHelper.getItem(cqConstantes.localStorage.language)|| 'en');
            }

            init();
        });

})();
