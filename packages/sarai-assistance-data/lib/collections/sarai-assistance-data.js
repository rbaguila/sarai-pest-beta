Assistance = new Mongo.Collection('assistance')


Assistance.initEasySearch(['_id','control','subject'], {
    'limit' : 20,
    'use' : 'mongo-db'
});


Assistance.deny({
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

