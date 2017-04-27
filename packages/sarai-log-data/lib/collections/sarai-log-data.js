Log = new Mongo.Collection('log')

/*
Log.initEasySearch(['user'], {
    'limit' : 20,
    'use' : 'mongo-db'
});
*/

Log.deny({
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

