// login function

app.controller('AuthCtrl', AuthCtrl);

function AuthCtrl($state, api, $location){
	var ctrl = this;
	ctrl.$state = $state;
	ctrl.api = api;
	ctrl.$location = $location;

	ctrl.password;
	ctrl.email;

	ctrl.auth_button = 'Continue';

	// location url to admin login//
	var goDashboard = $location.path('/dashboard');

	if(localStorage.authToken){
		ctrl.$state.go('admin');
	}	
}

AuthCtrl.prototype.login = function(){
	var ctrl = this

	var payload = {
		email:ctrl.email,
		password:ctrl.password
	}

	ctrl.auth_btn = "Authorizing";
	ctrl.api.request('/users/login', payload, 'POST')
	.then(function(response){
		console.log(response);

		if(response.status == 200){
			ctrl.auth_btn = "Success";
			console.log('test1');

			if (response.data.user != null){
				console.log("test2");
				ctrl.$state.go('admin.dashboard');
			}
		}

		else{
			ctrl.auth_btn = 'Invalid Password';
		}

	}, function(){
		console.log(response);
		ctrl.auth_btn = "Error";
	})
}