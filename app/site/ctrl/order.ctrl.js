// checkout in frontend
// submit order in frontend
//edit orders in backend
;
app.controller('OrderCtrl', OrderCtrl);

function OrderCtrl(api, productSrv, cartSrv, $state){
	var ctrl = this;
	ctrl.api = api;
	ctrl.$state = $state;
	ctrl.productSrv = productSrv;
    ctrl.cartSrv = cartSrv;
    ctrl.customer = {};


}


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
//function adds selected item to cart//

OrderCtrl.prototype.addToCart = function(){

}



OrderCtrl.prototype.checkout = function(){
    var ctrl = this; 
    ctrl.$state.go('checkout');
}

OrderCtrl.prototype.goToCart = function(){
    var ctrl = this; 
    ctrl.$state.go('shop.cart');
}

OrderCtrl.prototype.reviewOrder = function(){
    var ctrl = this; 
    var customer = {
        firstName: ctrl.firstName,
        lastName: ctrl.lastName,
        email: ctrl.email,
        address1: ctrl.address1,
        apt: ctrl.apt,
        city: ctrl.city,
        province: ctrl.province,
        postal: ctrl.postal
    }

    ctrl.$state.go('submitOrder');
}

OrderCtrl.prototype.submitOrder = function(){
    var ctrl = this;

    console.log(customer);

}

