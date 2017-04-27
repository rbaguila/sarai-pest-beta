Meteor.methods({
	'insertInfo': function(subject,email,message,date,user,problem,num,month,year){
			Assistance.insert({
				subject: subject,
				email: email,
				message: message,
				date: date,
				user: user,
				problem: problem,
				control: num,
				month: month,
				year: year
			});
	},
	'getCount': function(str){
			return Assistance.find({problem:str}).count();
	},
	'removeInfo': function(id){
		Assistance.remove({_id:id});
	}
})


