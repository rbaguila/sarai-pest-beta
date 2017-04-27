Template.SaraiPestsIdUpdatePage.onRendered(function(){
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
            pestheader: {
                required: true,
				minlength: 3
            }
        }
    });
    
});


ifCMS = function(){
	var count = CMS.find({info: "finalId"}).count();
	if(count==0) return false;
	else return true;
}


/** Helper **/
Template.SaraiPestsIdUpdatePage.helpers({
	
	getBannerHText: function(){
				if(ifCMS()){
					var info = CMS.find({info: "finalId"}).fetch();
					return info[0].bannerHeadText;
				}
	},
	getBannerSText: function(){
				if(ifCMS()){
					var info = CMS.find({info: "finalId"}).fetch();
					return info[0].bannerSubText;
				}
	},
	getPestHText: function(){
				if(ifCMS()){
					var info = CMS.find({info: "finalId"}).fetch();
					return info[0].pestHeadText;
				}
	},
	isSelected: function(position){
		return position == CMS.findOne({info: "finalId"}).bannerContentPosition;
	}
});

Template.IdDropzone.helpers({
	banner: function(){
		var info = CMS.findOne({info:'finalId'});
		var id = info.bannerImage;
		return id==""? "/packages/sarai_sarai-pests/public/images/id_banner2.jpg": id;
	}
});


/** Events **/
Template.SaraiPestsIdUpdatePage.events({
	
	'submit form': function(e){
			e.preventDefault();
		},
	'click #uBtn': function(e){
			e.preventDefault();
			
			/*Get Value*/
			var bhead = $("#bheader").val();
			var bsubhead = $("#bsubheader").val();
			var pesthead = $("#pestheader").val();
			var position = $("#banner-position").val();
			
			Meteor.call('updateId', bhead, bsubhead, pesthead, position);
			
			console.log("inserted");
			$('#viewChanges').show();
		},
	'click #cBtn': function(e){
			e.preventDefault();
		},
	'click #viewChanges': function(e){
			e.preventDefault();
			FlowRouter.go("/pests-id");
		}

});

Template.IdDropzone.events({
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
	            Meteor.call('updateIdBanner', url, id);
	            $('.bannerZone').children('img').attr('src', url);
            }, 800);
          }
      	});
      
    });
  }
});