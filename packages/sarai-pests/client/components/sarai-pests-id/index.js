
Template.SaraiPestsId.helpers({
	pests: function(){
		return PlantProblem.find({'type': 'Pest'},{sort: {name: 1}, limit: 8});
	},
	imageName: function(str){
		return str.replace(/\s/g, '');
	},
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
	myCallbacks: function() {
	    return {
			 finished: function(index, fileInfo, context) {
			 	Session.set("spinner", true);
			 	Session.set('data',undefined);
			 	// filename = "../server/uploads/"+fileInfo.name;
			 	filename = "http://159.203.253.36/upload/"+fileInfo.name;
			 	//H4Dhw4yPhumNK3PKu.jpg
			 	Session.set("filename",filename);
			 	$('.jqDropZone').html("<img src=/upload/"+fileInfo.name+" width='100%' height='295px'/>");
			 	$.ajax({	
					type:"POST",
					// url: "http://localhost:5000/pestImageSearch",
					url:"http://159.203.253.36:3500/pestImageSearch",
					dataType:"json",
					data: 
						{
							'filename': filename,
						},
					success: function(result){
						Session.set("spinner", false);
						Session.set('data',result.data);
						console.log(result.data);		
					},
					error: function(error){
						Session.set("spinner", false);
						console.log(error.data);
					}
				});
			}
	    }
	},
	data: function(){
		values=[];
		if(Session.get('data')){
			for(var i = 0;i<Session.get('data').length;i++){
				values.push(PlantProblem.findOne({'type': 'Pest','name':Session.get('data')[i].name}));
			}
		}
		return values;
	},
	ontologyData: function(){
		values=[];
		if(Session.get('ontology')){
			for(var i = 0;i<Session.get('ontology').length;i++){
				values.push(PlantProblem.findOne({'type': 'Pest','name':Session.get('ontology')[i]}));
			}
		}
		return values;
	},
	numberized: function(index){
		return (index+1) + ". ";
	},
	bannerInfo: function(){
		return CMS.find({info:'finalId'});
	},
	imageURL: function(){
		var link = CMS.findOne({info:'finalId'});
		if(link.bannerImage=="")
			return "/packages/sarai_sarai-pests/public/images/id_banner2.jpg";
		else
			return link.bannerImage;
	},
	pestHeader: function(){
		return CMS.findOne({info:'finalId'}).pestHeadText;
	},
	imageProcessingResultsHeader: function(){
		if(Session.get('data'))
			return "Image Processing's Top Results";
	},
	ontologyBasedResultsHeader: function(){
		if (Session.get('ontology'))
			return "Ontology-Based Top Results";
	},
	enableSpinner: function(){
		return Session.get("spinner");
	},
	setBannerContentPosition: function(){
		var position = CMS.findOne({info:'finalId'}).bannerContentPosition, size;
		switch(position){
			case "top": return "top: 5%;";
			case "middle": return "top: 25%;";
			case "bottom": return "top: 50%;";
		}
	}
});


Template.SaraiPestsId.events({
	'click .ontology-search': function(e){
		$("#ontology-results").show();
		e.preventDefault();
		var pestTally = {};

		var ontologySelectFields = {
			".crops-affected [type=checkbox]:checked" : "plant_affected",
			".observed-pest [type=checkbox]:checked" : "classification",
			".damage-appearance [type=checkbox]:checked" : "symptoms",
			".description-of-damage [type=checkbox]:checked" : "symptoms",
			".parts-of-plant [type=checkbox]:checked" : "part_destroyed",
			".distribution-of-symptoms [type=radio]:checked" : "symptoms",
			".insect-damage [type=radio]:checked" : "description"
		};

		var ontologyTextFields = {
			".crops-affected [type=text]" : "plant_affected",
			".observed-pest [type=text]" : "classification",
			".damage-appearance [type=text]" : "symptoms",
			".description-of-damage [type=text]" : "symptoms",
			".parts-of-plant [type=text]" : "part_destroyed",
			".distribution-of-symptoms [type=text]" : "symptoms",
			".insect-damage [type=text]" : "description"
		};

		$.each(ontologySelectFields, function(selector, field) {
			$(selector).map(function() {
				var query = { type: "Pest"};
				query[field] = { $regex: ".*" + $(this).val() + ".*", $options: "i"};
				var pestMatches = PlantProblem.find(query);
				pestMatches.forEach(function(pestObj){
				  pestTally[pestObj.name] = pestTally[pestObj.name] == NaN || pestTally[pestObj.name] == undefined ? 1 : pestTally[pestObj.name] + 1;
				});
			});
		});

		$.each(ontologyTextFields, function(selector, field){
			if ($(selector).val() != ""){
				var query = { type: "Pest"};
				query[field] = { $regex: ".*" + $(selector).val() + ".*", $options: "i"};
				var pestMatches = PlantProblem.find(query);
				pestMatches.forEach(function(pestObj){
				  pestTally[pestObj.name] = pestTally[pestObj.name] == NaN || pestTally[pestObj.name] == undefined ? 1 : pestTally[pestObj.name] + 1;
				});
			}
		});

		var descendingPests = Object.keys(pestTally).sort(function(a,b){return pestTally[b]-pestTally[a]});
		Session.set('ontology', descendingPests.length >= 5? descendingPests.slice(0,5) : descendingPests.slice(0,descendingPests.length));
		
		if ($(".insect-damage[type=text]").val() != ""){
			var identifier = $(".insect-damage [type=text]").val();
			var pestMatches = PlantProblem.find({type: "Pest", description:{$regex:".*"+identifier+".*", $options: 'i'}});

			pestMatches.forEach(function(pestObj){
			  pests[pestObj.name] = pests[pestObj.name] == NaN || pests[pestObj.name] == undefined ? 1 : pests[pestObj.name] + 1;
			});
		}

		$(".ontology-search").hide();
		$(".continue-search").show();

		Session.set('ontology', Object.keys(pests).sort(function(a,b){return pests[b]-pests[a]}));

	},
	'click #next1': function(e){
		e.preventDefault();
		$(".observed-pest").show();
		$("#ontology-results").hide();
		$(".ontology-search").show();
		$(".continue-search").hide();
		$("#next1").hide();
		$("#next2").show();
	},
	'click #next2': function(e){
		e.preventDefault();
		$(".damage-appearance").show();
		$("#ontology-results").hide();
		$(".ontology-search").show();
		$(".continue-search").hide();
		$("#next2").hide();
		$("#next3").show();
	},
	'click #next3': function(e){
		e.preventDefault();
		$(".description-of-damage").show();
		$("#ontology-results").hide();
		$(".ontology-search").show();
		$(".continue-search").hide();
		$("#next3").hide();
		$("#next4").show();
	},
	'click #next4': function(e){
		e.preventDefault();
		$(".parts-of-plant").show();
		$("#ontology-results").hide();
		$(".ontology-search").show();
		$(".continue-search").hide();
		$("#next4").hide();
		$("#next5").show();
	},
	'click #next5': function(e){
		e.preventDefault();
		$(".distribution-of-symptoms").show();
		$("#ontology-results").hide();
		$(".ontology-search").show();
		$(".continue-search").hide();
		$("#next5").hide();
		$("#next6").show();
	},
	'click #next6': function(e){
		e.preventDefault();
		$(".insect-damage").show();
		$("#ontology-results").hide();
		$(".ontology-search").show();
		$(".continue-search").hide();
		$(".continue").hide();
		$(".search-again").show();
	},
	'click #stop': function(e){
		e.preventDefault();
		$(".observed-pest").hide();
		$(".damage-appearance").hide();
		$(".description-of-damage").hide();
		$(".parts-of-plant").hide();
		$(".distribution-of-symptoms").hide();
		$(".insect-damage").hide();
		$("continue").show();
		$("next1").show();
		$("next2").hide();
		$("next3").hide();
		$("next4").hide();
		$("next5").hide();
		$("next6").hide();
		$(".search-again").show();
	}
});