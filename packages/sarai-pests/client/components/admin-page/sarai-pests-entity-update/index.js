Template.PestTabs.helpers({
	pestType: function () {
	  var data = PlantProblem.find().fetch();
	  var distinctData = _.uniq(data, false, function(d) {return d.plant_affected});
	  return _.pluck(distinctData, "plant_affected");
	},
	setActiveTab: function(index){
		return index == 0? "mdl-tabs__tab is-active" : "mdl-tabs__tab";
	},
	setActivePanel: function(index){
		return index == 0? "mdl-tabs__panel is-active" : "mdl-tabs__panel";
	},
	rewritePestType: function(){
		return this.replace(/[\s,]+/g, '');
	},
	displayPest: function(pestType){
		return PlantProblem.find({'type': 'Pest', 'plant_affected': pestType},{sort: {name: 1}});
	},
	incremented: function(index){
		return index+1;
	}
});

Template.PestTabs.events({
	'click .edit-button': function(e) {
		FlowRouter.go("/entity-update/" + $(e.target).attr("id"));
	},
	'click .delete-button': function(e){
		if (confirm("Are you sure you want to delete " + $(e.target).attr("name") + "?")){
			Meteor.call('removePest', $(e.target).attr("id"));
		}
	}
});

Template.PestPage.events({
	'click #add-button': function(){
		FlowRouter.go("/entity-create");
	}
})