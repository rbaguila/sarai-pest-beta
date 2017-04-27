Meteor.publish('pestreport', function () {
  return PestReport.find();
});
