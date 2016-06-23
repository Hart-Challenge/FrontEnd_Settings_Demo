function MainController($scope, fileReader){
	var ctrl = this;
  	
	  
	$scope.getFile = function () {
		$scope.progress = 0;
		fileReader.readAsDataUrl($scope.file, $scope).then(function(result) {
			$scope.imageSrc = result;
		});
	};
}

angular
	.module('app')
	.controller('MainController', ['$scope', 'fileReader', MainController]);
