Template.AssistResultPage.events({
});



Template.AssistResultPage.helpers({
	result: function(){
		return Result.findOne({num: FlowRouter.current().params._id});
	},
	user: function(){
		return Assistance.findOne({_id: FlowRouter.current().params._id});
	},
	equals: function(v1, v2) {
		return (v1 === v2);
	},
	searchPath: function(){
		return "home";
	},
	notexist: function(){
		var c = Result.find({num:FlowRouter.current().params._id }).count();
		if (c==0) return true;
		else return false;
	}
});


