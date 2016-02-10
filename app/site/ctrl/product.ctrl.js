app.controller('ProductsCtrl', ProductsCtrl);

function ProductCtrl(productSrv){
	var ctrl = this;
	ctrl.productSrv = productSrv;
}