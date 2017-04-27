Template.SaraiPestsLib.onCreated(function() {
	Meteor.subscribe('plantProblem');
	Meteor.subscribe('cms');
})