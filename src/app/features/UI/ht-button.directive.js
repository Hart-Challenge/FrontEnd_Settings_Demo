function htButton() {
    return {
        restrict: 'E',
        scope: true,
        transclude: true,
        controller: ['$scope', '$timeout', function($scope, $timeout){
            $scope.click = function() {
                $scope.clicked = true;
                $timeout(function(){
                    $scope.clicked = false;
                }, 1000);
            }
        }],
        template: [
            '<form>',
                '<button ng-click="click()" class="button-square" ng-class="{\'clicked\':clicked}">',
                    '<ng-transclude></ng-transclude>',
                '</button>',
            '</form>'
        ].join('')
    };
}

angular
    .module('app')
    .directive('htButton', htButton);
