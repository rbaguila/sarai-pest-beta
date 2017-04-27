FlowRouter.route("/pests-lab", {
	action: function() {
		BlazeLayout.render("MainLayout", {main: "SaraiPestsLabResult"})
	}
})
