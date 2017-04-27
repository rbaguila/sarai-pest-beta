/**
 * Publish all Suitability Maps
 */
Meteor.publish('services', function () {
  return Services.find();
});