FlowRouter.route("/pests-monitor-chart", {
	action: function() {
		BlazeLayout.render("CMSLayout", {main: "SaraiPestsSpidMonitorChart"})
	}
})
