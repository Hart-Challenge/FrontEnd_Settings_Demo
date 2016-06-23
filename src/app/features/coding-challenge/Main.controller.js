function MainController($scope, fileReader, $mdMedia, $mdSidenav, $timeout){
	var ctrl = this;
	
	
	$scope.media = {
		mobile: function() {
			return $mdMedia('max-width: 590px');
		}	
	};
	
	$scope.pic = {
		showSelector: false,
		select: function(){
			if (typeof $scope.imageSrc === "undefined") {
				this.showSelector = true;
			}
		},
		remove: function() {
			delete $scope.imageSrc;
		},
		message: '',
		showMessage: function(){
			this.message = "Wow! You look absolutely wonderful.";
			$timeout(function(){
				$scope.pic.message = '';
			}, 3400)
		}
		
	}
	  
	$scope.getFile = function () {
        $scope.progress = 0;
        fileReader.readAsDataUrl($scope.file, $scope)
			.then(function(result) {
				$scope.imageSrc = result;
				$scope.pic.showSelector = false;
				$scope.pic.showMessage();
			});
	};
	
	
	
	
	$scope.sideNav = {
		open: false,
		toggle: function() {
			$mdSidenav('left').toggle();
		}
	};
	
	$scope.password = {
		buttonText: 'Change my Password',
		change: false,
		toggleChange: function() {
			if(this.change){
				this.buttonText = 'Change my Password';
			} else { this.buttonText = 'Nevermind, don\'t change my password'; }
			this.change = !this.change;
		}
	};
	

}

angular
	.module('app')
	.controller('MainController', ['$scope', 'fileReader', '$mdMedia', '$mdSidenav', '$timeout', MainController]);
