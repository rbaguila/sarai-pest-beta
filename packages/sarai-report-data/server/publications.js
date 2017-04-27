Meteor.publish('report', function () {
  return Report.find();
});
