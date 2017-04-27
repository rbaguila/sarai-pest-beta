Meteor.publish('userrequest', function () {
  return UserRequest.find();
});
