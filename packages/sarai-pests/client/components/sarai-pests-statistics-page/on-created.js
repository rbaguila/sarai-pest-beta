Template.SaraiPestsStatistics.onCreated(function() {
	Meteor.subscribe('assistance');
	Meteor.subscribe('plantProblem');
})
