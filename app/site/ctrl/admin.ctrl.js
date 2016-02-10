app.controller('AdminCtrl', AdminCtrl);

function AdminCtrl(productSrv){
	var ctrl = this;
	ctrl.productSrv = productSrv;
}

AdminCtrl.prototype.editProduct = function(){
	var ctrl = this;

}

AdminCtrl.prototype.logout = function(){
	var ctrl = this;
}