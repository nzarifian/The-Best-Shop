// login function

app.controller('AuthCtrl', AuthCtrl);

function AuthCtrl($state, api){
	var ctrl = this;
	ctrl.$state = $state;
	ctrl.api = api;
	//ctrl.$location = $location;

	ctrl.password;
	ctrl.email;

	ctrl.auth_button = 'Continue';

	// location url to admin login//
	//var goDashboard = $location.path('/dashboard');

	if(localStorage.authToken){
		ctrl.$state.go('auth');
	}	
}

AuthCtrl.prototype.login = function(){
	var ctrl = this;

	var payload = {
		email:ctrl.email,
		password:ctrl.password
	}
	ctrl.auth_btn = "Authorizing";
	//make api call
	ctrl.api.request('/users/login',payload,'POST')
	.then(function(response){
		console.log(response);
		//successfull response
		if(response.status == 200){
<<<<<<< HEAD
			ctrl.auth_btn = "Success";
			console.log('test1');

			if (response.data.user != null){
				ctrl.$state.go('admin');
			}
		}

		else{
			ctrl.auth_btn = 'Invalid Password';
		}

	}, function(){
		console.log(response);
		ctrl.auth_btn = "Error";
=======
            ctrl.auth_btn = "Success";
            console.log('test1');

        if (response.data.user != null){
            ctrl.$state.go('admin');

            console.log("test2");

            ctrl.$state.go('admin');

            }
        }

        else{
            ctrl.auth_btn = 'Invalid Password';
        }

	})
	.catch(function(err) {
		console.log(err);
>>>>>>> 7bf5f38dc09cb77e03b644fb4abe405c582fc827
	})
}