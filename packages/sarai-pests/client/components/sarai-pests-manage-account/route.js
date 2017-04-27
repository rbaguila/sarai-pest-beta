FlowRouter.route("/pests-manage-account", {
	action: function() {
		BlazeLayout.render("MainLayout", {main: "ManageAccount"})
	}
})