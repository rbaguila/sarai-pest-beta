Meteor.methods({
	'updateAccountRole': function(role){
		Meteor.users.update(Meteor.userId(), {$set: {"profile.role": role}});
	}
})


