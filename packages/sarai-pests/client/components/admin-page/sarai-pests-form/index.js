Template.FormsSubmitted.helpers({
	form: function(){
		return ClinicForm.find();
	},
	increment: function(index){
		return index + 1;
	}
});

Template.FormsSubmitted.events({
	'click .msg-btn': function(e){
		var id = e.target.id;
		
		var geninfo="";
		var pprob="";
		var ainfo="";
		
		if(id === undefined || id === null || id.length<1){}
		else{
			var res = ClinicForm.findOne({'_id': id});
			if(res===undefined){}
			else{
				geninfo = "<b>General Information</b><br/><br/>";
				/*geninfo = geninfo + "<table class='mdl-data-table mdl-js-data-table'><tr><td class='mdl-data-table__cell--non-numeric'><b>Sender</b></td><td class='mdl-data-table__cell--non-numeric'>"+res.sender+"</td></tr><tr><td class='mdl-data-table__cell--non-numeric'><b>Contact Details</b></td><td class='mdl-data-table__cell--non-numeric'>"+res.email+"</td></tr><tr><td class='mdl-data-table__cell--non-numeric'><b>Date</b></td><td class='mdl-data-table__cell--non-numeric'>"+res.date+"</td></tr><tr><td class='mdl-data-table__cell--non-numeric'><b>Location</b></td><td class='mdl-data-table__cell--non-numeric'>"+res.location+"</td></tr><tr><td class='mdl-data-table__cell--non-numeric'><b>Area Planted</b></td><td class='mdl-data-table__cell--non-numeric'>"+res.area+"</td></tr><tr><td class='mdl-data-table__cell--non-numeric'><b>Crop</b></td><td class='mdl-data-table__cell--non-numeric'>"+res.crop+"</td></tr><tr><td class='mdl-data-table__cell--non-numeric'><b>Crop Stage</b></td><td class='mdl-data-table__cell--non-numeric'>"+res.cropstage+"</td></tr><tr><td class='mdl-data-table__cell--non-numeric'><b>Variety</b></td><td class='mdl-data-table__cell--non-numeric'>"+res.variety+"("+res.varietytype+")</td></tr><tr><td class='mdl-data-table__cell--non-numeric'><b>Source of Plant</b></td><td class='mdl-data-table__cell--non-numeric'>"+res.source+"</td></tr></table><br/>";*/
				
				geninfo = geninfo + "<b>Sender: </b>" + res.user +"<br/>";
				geninfo = geninfo + "<b>Contact details: </b>" + res.email + "<br/>";
				geninfo = geninfo + "<b>Date: </b>" + res.date + "<br/>";
				geninfo = geninfo + "<b>Farm Location: </b>" + res.location + "<br/>";
				geninfo = geninfo + "<b>Area Planted: </b>" + res.area + "<br/>";
				geninfo = geninfo + "<b>Crop: </b>" + res.crop + "<br/>";
				geninfo = geninfo + "<b>Crop Stage: </b>" + res.cropstage + "<br/>";
				geninfo = geninfo + "<b>Variety: </b>" + res.variety +" ("+ res.varietytype +")<br/>";	
				geninfo = geninfo + "<b>Source of Plant: </b>" + res.source + "<br/>";
						
				pprob = "<b>Pest Problem</b><br/><br/>";
				pprob = pprob + "<b>Types of Pests: </b>" + res.pesttype + "<br/>";
				pprob = pprob + "<b>Description of Symptoms: </b>" + res.symptoms + "<br/>";
				pprob = pprob + "<b>Parts of Plant Affected: </b>" + res.parts + "<br/>";
				pprob = pprob + "<b>Distribution of Symptoms: </b>" + res.distribution + "<br/>";
				pprob = pprob + "<b>Insect Damage: </b>" + res.pesttype + "<br/>";
				
				ainfo = "<b>Additional Information</b><br/><br/>";
				ainfo = ainfo + "<b>Chemical Rate Applied</b><br/>";
				var table = "<table class='mdl-data-table mdl-js-data-table'><tr><td class='mdl-data-table__cell--non-numeric'><b>Fertilizer</b></td><td class='mdl-data-table__cell--non-numeric'>"+res.fertilizer+"</td></tr><tr><td class='mdl-data-table__cell--non-numeric'><b>Insecticide</b></td><td class='mdl-data-table__cell--non-numeric'>"+res.insecticide+"</td></tr><tr><td class='mdl-data-table__cell--non-numeric'><b>Herbicide</b></td><td class='mdl-data-table__cell--non-numeric'>"+res.herbicide+"</td></tr><tr><td class='mdl-data-table__cell--non-numeric'><b>Fungicide</b></td><td class='mdl-data-table__cell--non-numeric'>"+res.fungicide+"</td></tr></table>";
				ainfo = ainfo +""+ table + "<br/>";
						/*
						weather: weather,
						chemapplied: chemapplied,
						weatherobserved: weatherobserved*/
				
			}
			
			var btn = '<button id="idBtn" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" value="'+ id +'">Input Lab Result</button>';
			$('#genInfoSheet').html(geninfo);
			$('#pestProbSheet').html(pprob);
			$('#addInfoSheet').html(ainfo);
			$('#labSheet').html(btn);
		}
		
	},
	'click #idBtn': function(e){
		e.preventDefault();
		$("#ans-lab").show();
	},
	'click #submitLab' : function(e){
		e.preventDefault();
		var text = $("#lab").val();
		var title = $("#labTitle").val();
		var date = moment().format('MMMM Do YYYY, h:mm:ss a');
		var num = $("#idBtn").val();
		$("#idBtn").hide();
		Meteor.call('insertIntoLabResult', num, title, text, date);
		alert('Answered');
	},
	'click #cancelLab' : function(e){
		e.preventDefault();
		$("#idBtn").show();
		$("#lab").val('');
		$("#labTitle").val('');
		$("#ans-lab").hide();
	}
	
});

