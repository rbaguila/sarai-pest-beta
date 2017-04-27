Meteor.methods({
	'insertUserRequest': function(category, subject, message){
		UserRequest.insert({
			category: category,
			subject: subject,
			date: moment().format('MMMM Do YYYY, h:mm:ss a'),
			user: Meteor.userId()
		});
	},
	'removeUserRequest': function(id){
		UserRequest.remove({_id: id});
	}
})


