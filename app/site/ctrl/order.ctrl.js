// checkout in frontend
// submit order in frontend
//edit orders in backend
app.controller('OrderCtrl', OrderCtrl);


function OrderCtrl(api, productSrv, cartSrv, orderSrv, $state, $scope, orders){

	var ctrl = this;
	ctrl.api = api;
	ctrl.$state = $state;
    ctrl.$scope = $scope;
	ctrl.productSrv = productSrv;
    ctrl.cartSrv = cartSrv;
    ctrl.orders = orders;
    console.log(orders);

    ctrl.orderSrv = orderSrv;
    ctrl.cart = cartSrv.cart;
    ctrl.order = ctrl.orderSrv.currentOrder;

    ctrl.finalCustomer = ctrl.orderSrv.currentCustomer;
    ctrl.customer = {};
<<<<<<< HEAD

    $scope.$watch(function() {
        return cartSrv.cart;
    }, function(newVal) {
        if (newVal.length > 0) {
            ctrl.is_products = true;
        }
    })

=======
    console.log('hi us');
>>>>>>> 1cb48f7cd6218d694d54b6be4cd4f78ea8eafe88
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
    ctrl.$state.go('shop.checkout');
}

OrderCtrl.prototype.goToCart = function(){
    var ctrl = this; 
    ctrl.$state.go('shop.cart');
}

OrderCtrl.prototype.reviewOrder = function(){
    var ctrl = this; 
<<<<<<< HEAD
=======
    // ctrl.cartProduct = cartProduct;
    // ctrl.cartSrv.cart.push(cartProduct);
>>>>>>> 1cb48f7cd6218d694d54b6be4cd4f78ea8eafe88

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
    ctrl.$state.go('shop.submitOrder');
}

OrderCtrl.prototype.submitOrder = function(){
    var ctrl = this;
    ctrl.order = {
       // customer: ctrl.customer,
       cart: JSON.stringify(ctrl.cartSrv.cart),
       total: '',
       tax:'',
       final_total:'',
   };
    ctrl.orderSrv.addOrder(ctrl.order);
    console.log
    ctrl.$state.go('shop.lastpage');
}

OrderCtrl.prototype.getOrders = function(){
    var ctrl = this;
    var order = {
        firstName: ctrl.firstName,
        lastName: ctrl.lastName,
        status:'active'
    };
<<<<<<< HEAD
=======
    
    ctrl.orderSrv.currentOrder = order;
    ctrl.orderSrv.addOrder(ctrl.orderSrv.currentOrder);
    alert("Congratulations, your order is on it's way!");
    //ctrl.$state.go('shop.main');
    // where do we want the page to go once order confirmed and submitted?
>>>>>>> 1cb48f7cd6218d694d54b6be4cd4f78ea8eafe88

    ctrl.orderSrv.getOrders(order);
}

OrderCtrl.prototype.getOrders = function (){
    var ctrl = this;
    var order = {
        firstName: ctrl.firstName,
        lastName: ctrl.lastName,
        status:'active'
    };

    ctrl.orderSrv.getOrders(order);

}

// OrderCtrl.prototype.deleteOrder = function(productId){
//     var ctrl = this; 
//     ctrl.productSrv.deleteProduct(ctrl.product.id);
// }

// OrderCtrl.prototype.updateOrder = function(){
//     var ctrl = this; 
//     ctrl.product.category = ctrl.category.value;
//     ctrl.productSrv.updateProduct(ctrl.product, ctrl.product.id);
// }
