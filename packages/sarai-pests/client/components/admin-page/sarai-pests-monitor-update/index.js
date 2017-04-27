Template.SaraiPestsMonitorUpdatePage.onRendered(function(){
     $('.updateForm').validate({
        rules: {
            bheader: {
                required: true,
                minlength: 6
            },
            bsubheader: {
                required: true,
                minlength: 20
            }
        }
    });
    
});


ifCMS = function(){
	var count = CMS.find({info: "finalMonitor"}).count();
	if(count==0) return false;
	else return true;
}


/** Helper **/
Template.SaraiPestsMonitorUpdatePage.helpers({
	
	getBannerHText: function(){
				if(ifCMS()){
					var info = CMS.find({info: "finalMonitor"}).fetch();
					return info[0].bannerHeadText;
				}
	},
	getBannerSText: function(){
				if(ifCMS()){
					var info = CMS.find({info: "finalMonitor"}).fetch();
					return info[0].bannerSubText;
				}
	},
	isSelected: function(position){
		return position == CMS.findOne({info: "finalMonitor"}).bannerContentPosition;
	}
});

Template.MonitorDropzone.helpers({
	banner: function(){
		var info = CMS.findOne({info:'finalMonitor'});
		var id = info.bannerImage;
		return id==""? "/packages/sarai_sarai-pests/public/images/mon_banner2.jpg": id;
	}
});


/** Events **/
Template.SaraiPestsMonitorUpdatePage.events({
	
	'submit form': function(e){
			e.preventDefault();
		},
	'click #uBtn': function(e){
			e.preventDefault();
			
			/*Get Value*/
			var bhead = $("#bheader").val();
			var bsubhead = $("#bsubheader").val();
			var position = $("#banner-position").val();
			
			Meteor.call('updateMonitor', bhead, bsubhead, position);
			
			console.log("inserted");
			$('#viewChanges').show();
		},
	'click #cBtn': function(e){
			e.preventDefault();
		},
	'click #viewChanges': function(e){
			e.preventDefault();
			FlowRouter.go("/pests-monitor");
		}

});

Template.MonitorDropzone.events({
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
	            Meteor.call('updateMonitorBanner', url, id);
	            $('.bannerZone').children('img').attr('src', url);
            }, 800);
          }
      	});
      
    });
  }
});