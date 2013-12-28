angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Pets', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var pets = [
    { id: 0, title: 'Home', description: 'Have you cleaned the dishes?' },
    { id: 1, title: 'Style', description: 'Trim your beard!' },
    { id: 2, title: 'Pets', description: 'Clean the cat litter!' },
    { id: 3, title: 'Life', description: 'Wear a pullover, is chilly today!' }
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
