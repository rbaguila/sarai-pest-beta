Meteor.methods({

	'insertIntoLabResult': function(num, title, text, date){
			Lab.insert({
				num: num,
				title: title,
				body: text,
				date: date
			});	
	}
	
})


