Template.registerHelper("isAuthorized", function(privilege){
	if(!(Meteor.userId() && _.intersection(Meteor.user().profile.role, Privilege.findOne({name: privilege}).authorized).length > 0))
		FlowRouter.go("/");
});