app.controller('DetailsCtrl',DetailsCtrl);

function DetailsCtrl(productSrv, cartSrv, product, $scope, $state, api, $stateParams){
	var ctrl = this;
	ctrl.cartSrv = cartSrv;

	ctrl.product = product;

}

DetailsCtrl.prototype.addToCart = function(product){
	var ctrl = this;
	var obj = {
		cartProduct: {
			name: product.name,
			description:product.description,
			price: product.price,
		},
		quantity: 1,
	};
	ctrl.cartSrv.cart.push(obj);
	console.log(ctrl.cartSrv.cart);
}