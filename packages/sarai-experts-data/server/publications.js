Meteor.publish('expert', function () {
  return Expert.find();
});
