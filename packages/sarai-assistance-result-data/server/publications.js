Meteor.publish('result', function () {
  return Result.find();
});
