/**
 * CONTROLLER : page videos
 */
(function () {
    'use strict';
    angular
        .module('mangaWords')
        .controller('homeController', HomeControllerFct);


    function HomeControllerFct(shareService,admobService, analyticsService, $scope, cqConstantes, soundService,starService, popupService,  dataModel){

        var vm = this;


        $scope.$on( '$ionicView.beforeEnter', function( scopes, states ) {
            if(states.fromCache){
                admobService.removeBanner();
            }
        });


        var gift = function(){
            var lastDate = starService.getLastDate(), 
                today = new Date().toDateString();
            if(lastDate !== today){
                starService.incrementHints(5);
                popupService.showPopup(cqConstantes.popupMessage.giftTitle, cqConstantes.popupMessage.giftContent.replace('{coins}',5), 'gift');
                starService.setLastDate(today);
            }  
        };
        vm.toggleMusique = function(){
            soundService.toggleMusic();
            vm.isMusique= !vm.isMusique;
        };

        vm.toggleSounds= function(){
            soundService.toggleSounds();
            vm.isSound= !vm.isSound;
        };

        vm.rateApp = function(){
            AppRate.navigateToAppStore();
        };
        // ############## PRIVATE BUSINESS ############# //
        /**
         * init of the controler
         */
        function init(){
            analyticsService.setScreenName('home');
            gift();
            soundService.playMenuMusic();
            vm.share = shareService.shareApp;
            vm.isMusique = dataModel.isMusique;
            vm.isSound = dataModel.isSound;
             _.delay(function(){
                    $scope.$apply(function(){
                        vm.showLogo = true;
                    });
                }, 500);
        }
        // ################# INITALIZE ################# //

        init();
    }
})();
