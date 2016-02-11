app.controller('ItemCtrl',ItemCtrl);

function ItemCtrl($scope, api, productSrv, $state){
	var ctrl = this;
	ctrl.api = api;
	ctrl.productSrv = productSrv;
}

ItemCtrl.prototype.goToItem = function(){
	var ctrl = this;
	ctrl.$state.go('shop.item')
}