app.controller('ShopCtrl',ShopCtrl);

function ShopCtrl(productSrv, cartSrv, products, $scope, $state, api, $stateParams){
	var ctrl = this;
	ctrl.api = api;
	ctrl.productSrv = productSrv;
	ctrl.cartSrv = cartSrv;
	ctrl.$state = $state;
	ctrl.products = products;
	ctrl.category = '';

	$scope.$watch(function(){
		return productSrv.products;
	}, function (newValue) {
		ctrl.products = productSrv.products;
	});
}

ShopCtrl.prototype.toProduct = function(productId){
	var ctrl = this;
	ctrl.$state.go('shop.item',{productId:productId});
}


ShopCtrl.prototype.addToCart = function(product){
	var ctrl = this;
	ctrl.cartSrv.cart.push(product);
}
