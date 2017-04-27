Template.SaraiPestsUpdatePage.onRendered(function(){
     $('.updateForm').validate({
        rules: {
            bheader: {
                required: true,
                minlength: 6
            },
            bsubheader: {
                required: true,
                minlength: 20
            },
            shout: {
                required: true,
 				minlength: 20
            },
            aheader: {
                required: true,
                minlength: 10
            },
            asubheader: {
            	required:  true,
            	minlength: 50
            }
        }
    });
    
});


ifCMS = function(){
	var count = CMS.find({info: "finalClinic"}).count();
	if(count==0) return false;
	else return true;
}


/** Helper **/
Template.SaraiPestsUpdatePage.helpers({
	
	getBannerHText: function(){
				if(ifCMS()){
					var info = CMS.find({info: "finalClinic"}).fetch();
					return info[0].bannerHeadText;
				}
	},
	getBannerSText: function(){
				if(ifCMS()){
					var info = CMS.find({info: "finalClinic"}).fetch();
					return info[0].bannerSubText;
				}
	},
	getShoutText: function(){
				if(ifCMS()){
					var info = CMS.find({info: "finalClinic"}).fetch();
					return info[0].rowIHeadText;
				}
	},
	getAboutHText: function(){
				if(ifCMS()){
					var info = CMS.find({info: "finalClinic"}).fetch();
					return info[0].rowIIHeadText;
				}
	},
	getAboutSText: function(){
				if(ifCMS()){
					var info = CMS.find({info: "finalClinic"}).fetch();
					return info[0].rowIISubText;
				}
	},
	isSelected: function(position){
		return position == CMS.findOne({info: "finalClinic"}).bannerContentPosition;
	}
});

Template.MainDropzone.helpers({
	banner: function(){
		var info = CMS.findOne({info:'finalClinic'});
		var id = info.bannerImage;
		return id==""? "/packages/sarai_sarai-pests/public/images/clinic/sarai.jpg": id;
	}
});

Template.Idropzone.helpers({
	banner: function(){
		var info = CMS.findOne({info:'finalClinic'});
		var id = info.rowIImage;
		return id==""? "/packages/sarai_sarai-pests/public/images/clinic/sarai_3.jpg": id;
	}
});

Template.IIdropzone.helpers({
	banner: function(){
		var info = CMS.findOne({info:'finalClinic'});
		var id = info.rowIIImage;
		return id==""? "/packages/sarai_sarai-pests/public/images/clinic/sarai_2.jpg": id;
	}
});


/** Events **/
Template.SaraiPestsUpdatePage.events({
	
	'submit form': function(e){
			e.preventDefault();
		},
	'click #uBtn': function(e){
			e.preventDefault();
			
			/*Get Value*/
			var bhead = $("#bheader").val();
			var bsubhead = $("#bsubheader").val();
			var shout = $("#shout").val();
			var ahead = $("#aheader").val();
			var asubhead = $("#asubheader").val();
			var position = $("#banner-position").val();
			
			Meteor.call('updateClinic', bhead, bsubhead, shout, ahead, asubhead, position);
			
			console.log("inserted");
			$('#viewChanges').show();
		},
	'click #cBtn': function(e){
			e.preventDefault();
		},
	'click #viewChanges': function(e){
			e.preventDefault();
			FlowRouter.go("/pests-clinic");
		}

});

Template.MainDropzone.events({
  'dropped #dropzone': function(e) {
    FS.Utility.eachFile(e, function(file) {
        var newFile = new FS.File(file);
        
        Images.insert(newFile, function (error, fileObj) {
          if (error) {
            toastr.error("Upload failed... please try again.");
          } else {
            toastr.success('Upload succeeded!'), setTimeout(function() {
                var url = "/cfs/files/images/" +fileObj._id;
	            var id = fileObj._id;
	            Meteor.call('updateBanner', url, id);
	            $('.bannerZone').children('img').attr('src', url);
            }, 800);
          }
      	});
      
    });
  }
});

Template.Idropzone.events({
  'dropped #dropzone': function(e) {
    
    FS.Utility.eachFile(e, function(file) {
        var newFile = new FS.File(file);
        
        Images.insert(newFile, function (error, fileObj) {
          if (error) {
            toastr.error("Upload failed... please try again.");
          } else {
            toastr.success('Upload succeeded!'), setTimeout(function() {
                var url = "/cfs/files/images/" +fileObj._id;
            	var id = fileObj._id;
            	Meteor.call('updateRowI', url, id);
            	$('.IdropZoneView').children('img').attr('src', url);
            }, 800);
          }
      });
    });
  }
});

Template.IIdropzone.events({
  'dropped #dropzone': function(e) {
    
    FS.Utility.eachFile(e, function(file) {
        var newFile = new FS.File(file);
        
        Images.insert(newFile, function (error, fileObj) {
          if (error) {
            toastr.error("Upload failed... please try again.");
          } else {
          	toastr.success('Upload succeeded!'), setTimeout(function() {
                var url = "/cfs/files/images/" +fileObj._id;
            	var id = fileObj._id;
            	Meteor.call('updateRowII', url, id);
            	$('.IIdropZoneView').children('img').attr('src', url);
            }, 800);
          }
      });
    });
  }
});
