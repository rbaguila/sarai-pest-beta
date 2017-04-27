UserRequest = new Mongo.Collection('userrequest')


UserRequest.deny({
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
