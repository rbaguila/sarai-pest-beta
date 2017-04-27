FlowRouter.route("/pests-page", {
	action: function() {
		BlazeLayout.render("CMSLayout", {main: "PestPage"})
	}
})
