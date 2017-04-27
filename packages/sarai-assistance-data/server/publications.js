Meteor.publish('assistance', function () {
  return Assistance.find();
});
