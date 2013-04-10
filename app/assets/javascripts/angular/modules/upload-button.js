angular.module('fileButton', [])
.directive('fileButton', [function () {
  return {
    link: function(scope, element, attributes) {

      var el = angular.element(element)
      var button = el.children()[0]

      el.css({
        position: 'relative',
        overflow: 'hidden',
        width: button.offsetWidth,
        height: button.offsetHeight
      })

      // onchange="angular.element(this).scope().setFile(this)"
      var fileInput = angular.element('<input type="file" multiple />')
      fileInput.css({
        position: 'absolute',
        top: 0,
        left: 0,
        'z-index': '2',
        marginTop: '2px',
        padding: '0',
        width: '100%',
        height: '100%',
        opacity: '0',
        cursor: 'pointer'
      })

      fileInput.bind('change', function() {
        scope.setFile(fileInput);
      });

      el.append(fileInput)
    }
  }
}]);
