app.controller('ShopCtrl',ShopCtrl);

function ShopCtrl(productSrv, products, $scope, $state, api, $stateParams){
	var ctrl = this;
	ctrl.api = api;
	ctrl.productSrv = productSrv;
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
	ctrl.$state.go('shop.item',{productId:product.id});
}