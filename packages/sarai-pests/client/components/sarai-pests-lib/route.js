FlowRouter.route("/pests-lib", {
	action: function() {
		BlazeLayout.render("MainLayout", {main: "SaraiPestsLib"})
	}
})