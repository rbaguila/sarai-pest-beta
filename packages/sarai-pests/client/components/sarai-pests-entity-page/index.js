/*****************************************************************************/
/* entityPage: Event Handlers */
/*****************************************************************************/
Template.EntityPage.events({
});

/*****************************************************************************/
/* entityPage: Helpers */
/*****************************************************************************/
Template.EntityPage.helpers({
	pest: function(){
		console.log(FlowRouter.current().params._id);
		return PlantProblem.findOne({_id: FlowRouter.current().params._id});
	},
	equals: function(v1, v2) {
		return (v1 === v2);
	},
	searchPath: function(){
		return "home";
	},
	imageName: function(str){
		return str.replace(/\s/g, '');
	}
});

/*****************************************************************************/
/* entityPage: Lifecycle Hooks */
/*****************************************************************************/
Template.EntityPage.created = function () {
};

Template.EntityPage.rendered = function () {
	
};

Template.EntityPage.destroyed = function () {
};
