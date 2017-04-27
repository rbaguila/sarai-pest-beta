Meteor.methods({
	'insertPrivilege': function(name, authorized){
		Privilege.insert({
			name: name,
			authorized: authorized
		});
	},
	'updatePrivilege': function(id, name, authorized){
		Privilege.update(
			{ _id: id },
			{
				$set: {
					name: name,
					authorized: authorized
				}
			},
				{ upsert: false }
			);
	},
	'removePrivilege': function(id){
		Privilege.remove({_id: id});
	}
})


