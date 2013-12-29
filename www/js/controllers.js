angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope) {
  // Main app controller, empty for the example

})

// A simple controller that fetches a list of data
.controller('PetsTabCtrl', function($scope, ActionSheet, Pets) {


  $scope.alltasks = [
            { id: 0, title: 'Clean Dishes', description: 'Have you cleaned the dishes?', active:true ,frequency:"Daily" },
            { id: 1, title: 'Trim Beard', description: 'Trim your beard!' , active:true ,frequency:"Weekly"},
            { id: 2, title: 'Cat Litter', description: 'Clean the cat litter!' , active:false ,frequency:"Weekly"},
            { id: 3, title: 'Walk Dog', description: 'and wear a pullover, is chilly today!' , active:true ,frequency:"Never"},
            { id: 4, title: 'Shave', description: 'You are not a grizzly!!' , active:true ,frequency:"Never"},
            { id: 5, title: 'Change Linens', description: 'Change your linens!' , active:true ,frequency:"Never"}
        ];
  // "Pets" is a service returning mock data (services.js)
  //$scope.alltasks = Pets.all();
  //$scope.selectedtasks = $scope.alltasks.filter(function(x){return x.active});




  var buttons= [
            { text: 'Weekly' },
            { text: 'Monthly' },
            { text: 'Daily' }
        ]
  $scope.show = function(el) {

        // Show the action sheet
        ActionSheet.show({

            // The various non-destructive button choices
            buttons: buttons,

            // The text of the red destructive button
            destructiveText: 'Never',

            // The title text at the top
            titleText: 'Modify frequency',

            // The text of the cancel button
            cancelText: 'Cancel',

            // Called when the sheet is cancelled, either from triggering the
            // cancel button, or tapping the backdrop, or using escape on the keyboard
            cancel: function() {
            },

            // Called when one of the non-destructive buttons is clicked, with
            // the index of the button that was clicked. Return
            // "true" to tell the action sheet to close. Return false to not close.
            buttonClicked: function(index) {
                el.frequency=buttons[index].text 
                return true;
            },

            // Called when the destructive button is clicked. Return true to close the
            // action sheet. False to keep it open
            destructiveButtonClicked: function() {
                el.frequency = 'Never'
                return true;
            }
        });

    };

})

// A simple controller that shows a tapped item's data
.controller('PetCtrl', function($scope, $routeParams, Pets) {
  // "Pets" is a service returning mock data (services.js)
  $scope.pet = Pets.get($routeParams.petId);
})



//.filter('taskFilter', function() {
//    return function(input) {
//        return input.active?true:false;
//    };
//});


