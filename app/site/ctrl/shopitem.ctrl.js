app.controller('ShopCtrl',ShopCtrl);

function ShopCtrl(productSrv, cartSrv, products, $scope, $state, api, $stateParams){
	var ctrl = this;
	ctrl.api = api;
	ctrl.productSrv = productSrv;
	ctrl.cartSrv = cartSrv;
	ctrl.$state = $state;

	ctrl.$stateParams = $stateParams;
	ctrl.productDetails = ctrl.productSrv.productDetails;

	ctrl.products = products;
	ctrl.category = '';

	$scope.$watch(function(){
		return productSrv.products;
	}, function (newValue) {
		ctrl.products = productSrv.products;
	});
}

ShopCtrl.prototype.toProduct = function(product,productId){
	var ctrl = this;
	ctrl.productSrv.productDetails = product;
	//ctrl.productDetails = product;
	console.log(productId);

	ctrl.$state.go('shop.item',{productId:productId});
}

//function adds selected item to cart//
ShopCtrl.prototype.addToCart = function(product){
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

//function deletes selected item from cart//
ShopCtrl.prototype.deleteCartItem = function(){}
ShopCtrl.prototype.goToID = function(){
	var ctrl = this;
	ctrl.products = (ctrl.productSrv).ctrl.getProduct(ctrl.$stateParams.productsId);
}


