Template.SaraiPestsCreateReport.helpers({

});

Template.SaraiPestsCreateReport.events({
	'click #submitReport': function(){
		
		var title = $("#reptitle").val().trim();
		var body = $("#body").val().trim();	
		
		Meteor.call('insertIntoReport', title, body);
		
		 $("#reptitle").val('');
		 $("#body").val('');
		
		alert('Submitted');
		
	}
});
