Template.PestPage.onCreated(function() {
	Meteor.subscribe('plantProblem');
	Meteor.subscribe('privilege');
	Meteor.subscribe('cms');
})