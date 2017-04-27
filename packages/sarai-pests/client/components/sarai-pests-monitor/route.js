FlowRouter.route("/pests-monitor", {
	action: function() {
		BlazeLayout.render("MainLayout", {main: "SaraiPestsMonitor"})
	}
})