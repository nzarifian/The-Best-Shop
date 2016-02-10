app.controller('AuthCtrl', AuthCtrl);

function AuthCtrl(productSrv){
	var ctrl = this;
	ctrl.productSrv = productSrv;
}