// checkout in frontend
// submit order in frontend
//edit orders in backend

app.controller('OrderCtrl', OrderCtrl);

function OrderCtrl(api, productSrv, $state){
	var ctrl = this;
	ctrl.api = api;
	ctrl.$state = $state;
	ctrl.productSrv = productSrv;
}

OrderCtrl.prototype.getOrder = function(productSrv){
	var ctrl = this; 
}


