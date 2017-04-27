Meteor.methods({
	'insertIntoResult': function(num,title,body,date){
			Result.insert({
				num : num,
				title: title,
				body: body,
				date: date,
			});
	}
})


