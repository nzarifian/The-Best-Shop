app.controller('ShopCtrl',ShopCtrl);

function ShopCtrl($scope, api, productSrv, products){
	var ctrl = this;
	ctrl.api = api;
	ctrl.productSrv = productSrv;

	ctrl.products = products;
	ctrl.category = '';

	$scope.$watch(function(){
		return productSrv.products;
	}, function (newValue) {
		ctrl.products = productSrv.products;
	});
}

ShopCtrl.prototype.goToProduct = function(product){
	var ctrl = this;
	ctrl.$state.go('shop.item',{productId:product.id});
}
