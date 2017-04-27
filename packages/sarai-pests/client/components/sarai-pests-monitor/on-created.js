Template.SaraiPestsMonitor.onCreated(function() {
	Meteor.subscribe('plantProblem');
	Meteor.subscribe('assistance');	
	Meteor.subscribe('cms');
})
