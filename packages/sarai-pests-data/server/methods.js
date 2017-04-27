Meteor.methods({
	'insertPest': function(pestData){
		PlantProblem.insert({
			name: pestData.name,
			type: pestData.type,
			eng_name: pestData.eng_name,
			fil_name: pestData.fil_name,
			sci_name: pestData.sci_name,
			order: pestData.order,
			classification: pestData.classification,
			stage_threatening: pestData.stage_threatening,
			plant_affected: pestData.plant_affected,
			description: pestData.description,
			symptoms: pestData.symptoms,
			effect: pestData.effect,
			treatment: pestData.treatment,
			stage_plant_affected: pestData.stage_plant_affected,
			part_destroyed: pestData.part_destroyed,
			fil_stage_plant_affected: pestData.fil_stage_plant_affected,
			fil_effect: pestData.fil_effect,
			fil_part_destroyed: pestData.fil_part_destroyed,
			fil_stage_threatening: pestData.fil_stage_threatening,
			fil_symptoms: pestData.fil_symptoms,
			fil_description: pestData.fil_description,
			fil_plant_affected: pestData.fil_plant_affected,
			fil_classification: pestData.fil_classification,
			fil_treatment: pestData.fil_treatment,
			image: pestData.image
		});
	},
	'updatePest': function(pestData){
		PlantProblem.update(
			{ _id: pestData.id },
			{
				$set: {
					name: pestData.name,
					type: pestData.type,
					eng_name: pestData.eng_name,
					fil_name: pestData.fil_name,
					sci_name: pestData.sci_name,
					order: pestData.order,
					classification: pestData.classification,
					stage_threatening: pestData.stage_threatening,
					plant_affected: pestData.plant_affected,
					description: pestData.description,
					symptoms: pestData.symptoms,
					effect: pestData.effect,
					treatment: pestData.treatment,
					stage_plant_affected: pestData.stage_plant_affected,
					part_destroyed: pestData.part_destroyed,
					fil_stage_plant_affected: pestData.fil_stage_plant_affected,
					fil_effect: pestData.fil_effect,
					fil_part_destroyed: pestData.fil_part_destroyed,
					fil_stage_threatening: pestData.fil_stage_threatening,
					fil_symptoms: pestData.fil_symptoms,
					fil_description: pestData.fil_description,
					fil_plant_affected: pestData.fil_plant_affected,
					fil_classification: pestData.fil_classification,
					fil_treatment: pestData.fil_treatment,
					image: pestData.image
				}
			},
				{ upsert: false }
			);

			// update Pest Type View in Pest Library CMS  
			Meteor.call('updateViewPestType');
	},
	'removePest': function(id){
		PlantProblem.remove({_id: id});

		// update Pest Type View in Pest Library CMS  
		Meteor.call('updateViewPestType');
	}
})


