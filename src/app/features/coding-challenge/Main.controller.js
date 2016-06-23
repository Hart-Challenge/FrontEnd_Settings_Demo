function MainController($scope, fileReader, $mdMedia, $mdSidenav){
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
		}
	}
	  
	$scope.getFile = function () {
        $scope.progress = 0;
        fileReader.readAsDataUrl($scope.file, $scope)
			.then(function(result) {
				$scope.imageSrc = result;
				$scope.pic.showSelector = false;
			});
	};
	
	
	
	
	$scope.sideNav = {
		open: false,
		toggle: function() {
			$mdSidenav('left').toggle();
		}
	};
	

}

angular
	.module('app')
	.controller('MainController', ['$scope', 'fileReader', '$mdMedia', '$mdSidenav', MainController]);
