angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Pets', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var pets = [
    { id: 0, title: 'Clean Dishes', description: 'Have you cleaned the dishes?', active:true ,frequency:"Daily",done:false },
    { id: 1, title: 'Trim Beard', description: 'Trim your beard!' , active:true ,frequency:"Weekly",done:false },
    { id: 2, title: 'Cat Litter', description: 'Clean the cat litter!' , active:false ,frequency:"Weekly",done:false },
    { id: 3, title: 'Walk Dog', description: 'and wear a pullover, is chilly today!' , active:true ,frequency:"Never",done:false },
    { id: 4, title: 'Shave', description: 'You are not a grizzly!!' , active:true ,frequency:"Never",done:false },
    { id: 5, title: 'Change Linens', description: 'Change your linens!' , active:true ,frequency:"Never",done:false }
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
