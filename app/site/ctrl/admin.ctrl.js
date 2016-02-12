app.controller('AdminCtrl', AdminCtrl);

function AdminCtrl(productSrv, products, $scope, $state){
	var ctrl = this;
	ctrl.$state= $state;
	ctrl.$scope = $scope;
	ctrl.products = products;
	ctrl.productSrv = productSrv;

	if(localStorage.authToken == undefined || localStorage.authToken == null){
		$state.go('admin');
	}
	
	if(ctrl.products.length > 0 ){
		ctrl.is_products = true;
	}

	$scope.$watch(function(){
    	return productSrv.products;
	}, function (newValue) {
		if(productSrv.products.length > 0){
		    ctrl.products = productSrv.products;
		    ctrl.is_products = true;
		}
	});
}

AdminCtrl.prototype.editProduct = function(products){
	var ctrl = this;
	ctrl.products = products;
	ctrl.$state.go('admin.inventory-edit',{productId:product.id});
}

AdminCtrl.prototype.logout = function(){
	var ctrl =this;

	localStorage.removeItem('authToken');
	ctrl.$state.go('auth');

}

