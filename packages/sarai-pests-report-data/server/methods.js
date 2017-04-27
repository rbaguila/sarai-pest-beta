Meteor.methods({

	'insertIntoPestReport': function(title, description, location, imageURL){
		PestReport.insert({
			date: moment().format('MMMM Do YYYY, h:mm:ss a'),
			title: title,
			description: description,
			location: location,
			imageURL: imageURL,
			user: Meteor.userId()
		});	
	}
	
})


