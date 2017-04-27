FlowRouter.route("/pests-submitted", {
	action: function() {
		BlazeLayout.render("CMSLayout", {main: "FormsSubmitted"})
	}
})
