Template.RequestAssistance.onCreated(function() {
	Meteor.subscribe('assistance');
	Meteor.subscribe('plantProblem');
	Meteor.subscribe('result');
	Meteor.subscribe('privilege');
})

