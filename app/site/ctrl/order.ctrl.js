// checkout in frontend
// submit order in frontend
//edit orders in backend

app.controller('OrderCtrl', OrderCtrl);

function OrderCtrl(api, productSrv){
	var ctrl = this;

	ctrl.api = api;
	ctrl.productSrv = productSrv;
}