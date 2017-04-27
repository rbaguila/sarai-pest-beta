/**
 * Publish all Suitability Maps
 */
Meteor.publish('plantProblem', function () {
  return PlantProblem.find();
});