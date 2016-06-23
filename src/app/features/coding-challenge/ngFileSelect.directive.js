function ngFileSelect(){

  return {
    link: function($scope,el){
      
      el.bind("change", function(e){

        $scope.file = (e.srcElement || e.target).files[0];
        $scope.getFile();
      })
      
    }
    
  }
  
  
};

angular
	.module('app')
	.directive('ngFileSelect', [ngFileSelect]);