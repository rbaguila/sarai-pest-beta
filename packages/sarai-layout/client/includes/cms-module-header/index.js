Template.CMSModuleHeader.helpers({
  navAdmin: function(){
		if(Meteor.userId()===null){
			$("#navA").hide();
		}
		else{
			$("#navA").show();
		}
	},
  navBar: function(navBarFor){
  	switch(navBarFor){
  		case "Pest Home":
  			return[
  				{
					name: 'Home',
					route: '/'
				},
				{
					name: 'Monitor Chart',
					route: '/pests-monitor-chart'
				}
  			];
  		case "Pest Clinic":
  			return [
				{
					name: 'Home',
					route: '/pests-clinic'
				},
				{
					name: 'Assistance',
					route: '/pests-assistance'
				},
				{
					name: 'Samples',
					route: '/pests-submitted'
				},
				{
					name: 'Report',
					route: '/pests-create-report'
				},
				{
					name: 'Expert',
					route: '/pests-addExpert'
				}
			];
		case "Pest Library":
  			return [
				{
					name: 'Home',
					route: '/pests-lib'
				},
				{
					name: 'Pests',
					route: '/pests-page'
				},
				{
					name: 'Train',
					route: '/pests-train'
				}
			];
		case "Pest Identification":
  			return [
				{
					name: 'Home',
					route: '/pests-id'
				}
			];
		case "Pest Monitor":
  			return [
				{
					name: 'Home',
					route: '/pests-monitor'
				}
			];
		default:
			return [
				{
					name: 'Home',
					route: '/pests'
				}
			];
  	}
  }
});