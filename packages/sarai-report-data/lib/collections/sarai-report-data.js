Report = new Mongo.Collection('report')

/*
Report.initEasySearch(['user'], {
    'limit' : 20,
    'use' : 'mongo-db'
});
*/

Report.deny({
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

