/**
 * CONTROLLER : page videos
 */
(function () {
    'use strict';
    angular
        .module('mangaWords')
        .controller('groupController', GroupControllerFct);


    function GroupControllerFct($location,$ionicScrollDelegate, $stateParams,analyticsService, popupService,admobService,  $timeout, $scope, soundService, starService, routerHelper, cqConstantes, cwService , dataModel, dataService, correctionService){
        var vm = this;

        $scope.$on( '$ionicView.beforeEnter', function( scopes, states ) {
            if(states.fromCache){
                reload(true);
                vm.crosswords = updateData(vm.crosswords);
                dataModel.crosswordsLevel = vm.crosswords;
            }
        });

        vm.goToCrossWords = function(id){
            var cw = _.get(vm.crosswords,id);
            cw.id = id;
            cw.levelId = vm.level;
            cwService.initCrossWords(cw);
            routerHelper.goToState(cqConstantes.states.crossWord,{'cw': id+'-'+cw.levelId});
            soundService.playSound('click');
        };

        vm.showPopupHints = function(){
            popupService.showPopupHints();
        };

        vm.isDisabled = function(index){
            return (vm.level+1) === vm.currentLevel && vm.currentCw - 1 < index;
        };

        // ############## PRIVATE BUSINESS ############# //
        var updateData = function(data){
            _.each(data, function(item, index){
                item.stars = starService.getStartsByCw(vm.level, index);
                item.numberCorrectionByCw = correctionService.getNumberCorrectionByCw(vm.level, index);
            });
            return data;
        };

        function reload(fromCache){
            admobService.removeBanner();
            if(Math.random()<cqConstantes.ads.interGroup){
                _.delay(function(){
                    admobService.generateInterstitial();
                },1000);
            }
            vm.numberStars = dataModel.numberStars;
            vm.currentLevel = dataModel.currentLevel;
            vm.currentCw = dataModel.currentCw;

            if(fromCache){
                soundService.playMenuMusic();
            }
            

            var activeSlide = (vm.level+1) === vm.currentLevel ? (vm.currentCw - 1) : 0;
            if(activeSlide > 5){
                $timeout(function() {
                    $location.hash('item-'+ activeSlide);
                    var delegate = $ionicScrollDelegate.$getByHandle('group');
                    delegate.anchorScroll(true); 
                }, 100);
            }

            $timeout(function() {
                 vm.left = 100*(vm.level+1 === vm.currentLevel ? vm.currentCw: vm.crosswords.length)/vm.crosswords.length;
                 vm.left = 100 - vm.left;
            }, 200);
        }

        /**
         * init of the controler
         */
        function init(){
            var level;
            vm.level = parseInt($stateParams.level);
            
            analyticsService.setScreenName('Groupes');
            analyticsService.logEvent('select_content', {'content_type': 'group_view',  'item_id': level});

            reload(false);
            dataService.getData().then(function(datas){
                level = _.get(datas,vm.level);
                vm.crosswords = updateData(level ? level.crosswords : []);
                dataModel.crosswordsLevel = vm.crosswords;
            });
        }
        // ################# INITALIZE ################# //

        init();
    }
})();
