Template.TrainPest.onCreated(function() {
	Meteor.subscribe('plantProblem');
	Meteor.subscribe('cms');
	Meteor.subscribe('privilege');
})