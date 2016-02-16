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
}

//function deletes selected item in cart//
OrderCtrl.prototype.deleteCartItem = function(cartProduct){
    var ctrl = this; 
    ctrl.cartProduct = cartProduct; 
    var thisIndex;
    for (var i = 0; i<ctrl.cartSrv.cart.length; i++){
        ctrl.cartSrv.cart.splice(cartProduct[i], 1);
    }
}

OrderCtrl.prototype.total=function(){
    var total = 0
    var ctrl = this;
    angular.forEach(ctrl.cartSrv.cart, function(cartProduct){
        total+= cartProduct.quantity * cartProduct.price;
    })
    return total;
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
    ctrl.cartSrv.cart.push(cartProduct);


    ctrl.$state.go('submitOrder');
}

OrderCtrl.prototype.submitOrder = function(){
    
}

