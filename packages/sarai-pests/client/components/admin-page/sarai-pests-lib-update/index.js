Template.SaraiPestsLibUpdatePage.onRendered(function(){
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
            searchlabel: {
                required: true,
				minlength: 5
            }
        }
    });
    
});


ifCMS = function(){
	var count = CMS.find({info: "finalLib"}).count();
	if(count==0) return false;
	else return true;
}


/** Helper **/
Template.SaraiPestsLibUpdatePage.helpers({
	
	getBannerHText: function(){
				if(ifCMS()){
					var info = CMS.find({info: "finalLib"}).fetch();
					return info[0].bannerHeadText;
				}
	},
	getBannerSText: function(){
				if(ifCMS()){
					var info = CMS.find({info: "finalLib"}).fetch();
					return info[0].bannerSubText;
				}
	},
	getSearchLText: function(){
				if(ifCMS()){
					var info = CMS.find({info: "finalLib"}).fetch();
					return info[0].searchLabelText;
				}
	},
	pestType: function () {
		if (ifCMS()){
		  var data = PlantProblem.find().fetch();
		  var distinctData = _.uniq(data, false, function(d) {return d.plant_affected});
		  return _.pluck(distinctData, "plant_affected");
		}
	},
	isChecked: function (pestType) {
		return CMS.find({info: "finalLib", viewPestType: pestType}).count() > 0? true : false;
	},
	getPestNumbers: function() {
		if (ifCMS()){
			var info = CMS.find({info: "finalLib"}).fetch();
			return info[0].pestsPerPage;
		}
	},
	isSelected: function(position){
		return position == CMS.findOne({info: "finalLib"}).bannerContentPosition;
	}
});

Template.LibDropzone.helpers({
	banner: function(){
		var info = CMS.findOne({info:'finalLib'});
		var id = info.bannerImage;
		return id==""? "/packages/sarai_sarai-pests/public/images/lib_banner5.jpg": id;
	}
});


/** Events **/
Template.SaraiPestsLibUpdatePage.events({
	
	'submit form': function(e){
			e.preventDefault();
		},
	'click #uBtn': function(e){
			e.preventDefault();
			
			/*Get Value*/
			var bhead = $("#bheader").val();
			var bsubhead = $("#bsubheader").val();
			var searchlabel = $("#searchlabel").val();

			var pestType = [];
			var pestNumbers = $("#pestsperpage").val();
			var position = $("#banner-position").val();

			$( "input[type=checkbox]:checked" ).map(function() {
			    pestType.push($( this ).val());
			});
			
			Meteor.call('updateLibrary', bhead, bsubhead, searchlabel, pestType, pestNumbers, position);
			
			console.log("inserted");
			$('#viewChanges').show();
		},
	'click #cBtn': function(e){
			e.preventDefault();
		},
	'click #viewChanges': function(e){
			e.preventDefault();
			FlowRouter.go("/pests-lib");
		}

});

Template.LibDropzone.events({
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
	            Meteor.call('updateLibBanner', url, id);
	            $('.bannerZone').children('img').attr('src', url);
            }, 800);
          }
      	});
      
    });
  }
});