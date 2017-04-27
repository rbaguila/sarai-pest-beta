Template.ExpertPage.onCreated(function() {
	Meteor.subscribe('expert');
	Meteor.subscribe('images');
	Meteor.subscribe('privilege');
});


