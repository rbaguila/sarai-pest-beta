/**
 * Publish all Suitability Maps
 */
Meteor.publish('main', function () {
  return Main.find();
});
