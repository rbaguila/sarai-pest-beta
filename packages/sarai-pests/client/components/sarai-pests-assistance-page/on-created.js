Template.SaraiPestsAssistance.onCreated(function() {
	Meteor.subscribe('assistance');
	Meteor.subscribe('images');
	Meteor.subscribe('cms');
	Meteor.subscribe('plantProblem');
	Meteor.subscribe('images');
})
