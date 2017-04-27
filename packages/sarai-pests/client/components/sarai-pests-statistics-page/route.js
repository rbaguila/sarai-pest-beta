FlowRouter.route("/pests-statistics", {
	action: function() {
		BlazeLayout.render("MainLayout", {main: "SaraiPestsStatistics"})
	}
})
