Template.SaraiPestsLibUpdatePage.onCreated(function() {
	Meteor.subscribe('cms');
	Meteor.subscribe('images');
	Meteor.subscribe('plantProblem');
	Meteor.subscribe('privilege');
})