// checkout in frontend
// submit order in frontend
//edit orders in backend
;
app.controller('OrderCtrl', OrderCtrl);

function OrderCtrl(api, productSrv, cartSrv, $state,$scope){
	var ctrl = this;
	ctrl.api = api;
	ctrl.$state = $state;
    ctrl.$scope = $scope;
	ctrl.productSrv = productSrv;
    ctrl.cartSrv = cartSrv;
}

OrderCtrl.prototype.deleteCartItem = function(cartProduct){
    var ctrl = this; 
    ctrl.cartProduct = cartProduct; 
    var thisIndex;
    for (var i = 0; i<ctrl.cartSrv.cart.length; i++){
        ctrl.cartSrv.cart.splice(cartProduct[i], 1);
    }
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
    ctrl.$state.go('submitOrder');
}

OrderCtrl.prototype.submitOrder = function(){
    
}

