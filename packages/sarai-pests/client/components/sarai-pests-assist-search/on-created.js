Template.SaraiAssistSearch.onCreated(function() {
	Meteor.subscribe('assistance');
	Meteor.subscribe('result');
})
