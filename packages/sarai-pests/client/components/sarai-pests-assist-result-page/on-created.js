Template.AssistResultPage.onCreated(function() {
	Meteor.subscribe('assistance');
	Meteor.subscribe('result');
})
