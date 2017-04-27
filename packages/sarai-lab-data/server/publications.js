Meteor.publish('lab', function () {
  return Lab.find();
});
