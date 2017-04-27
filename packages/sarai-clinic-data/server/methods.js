Meteor.methods({
	'updateSpid': function(bhead,bsubhead,row1head,row2head,row3head,row3subhead,position){
			CMS.update(
			{ info: 'finalSpid' },
			{
				$set : {
					bannerContentPosition: position,
					bannerHeadText: bhead,
					bannerSubText: bsubhead,
					row1HeadText: row1head,
					row2HeadText: row2head,
					row3HeadText: row3head,
					row3SubText: row3subhead
				}
			},
				{ upsert: false }
			);
			
			//Meteor.call('insertIntoLogAdmin', moment().format('MMMM Do YYYY, h:mm:ss a') , 'Updated Clinic Home Page');
	},
	'updateSpidBanner': function(url, id){
			var ID = CMS.findOne({info:"finalSpid"}).bannerImageID;
						
			CMS.update(
			{ info: 'finalSpid' },
			{
				$set: {
					bannerImage: url,
					bannerImageID: id
				}
			},
			{ upsert: false }
			);
			
			if(ID!="")
				Images.findOne({_id:ID}).remove();
				
	},
	'updateRow1Image1': function(url, id){
			var ID = CMS.findOne({info:"finalSpid"}).row1Image1ID;
			
			CMS.update(
			{ info: 'finalSpid' },
			{
				$set: {
					row1Image1: url,
					row1Image1ID: id
				}
			},
			{ upsert: false }
			);
			
			if(ID!="")
				Images.findOne({_id:ID}).remove();
	},
	'updateRow1Image2': function(url, id){
			var ID = CMS.findOne({info:"finalSpid"}).row1Image2ID;
			
			CMS.update(
			{ info: 'finalSpid' },
			{
				$set: {
					row1Image2: url,
					row1Image2ID: id
				}
			},
			{ upsert: false }
			);
			
			if(ID!="")
				Images.findOne({_id:ID}).remove();
	},
	'updateClinic': function(bhead,bsubhead,shout,ahead,asubhead,position){
			CMS.update(
			{ info: 'finalClinic' },
			{
				$set : {
					bannerContentPosition: position,
					bannerHeadText: bhead,
					bannerSubText: bsubhead,
					rowIHeadText: shout,
					rowIIHeadText: ahead,
					rowIISubText: asubhead
				}
			},
				{ upsert: false }
			);
			
			//Meteor.call('insertIntoLogAdmin', moment().format('MMMM Do YYYY, h:mm:ss a') , 'Updated Clinic Home Page');
	},
	'updateBanner': function(url, id){
			var ID = CMS.findOne({info:"finalClinic"}).bannerImageID;
						
			CMS.update(
			{ info: 'finalClinic' },
			{
				$set: {
					bannerImage: url,
					bannerImageID: id
				}
			},
			{ upsert: false }
			);
			
			if(ID!="")
				Images.findOne({_id:ID}).remove();
				
			
			
	},
	'updateRowI': function(url, id){
			
			var ID = CMS.findOne({info:"finalClinic"}).rowIID;
			
			CMS.update(
			{ info: 'finalClinic' },
			{
				$set: {
					rowIImage: url,
					rowIID: id
				}
			},
			{ upsert: false }
			);
			
			if(ID!="")
				Images.findOne({_id:ID}).remove();
	},
	'updateRowII': function(url, id){
	
			var ID = CMS.findOne({info:"finalClinic"}).rowIIID;
	
			CMS.update(
			{ info: 'finalClinic' },
			{
				$set: {
					rowIIImage: url,
					rowIIID: id
				}
			},
			{ upsert: false }
			);
			
			if(ID!="")
				Images.findOne({_id:ID}).remove();
	},
	'updateLibrary': function(bhead,bsubhead,searchlabel, pestType, pestNumbers,position){
			CMS.update( 
			{ info: 'finalLib' },
			{
				$set : {
					bannerContentPosition: position,						
					bannerHeadText: bhead,
					bannerSubText: bsubhead,
					searchLabelText: searchlabel,
					viewPestType: pestType,
					pestsPerPage: pestNumbers
				}
			},
				{ upsert: false }
			);
	},
	'updateViewPestType': function(){
			var data = PlantProblem.find().fetch();
			var distinctData = _.uniq(data, false, function(d) {return d.plant_affected});
			var legalPestTypes = _.pluck(distinctData, "plant_affected");
			var chosenPestTypes = CMS.findOne({info:'finalLib'}).viewPestType

			CMS.update( 
				{ info: 'finalLib' },
				{
					$set : {
						viewPestType: _.intersection(legalPestTypes, chosenPestTypes)
					}
				},
					{ upsert: false }
				);
	},
	'updateLibBanner': function(url, id){
			var ID = CMS.findOne({info:"finalLib"}).bannerImageID;
						
			CMS.update(
			{ info: 'finalLib' },
			{
				$set: {
					bannerImage: url,
					bannerImageID: id
				}
			},
			{ upsert: false }
			);
			
			if(ID!="")
				Images.findOne({_id:ID}).remove();
				
	},
	'updateId': function(bhead,bsubhead,pesthead,position){
			CMS.update(
			{ info: 'finalId' },
			{
				$set : {
					bannerContentPosition: position,
					bannerHeadText: bhead,
					bannerSubText: bsubhead,
					pestHeadText: pesthead
				}
			},
				{ upsert: false }
			);
	},
	'updateIdBanner': function(url, id){
			var ID = CMS.findOne({info:"finalId"}).bannerImageID;
						
			CMS.update(
			{ info: 'finalId' },
			{
				$set: {
					bannerImage: url,
					bannerImageID: id
				}
			},
			{ upsert: false }
			);
			
			if(ID!="")
				Images.findOne({_id:ID}).remove();
				
	},
	'updateMonitor': function(bhead,bsubhead,position){
			CMS.update(
			{ info: 'finalMonitor' },
			{
				$set : {
					bannerContentPosition: position,
					bannerHeadText: bhead,
					bannerSubText: bsubhead
				}
			},
				{ upsert: false }
			);
	},
	'updateMonitorBanner': function(url, id){
			var ID = CMS.findOne({info:"finalMonitor"}).bannerImageID;
						
			CMS.update(
			{ info: 'finalMonitor' },
			{
				$set: {
					bannerImage: url,
					bannerImageID: id
				}
			},
			{ upsert: false }
			);
			
			if(ID!="")
				Images.findOne({_id:ID}).remove();
				
	}
})


