Template.SaraiPestsIdUpdatePage.onCreated(function() {
	Meteor.subscribe('cms');
	Meteor.subscribe('images');
	Meteor.subscribe('privilege');
})
