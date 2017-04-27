Template.SaraiPestsSpidUpdatePage.onRendered(function(){
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
            row1head: {
                required: true,
 					 minlength: 3
            },
            row2head: {
                required: true,
                minlength: 3
            },
            row3head: {
            	required:  true,
            	minlength: 3
            },
            row3sub: {
            	required:  true,
            	minlength: 10
            }
        }
    });
    
});


ifCMS = function(){
	var count = CMS.find({info: "finalSpid"}).count();
	if(count==0) return false;
	else return true;
}


/** Helper **/
Template.SaraiPestsSpidUpdatePage.helpers({
	
	getBannerHText: function(){
				if(ifCMS()){
					var info = CMS.find().fetch();
					return info[0].bannerHeadText;
				}
	},
	getBannerSText: function(){
				if(ifCMS()){
					var info = CMS.find().fetch();
					return info[0].bannerSubText;
				}
	},
	getRow1HeadText: function(){
				if(ifCMS()){
					var info = CMS.find().fetch();
					return info[0].row1HeadText;
				}
	},
	getRow2HeadText: function(){
				if(ifCMS()){
					var info = CMS.find().fetch();
					return info[0].row2HeadText;
				}
	},
	getRow3HeadText: function(){
				if(ifCMS()){
					var info = CMS.find().fetch();
					return info[0].row3HeadText;
				}
	},
	getRow3SubText: function(){
				if(ifCMS()){
					var info = CMS.find().fetch();
					return info[0].row3SubText;
				}
	},
	isSelected: function(position){
		return position == CMS.findOne({info: "finalSpid"}).bannerContentPosition;
	}
});

Template.SpidMainDropzone.helpers({
	banner: function(){
		var info = CMS.findOne({info:'finalSpid'});
		var id = info.bannerImage;
		return id==""? "/packages/sarai_sarai-pests/public/images/banner2.jpg": id;
	}
});

Template.SpidIdropzone1.helpers({
	banner: function(){
		var info = CMS.findOne({info:'finalSpid'});
		var id = info.row1Image1;
		return id==""? "/packages/sarai_sarai-pests/public/images/armyworm.png": id;
	}
});

Template.SpidIdropzone2.helpers({
	banner: function(){
		var info = CMS.findOne({info:'finalSpid'});
		var id = info.row1Image2;
		return id==""? "/packages/sarai_sarai-pests/public/images/locust.png": id;
	}
});


/** Events **/
Template.SaraiPestsSpidUpdatePage.events({
	
	'submit form': function(e){
			e.preventDefault();
		},
	'click #uBtn': function(e){
			e.preventDefault();
			
			/*Get Value*/
			var bhead = $("#bheader").val();
			var bsubhead = $("#bsubheader").val();
			var row1head = $("#row1head").val();
			var row2head = $("#row2head").val();
			var row3head = $("#row3head").val();
			var row3subhead = $("#row3sub").val();
			var position = $("#banner-position").val();

			
			Meteor.call('updateSpid', bhead, bsubhead, row1head, row2head, row3head, row3subhead, position);
			
			console.log("inserted");
			$('#viewChanges').show();
		},
	'click #cBtn': function(e){
			e.preventDefault();
		},
	'click #viewChanges': function(e){
			e.preventDefault();
			FlowRouter.go("/pests");
		}

});

Template.SpidMainDropzone.events({
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
	            Meteor.call('updateSpidBanner', url, id);
	            $('.bannerZone').children('img').attr('src', url);
            }, 800);
          }
      	});
      
    });
  }
});

Template.SpidIdropzone1.events({
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
            	Meteor.call('updateRow1Image1', url, id);
            	$('.IdropZone1View').children('img').attr('src', url);
            }, 800);
          }
      });
    });
  }
});

Template.SpidIdropzone2.events({
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
            	Meteor.call('updateRow1Image2', url, id);
            	$('.IdropZone2View').children('img').attr('src', url);
            }, 800);
          }
      });
    });
  }
});

