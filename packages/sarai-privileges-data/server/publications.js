Meteor.publish('privilege', function () {
  return Privilege.find();
});
