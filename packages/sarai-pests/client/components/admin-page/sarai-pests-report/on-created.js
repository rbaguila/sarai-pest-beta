Template.SaraiPestsCreateReport.onCreated(function() {
	Meteor.subscribe('report');
	Meteor.subscribe('assistance');
	Meteor.subscribe('plantProblem');
	Meteor.subscribe('clinicForm');
	Meteor.subscribe('privilege');
})
