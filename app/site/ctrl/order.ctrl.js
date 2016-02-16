// checkout in frontend
// submit order in frontend
//edit orders in backend

app.controller('OrderCtrl', OrderCtrl);

function OrderCtrl(api, productSrv, $state){
	var ctrl = this;
	ctrl.api = api;
	ctrl.$state = $state;
	ctrl.productSrv = productSrv;
}

// OrderCtrl.prototype.getOrder = function(productSrv){
// 	var ctrl = this; 
// }

OrderCtrl.prototype.CartForm = function($scope) {
    // $scope.invoice = {
    //     items: [{
    //         quantity: 10,
    //         description: 'item',
    //         cost: 9.95}]
    // };

    $scope.addItem = function() {
        $scope.invoice.items.push({
            quantity: 1,
            description: '',
            cost: 0
        });
    },

    $scope.removeItem = function(index) {
        $scope.invoice.items.splice(index, 1);
    },

    $scope.total = function() {
        var total = 0;
        angular.forEach($scope.invoice.items, function(item) {
            total += item.quantity * item.cost;
        })

        return total;
    }
}


