/**
 * CONTROLLER : page videos
 */
(function () {
    'use strict';
    angular
        .module('mangaWords')
        .controller('aboutController', AboutControllerFct);


    function AboutControllerFct(cqConstantes,storageHelper){

        var vm = this;
        // ############## PRIVATE BUSINESS ############# //
        /**
         * init of the controler
         */
        function init(){
            vm.facebookUrl = cqConstantes.facebookUrl;
            vm.language = storageHelper.getItem(cqConstantes.localStorage.language);
        }
        // ################# INITALIZE ################# //

        init();
    }
})();
