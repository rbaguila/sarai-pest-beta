FlowRouter.route("/entity-update/:_id", {
	name: 'entity-update',
	action: function(params, queryParams) {
		// console.log("Yeah! We are on the post:", params._id);
		// console.log("Query parameters:", queryParams);
		BlazeLayout.render("CMSLayout", {main: "EntityPageUpdate"})
	}
})
