var currentPest = "";

Template.SaraiPestsLib.helpers({
	equals: function(v1, v2) {
		return (v1 === v2);
	},
	charLimit: function(str){
		return str.substring(0,160) + "...";
	},
	titleCharLimit: function(str){
		if(str.length > 13)
			return str.substring(0,12) + "...";

		return str;
	},
	bannerInfo: function(){
		return CMS.find({info:'finalLib'});
	},
	imageURL: function(){
		var link = CMS.findOne({info:'finalLib'});
		if(link.bannerImage=="")
			return "/packages/sarai_sarai-pests/public/images/lib_banner5.jpg";
		else
			return link.bannerImage;
	},
	searchLabel: function(){
		return CMS.findOne({info:'finalLib'}).searchLabelText;
	},
	typeOfPest: function(){
		return CMS.findOne({info:'finalLib'}).viewPestType;
	},
	setPageSessions: function(pest){
		currentPest = pest;
		Session.set(currentPest, 1);
		var pestsPerPage = CMS.findOne({info:'finalLib'}).pestsPerPage;

		var pestCount = PlantProblem.find({'type': 'Pest', 'plant_affected': currentPest}).count();
		pestCount = pestCount % pestsPerPage == 0? Math.floor(pestCount/pestsPerPage) : Math.floor(pestCount/pestsPerPage+1);
		Session.set(currentPest+" Count", pestCount);
	},
	getCurrentPest: function(){
		return currentPest;
	},
	convertPestToUpper: function(){
		return this.toUpperCase();
	},
	displayPest: function(pestType){
		var pestsPerPage = parseInt(CMS.findOne({info:'finalLib'}).pestsPerPage);
		return PlantProblem.find({'type': 'Pest', 'plant_affected': pestType},{sort: {name: 1},skip: (Session.get(currentPest)-1)*pestsPerPage, limit: pestsPerPage});
	},
	page: function(pestType){
		var count = Session.get(pestType + " Count");
		var pages = [];
		for(var i = 1; i<=count; i++)
			pages.push(i);
		return pages;
	},
	setLeftArrowActive: function(){
		return Session.get(currentPest) > 1? "" : "disabled";
	},
	setRightArrowActive: function(){
		return Session.get(currentPest) < Session.get(currentPest + " Count")? "" : "disabled";
	},
	setBannerContentPosition: function(){
		var position = CMS.findOne({info:'finalLib'}).bannerContentPosition, size;
		switch(position){
			case "top": return "top: 5%;";
			case "middle": return "top: 25%;";
			case "bottom": return "top: 50%;";
		}
	}
});

Template.SaraiPestsLib.events({
	'click .page-left-arrow' : function (e){
		currentPest = $(e.target).attr("name");
		var currentPage = Session.get(currentPest);
		if (currentPage > 1){
			Session.set(currentPest, currentPage-1);
		}	 	
	 },
	'click .page-right-arrow' : function (e){
	 	currentPest = $(e.target).attr("name");
	 	var currentPage = Session.get(currentPest);
		if (currentPage < Session.get(currentPest + " Count")){
			Session.set(currentPest, currentPage+1);
		}	
	 }
});

Template.IndividualPest.helpers({
	imageName: function(str){
		return str.replace(/\s/g, '');
	}
});

Template.PageNumber.helpers({
	setPageActive: function(pageNum){
		return pageNum == Session.get(currentPest)? "active" : "";
	},
	getCurrentPagePest: function(){
		return currentPest;
	}
});

Template.PageNumber.events({
	'click .page-number' : function(e){
		currentPest = $(e.target).attr("name");
		Session.set(currentPest, this.pageNum);
	 }	 
});