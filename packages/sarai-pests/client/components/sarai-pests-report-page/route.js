FlowRouter.route("/pests-report", {
	action: function() {
		BlazeLayout.render("MainLayout", {main: "SaraiPestsReport"})
	}
})
