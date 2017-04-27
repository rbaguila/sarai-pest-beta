FlowRouter.route("/pests-assistance", {
	action: function() {
		BlazeLayout.render("CMSLayout", {main: "RequestAssistance"})
	}
})
