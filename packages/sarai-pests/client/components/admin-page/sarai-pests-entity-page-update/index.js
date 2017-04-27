// var imageURL = "";

Template.EntityPageUpdate.helpers({
	pest: function(){
		// console.log(FlowRouter.current().params._id);
		return PlantProblem.findOne({_id: FlowRouter.current().params._id});
	}
});

Template.EntityDropzone.helpers({
	pestImage: function(){
		console.log(FlowRouter.current().params._id);
		imageURL = PlantProblem.findOne({_id: FlowRouter.current().params._id}).image;
		return imageURL;
	},
	myCallbacks: function() {
	    return {
			 finished: function(index, fileInfo, context) {
			 	Session.set("spinner", true);
			 	imageURL = "/upload/"+fileInfo.name;
			 	// filename = "http://159.203.253.36:3000/upload/"+fileInfo.name;
			 	//H4Dhw4yPhumNK3PKu.jpg
			 	Session.set("imageURL",imageURL);
			 	// imageURL = filename;
			 	$('.jqDropZone').html("<img src=/upload/"+fileInfo.name+" width='100%' height='295px'/>");
			}
	   }
	},
});

// Template.EntityDropzone.events({
//   'dropped #dropzone': function(e) {
//     FS.Utility.eachFile(e, function(file) {
//         var newFile = new FS.File(file);
        
//         Images.insert(newFile, function (error, fileObj) {
//           if (error) {
//             toastr.error("Upload failed... please try again.");
//           } else {
//             toastr.success('Upload succeeded!'), setTimeout(function() {
// 	            imageURL = '/cfs/files/images/' +fileObj._id;
// 	            $('.bannerZone').children('img').attr('src', imageURL);
//             }, 800);
//           }
//       	});
      
//     });
//   }
// });

Template.EntityPageUpdate.events({
	'submit form': function(e){
			e.preventDefault();
		},
	'click #uBtn': function(e){
			e.preventDefault();
			var imageURL = Session.get('imageURL');
			console.log("Image: "+imageURL);
			var pestData = {
				id: $("#id").val(),
				name: $("#name").val(),
				type: $("#type").val(),
				eng_name: $("#common-names").val(),
				fil_name: $("#filipino-names").val(),
				sci_name: $("#scientific-name").val(),
				order: $("#order").val(),
				classification: $("#classification").val(),
				stage_threatening: $("#threatening-stage").val(),
				plant_affected: $("#plant-affected").val(),
				description: $("#description").val(),
				symptoms: $("#symptoms").val(),
				effect: $("#effect").val(),
				treatment: $("#treatment").val(),
				stage_plant_affected: $("#stage-plant-affected").val(),
				part_destroyed: $("#part-destroyed").val(),
				fil_stage_plant_affected: $("#fil-stage-plant-affected").val(),
				fil_effect: $("#fil-effect").val(),
				fil_part_destroyed: $("#fil-part-destroyed").val(),
				fil_stage_threatening: $("#fil-threatening-stage").val(),
				fil_symptoms: $("#fil-symptoms").val(),
				fil_description: $("#fil-description").val(),
				fil_plant_affected: $("#fil-plant-affected").val(),
				fil_classification: $("#fil-classification").val(),
				fil_treatment: $("#fil-treatment").val(),
				image: imageURL
			};
			
			Meteor.call('updatePest', pestData);
			console.log("update");
			toastr.success('The pest was successfully updated!'), setTimeout(800);
		},
	'click #cBtn': function(e){
			e.preventDefault();
			history.back();
		}
});