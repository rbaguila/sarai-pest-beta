PestReport = new Mongo.Collection('pestreport')

/*
Report.initEasySearch(['user'], {
    'limit' : 20,
    'use' : 'mongo-db'
});
*/

PestReport.deny({
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

