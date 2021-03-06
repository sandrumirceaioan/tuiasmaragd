/*orders service*/
(function(){
    angular.module('admin-orders').service('orders',orders);
    orders.$inject = ['$q', '$http'];
    function orders($q, $http){
        this.getOrders = function(){
            return $http({
                    method: 'POST',
                    url: '../routes/getOrders.php'
                }).then(function(result){
                    return result.data;
                }).catch(function(error){
                    return $q.reject(error);
                });
        };
        this.getOneOrder = function(param){
            return $http({
                    method: 'POST',
                    url: '../routes/getOneOrder.php',
                    data: param
                }).then(function(result){
                    return result.data;
                }).catch(function(error){
                    return $q.reject(error);
                });
        };
        this.updateOneOrder = function(param){
            return $http({
                    method: 'POST',
                    url: '../routes/solvedOrder.php',
                    data: param
                }).then(function(result){
                    return result.data;
                }).catch(function(error){
                    return $q.reject(error);
                });
        };
        this.getNewOrdersCount = function(){
            return $http({
                    method: 'POST',
                    url: '../routes/getNewOrders.php'
                }).then(function(result){
                    return result.data;
                }).catch(function(error){
                    return $q.reject(error);
                });
        };
    }
})();
