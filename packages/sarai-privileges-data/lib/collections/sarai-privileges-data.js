Privilege = new Mongo.Collection('privilege')


Privilege.deny({
	insert: function(){
		return true
	},
	update: function() {
		return true
	},
	remove: function() {
		return true
	}
})
