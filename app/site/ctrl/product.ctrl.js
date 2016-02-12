app.controller('ProductCtrl', ProductCtrl);

function ProductCtrl(productSrv, $state, $stateParams){
	var ctrl = this;
	ctrl.productSrv = productSrv;
	ctrl.cartItems=[];
	ctrl.$state = $state;
	ctrl.$stateParams = $stateParams;
	ctrl.products = [];

	ctrl.categories = [
		{label:'Shirts',value:'shirts'},
		{label:'Pants',value:'pants'},
		{label:'Shoes',value:'shoes'},
		{label:'Dress',value:'dress'},
		{label:'Outerwear',value:'outerwear'},
	];

	// ctrl.product = {};
	// ctrl.product_update_btn = 'Update Product';
	// ctrl.product_delete_btn = 'Remove Product';
	
	// if($stateParams.productId != undefined){
	// 	productSrv.getProduct($stateParams.productId)
	// 	.then(function(res){
	// 		console.log(res);
	// 		ctrl.product = res.data.product;
	// 		//TODO #2 set category based on edit form based on 
	// 		//product category
	// 		for (var category in ctrl.categories){
	// 			if(ctrl.product.category == ctrl.categories[category].value){
	// 				ctrl.category = category;
	// 			}
	// 		}
	// 	})
	// }
}

ProductCtrl.prototype.addProduct = function (){
	var ctrl = this;
	var product = {
		name: ctrl.name,
		image: ctrl.image,
		description: ctrl.description,
		category: ctrl.category,
		quantity: ctrl.quantity,
		price: ctrl.price,
		status:'active'
	};

	ctrl.productSrv.addProduct(product);
}

ProductCtrl.prototype.editProduct = function(products){
	var ctrl = this;
	ctrl.products = products;
	ctrl.$state.go('admin.inventory-edit',{productId:product.id});
}

ProductCtrl.prototype.deleteProduct = function(){
	var ctrl = this; 
	ctrl.product_delete_btn="Delete";
	ctrl.productSrv.deleteProduct(product);
}

ProductCtrl.prototype.updateProduct = function(){
	var ctrl = this; 
	ctrl.product_update_btn="Update";
	ctrl.productSrv.updateProduct(product);

}

// ProductCtrl.prototype.addToCart = function(){

// }