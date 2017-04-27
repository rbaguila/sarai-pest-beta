ClinicForm = new Mongo.Collection('clinicForm')

ClinicForm.initEasySearch(['email'], {
    'limit' : 20,
    'use' : 'mongo-db'
});

ClinicForm.deny({
	
	update: function() {
		return true
	},
	remove: function() {
		return true
	}
})

ClinicForm.allow({
	insert: function(){
		return true
	}
})
