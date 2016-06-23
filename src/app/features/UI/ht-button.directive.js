function htButton() {
    return {
        restrict: 'E',
        transclude: true,
        controller: ['$scope', function($scope){
            var ctrl = this; 
        }],
        template: [
            '<form>',
                '<button class="button-square"><ng-transclude></ng-transclude></button>',
            '</form>'
        ].join('')
    };
}

angular
    .module('app')
    .directive('htButton', htButton);
