/**
 * CONTROLLER : page videos
 */
(function () {
    'use strict';
    angular
        .module('mangaWords')
        .controller('languageController', LanguageControllerFct);


    function LanguageControllerFct(admobService,dataModel, popupService,$filter, $translate, analyticsService, $scope, cqConstantes, storageHelper, routerHelper){

        var vm = this, initLanguage;


        $scope.$on( '$ionicView.beforeEnter', function( scopes, states ) {
            if(states.fromCache){
                admobService.removeBanner();
            }
        });

        vm.changeLanguage = function(language){
            vm.language = language;
            if(!vm.isFirst && vm.language !== initLanguage){
                popupService.showPopup($filter('translate')('Language'),$filter('translate')('LanguageAlert'));
            }
        };
        vm.saveLanguage = function(){
            $translate.use(vm.language);
            storageHelper.setItem(cqConstantes.localStorage.language, vm.language);
            routerHelper.goToState(cqConstantes.states.home);
            if(!vm.isFirst && vm.language !== initLanguage){
                var values = storageHelper.getItem('playInfo') || {};
                values.currentCw = 1;
                values.currentLevel = 1;
                values.numberStars = 0;
                
                dataModel.data = [];
                dataModel.currentLevel = 1;
                dataModel.currentCw = 1;
                dataModel.numberStars = 0;

                storageHelper.setItem('playInfo', values);
                storageHelper.setItem('letters', {});
            }
        };
        // ############## PRIVATE BUSINESS ############# //
        /**
         * init of the controler
         */
        function init(){
            analyticsService.setScreenName('language');
            initLanguage = storageHelper.getItem(cqConstantes.localStorage.language);
            vm.isFirst = !storageHelper.getItem(cqConstantes.localStorage.language);
            vm.language = initLanguage || 'en';
        }
        // ################# INITALIZE ################# //

        init();
    }
})();
