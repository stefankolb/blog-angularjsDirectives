angular.module('myApp').
  directive('myDialog', [ function () {

    return {

      // Replace the DOM elment that includes our directive with the directive's HTML
      replace: true,

      // Restrict usage to elements only -> can't be used as attribute
      restrict: 'E',

      // The file that holds our template (see above)
      templateUrl: 'components/dialog.tpl.html',

      // We want to include some other HTML
      transclude: true,

      scope: {

        // Two way binding to either show or hide the dialog
        show: '=',

        // One way binding for dialog title
        dialogTitle: '@',

        // One way binding for dialog text
        dialogText: '@'

      }

    }

  }]);
