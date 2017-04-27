FlowRouter.route("/assistance/:_id", {
	name: 'entity',
	action: function(params, queryParams) {
		//console.log("Yeah! We are on the post:", params._id);
		//console.log("Query parameters:", queryParams);
		BlazeLayout.render("MainLayout", {main: "AssistResultPage"})
	}
})
