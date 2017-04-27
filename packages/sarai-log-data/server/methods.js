Meteor.methods({

	'insertIntoLog': function(date,email,name,action,cnum){
			Log.insert({
				type: 'user',
				date: date,
				email: email,
				user: '',
				name: name,
				action: action,
				reference: cnum
			});	
	},
	'insertIntoLogAdmin': function(date,action){
			
			var cnum = '';
			
			Log.insert({
				type: 'admin',
				date: date,
				email: '',
				user: Meteor.userId(),
				name: '',
				action: action,
				reference: cnum
			});	
	}
	
})


