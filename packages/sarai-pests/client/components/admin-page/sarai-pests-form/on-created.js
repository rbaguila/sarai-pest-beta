Template.FormsSubmitted.onCreated(function() {
	Meteor.subscribe('clinicForm');
	Meteor.subscribe('lab');
	Meteor.subscribe('privilege');
})
