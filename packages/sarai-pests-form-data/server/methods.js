Meteor.methods({
	'insertFormInfo': function(user, date, email, floc, area, crop, src, variety, cstage, vtype, pesttype, symptoms, parts, distribution, damage, fertilizer, insecticide, herbicide, fungicide, weather, chemapplied, weatherobserved){
	
		ClinicForm.insert({
			user: user,
			date: date,
			email: email,
			
			location: floc,
			area: area,
			crop: crop,
			source: src,
			variety: variety,
			cropstage : cstage,
			varietytype: vtype,
			
			pesttype : pesttype,
			symptoms : symptoms,
			parts : parts,
			distribution : distribution,
			damage : damage,
			
			fertilizer: fertilizer,
			insecticide: insecticide,
			herbicide: herbicide,
			fungicide: fungicide, 
			weather: weather,
			chemapplied: chemapplied,
			weatherobserved: weatherobserved
			
		});
	}
})


