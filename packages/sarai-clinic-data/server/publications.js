Meteor.publish('cms', function () {
  return CMS.find();
});
