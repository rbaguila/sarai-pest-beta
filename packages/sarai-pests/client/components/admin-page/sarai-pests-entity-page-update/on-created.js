Template.EntityPageUpdate.onCreated(function() {
	Meteor.subscribe('plantProblem');
	Meteor.subscribe('privilege');
})