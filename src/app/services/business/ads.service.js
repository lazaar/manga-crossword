 (function(){
    'use strict';
    angular
        .module('mangaWords')
        .factory('admobService', function(){


        // ############################################# //
        // ############### PUBLIC BUSINESS ############# //
        // ############################################# //
        var admobid = {};

         function init(){
            if(typeof device !== 'undefined' && device.platform === 'Android')
            {
                admobid = {
                  banner: 'ca-app-pub-3935970661666157/7380889781',
                  inter: 'ca-app-pub-3935970661666157/9580388159',
                  video: 'ca-app-pub-3935970661666157/7580910777'
                };
            }
            else{
                admobid = {
                  banner: 'ca-app-pub-3935970661666157/3561774717',
                  inter: 'ca-app-pub-3935970661666157/8962275204',
                  video: 'ca-app-pub-3935970661666157/5421651297'
                };
            }

            if(typeof AdMob !== 'undefined'){
              AdMob.prepareInterstitial({
                adId:admobid.inter,
                isTesting: false,
                autoShow:false
              });
            } 
         }

         function generateBanner(){
            if(typeof AdMob !== 'undefined'){
              AdMob.createBanner({
                adId: admobid.banner,
                position: AdMob.AD_POSITION.BOTTOM_CENTER,
                isTesting: false,
                autoShow: true
              });
            } 
         }

         function removeBanner(){
            if(typeof AdMob !== 'undefined'){
              AdMob.removeBanner();
            } 
         }

         function generateInterstitial(){
            if(typeof AdMob !== 'undefined'){
              AdMob.showInterstitial();
              removeBanner();
              _.delay(function(){
                AdMob.prepareInterstitial({
                  adId:admobid.inter,
                  isTesting: false,
                  autoShow:false
                });
              }, 3000);
            } 
         }

         function generateVideo(){
            if(typeof AdMob !== 'undefined'){
              AdMob.showRewardVideoAd();
            } 
         }

         function prepareVideo(){
          if(typeof AdMob !== 'undefined'){
            AdMob.prepareRewardVideoAd({
              adId:admobid.video,
              isTesting: false,
              autoShow:false
            });
         }
         }

        // ############################################### //
        // ############### Private BUSINESS ############# //
        // ############################################# //

            return {
                init:init,
                generateBanner:generateBanner,
                removeBanner:removeBanner,
                generateInterstitial:generateInterstitial,
                generateVideo:generateVideo,
                prepareVideo:prepareVideo
            };
        });
}());