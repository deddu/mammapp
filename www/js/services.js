angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Pets', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var pets = [
    { id: 0, title: 'Clean Dishes', description: 'Have you cleaned the dishes?', active:true ,frequency:"daily" },
    { id: 1, title: 'Trim Beard', description: 'Trim your beard!' , active:true ,frequency:"weekly"},
    { id: 2, title: 'Cat Litter', description: 'Clean the cat litter!' , active:false ,frequency:"weekly"},
    { id: 3, title: 'Walk Dog', description: 'and wear a pullover, is chilly today!' , active:true ,frequency:"never"},
    { id: 4, title: 'Shave', description: 'You are not a grizzly!!' , active:true ,frequency:"never"},
      { id: 5, title: 'Change Linens', description: 'Change your linens!' , active:true ,frequency:"never"}
  ];

  return {
    all: function() {
      return pets;
    },
    get: function(petId) {
      // Simple index lookup
      return pets[petId];
    }
  }
});
