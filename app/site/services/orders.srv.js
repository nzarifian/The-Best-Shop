app.service('orderSrv',OrderService);

function OrderService($state,api){
	//dependencies
	this.api = api;
	this.state = $state;
	this.customer = {};
	// this.products = [];
}

ProductService.prototype.getOrder = function(){
	var _this = this;
	return this.api.request('/shop-checkout',{},'GET')
	.then(function(res){
		//success promise
		console.log(res);
		_this.products = res.data.products;
		return res.data.products;
	},function(res){
		//error promise
		console.log(res);
		return;
	})
}

ProductService.prototype.addOrder = function(orders){
	var _this = this;
	this.api.request('/shop-checkout',product,'POST')
	.then(function(res){
		console.log(res);
		if(res.status === 200){
			//product was added successfully
			_this.products.push(res.data.product);
			_this.state.go('admin.orders');

		}
	})
}

// ProductService.prototype.updateProduct = function(product,productId){
// 	var _this = this;
// 	this.api.request('/products/'+productId,product,'PUT')
// 	.then(function(res){
// 		console.log(res);
// 		if(res.status === 200){
// 			//product was updated successfully
// 			_this.updateProductList(product,productId);
// 			_this.state.go('admin.inventory');
			
// 		}
// 	})
// }

ProductService.prototype.deleteOrder = function(orders){
	var _this = this;
	this.api.request('/orders/'+orderId,{},'DEL')
	.then(function(res){
		console.log(res);
		if(res.status === 200){
			//product was deleted successfully
			_this.removeOrder(orderId);
			_this.state.go('admin.orders');			
		}
	})
}

ProductService.prototype.getProduct = function(orderId){
	var _this = this;
	return this.api.request('/orders/'+orderId,{},'GET');
}

