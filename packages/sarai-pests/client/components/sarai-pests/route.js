FlowRouter.route("/", {
	action: function() {
		BlazeLayout.render("MainLayout", {main: "SaraiPests"})
	}
})