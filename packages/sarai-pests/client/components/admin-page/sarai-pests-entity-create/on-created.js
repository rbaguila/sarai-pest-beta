Template.EntityCreate.onCreated(function() {
	Meteor.subscribe('plantProblem');
	Meteor.subscribe('privilege');
})