Template.SaraiPestsId.onCreated(function() {
	Meteor.subscribe('plantProblem');
	Meteor.subscribe('cms');
})