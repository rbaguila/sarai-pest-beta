Template.SaraiPestsClinic.onCreated(function() {
	Meteor.subscribe('plantProblem');
	Meteor.subscribe('cms');
	Meteor.subscribe('expert');
	Meteor.subscribe('assistance');
	Meteor.subscribe('result');
	Meteor.subscribe('report');
	Meteor.subscribe('images');
})
