Result = new Mongo.Collection('result')

/*
Result.initEasySearch(['user'], {
    'limit' : 20,
    'use' : 'mongo-db'
});*/


Result.deny({
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

