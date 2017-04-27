Template.SaraiPests.onCreated(function() {
	Meteor.subscribe('plantProblem');
	Meteor.subscribe('cms');
})