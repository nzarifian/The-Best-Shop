app.controller('ProductCtrl', ProductCtrl);

function ProductCtrl(productSrv){
	var ctrl = this;
	ctrl.productSrv = productSrv;
	
}