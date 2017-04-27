Lab = new Mongo.Collection('lab')

/*
Log.initEasySearch(['user'], {
    'limit' : 20,
    'use' : 'mongo-db'
});
*/

Lab.deny({
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

