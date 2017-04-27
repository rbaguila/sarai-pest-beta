Meteor.publish('clinicForm', function () {
  return ClinicForm.find();
});
