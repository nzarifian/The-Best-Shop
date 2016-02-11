app.controller('ProductCtrl', ProductCtrl);

function ProductCtrl(productSrv){
	var ctrl = this;
	ctrl.productSrv = productSrv;

	ctrl.categories = [
		{label:'Shirts',value:'shirts'},
		{label:'Pants',value:'pants'},
		{label:'Shoes',value:'shoes'},
		{label:'Dress',value:'dress'},
		{label:'Outerwear',value:'outerwear'},
	];
	
	
}


ProductCtrl.prototype.addProduct(){
	var ctrl = this;
	var product = {
		name: ctrl.name,
		image: ctrl.image,
		description: ctrl.description,
		category: ctrl.category,
		quantity: ctrl.quantity,
		price: ctrl.price,
		status:'active'
	}
	ctrl.product_add_btn="Add"
	ctrl.productSrv.addProduct(product);
}

ProductCtrl.prototype.deleteProduct(){
	var ctrl = this; 
	ctrl.product_delete_btn="Delete";
	ctrl.productSrv.deleteProduct(product);
}

ProductCtrl.prototype.updateProduct(){
	var ctrl = this; 
	ctrl.product_update_btn="Update";
	ctrl.productSrv.updateProduct(product);

}
