 (function(){
    'use strict';
    angular
        .module('mangaWords')
        .factory('dataService', function($log, $q, $http, dataModel, configConstantes,storageHelper,cqConstantes){


        // ############################################# //
        // ############### PUBLIC BUSINESS ############# //
        // ############################################# //

         function getData(){
            if(dataModel.data.length !== 0){
                return $q.when(dataModel.data);
            }

            var defered = $q.defer();
            var language = storageHelper.getItem(cqConstantes.localStorage.language);
             $http.get(configConstantes.urlBase.replace('{language}',language))
                .success(function (datas) {
                    // Updating the modele
                    dataModel.data = datas;
                    defered.resolve(datas);
                })
                .error(function (datas, status, headers, config) {
                    $log.debug('Erreur lors de la récupération des locales :', datas, status, headers, config);
                    defered.reject(1);
                });
            return defered.promise;
         }

        // ############################################### //
        // ############### Private BUSINESS ############# //
        // ############################################# //

            return {
                getData:getData
            };
        });
}());