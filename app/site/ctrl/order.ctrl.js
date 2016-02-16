// checkout in frontend
// submit order in frontend
//edit orders in backend
app.controller('OrderCtrl', OrderCtrl);

function OrderCtrl(api, productSrv, cartSrv, orderSrv, $state){
	var ctrl = this;
	ctrl.api = api;
	ctrl.$state = $state;
	ctrl.productSrv = productSrv;
    ctrl.cartSrv = cartSrv;
    ctrl.orderSrv = orderSrv;
    ctrl.customer = ctrl.orderSrv.currentCustomer;
    ctrl.cart = cartSrv.cart;
    ctrl.order = ctrl.orderSrv.currentOrder;

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
    console.log(customer);
    ctrl.orderSrv.currentCustomer = customer;
    ctrl.$state.go('submitOrder');
}

OrderCtrl.prototype.submitOrder = function(){
    var ctrl = this;
    var order = {
        customer: ctrl.customer,
        cart: ctrl.cart
    };
    ctrl.orderSrv.currentOrder = order;
    ctrl.orderSrv.addOrder(ctrl.orderSrv.currentOrder);
    // ctrl.$state.go('orders');

}

