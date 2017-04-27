Meteor.methods({
	'updateExpert': function(url,imageID,name,position,company,id){
			Expert.update(
			{ _id: id },
			{
				$set : {
					profile: url,
					profileID: imageID,
					name : name,
					company : company,
					position : position 
				}
			},
				{ upsert: false }
			);

			console.log('Updated');	
	},
	'addExpert': function(url,imageID,name,position,company){
			Expert.insert({
				profile: url,
				profileID: imageID,
				name : name,
				company : company,
				position : position
			});
			console.log('Added');
	},
	'removeExpert': function(id){
			Expert.remove({_id:id});
			console.log('Removed');
	}
});

