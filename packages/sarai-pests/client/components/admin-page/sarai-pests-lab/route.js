FlowRouter.route("/pests-lab-result", {
	action: function() {
		BlazeLayout.render("CMSLayout", {main: "SaraiPestsLabResultForm"})
	}
})
