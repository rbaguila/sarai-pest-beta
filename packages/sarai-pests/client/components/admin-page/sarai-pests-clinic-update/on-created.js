Template.SaraiPestsUpdatePage.onCreated(function() {
	Meteor.subscribe('assistance');
	Meteor.subscribe('plantProblem');
	Meteor.subscribe('clinicForm');
	Meteor.subscribe('cms');
	Meteor.subscribe('images');
	Meteor.subscribe('privilege');
})
