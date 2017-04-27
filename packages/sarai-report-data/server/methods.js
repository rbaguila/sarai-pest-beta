Meteor.methods({

	'insertIntoReport': function(title, body){
			Report.insert({
				date: moment().format('MMMM Do YYYY, h:mm:ss a'),
				title: title,
				body: body,
				user: Meteor.userId()
			});	
	}
	
})


