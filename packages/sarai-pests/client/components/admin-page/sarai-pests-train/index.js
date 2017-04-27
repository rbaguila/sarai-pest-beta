Template.TrainPest.helpers({
	myCallbacks: function() {
	    return {
			 finished: function(index, fileInfo, context) {
			 	Session.set('data',undefined);
			 	filename = "../server/uploads/"+fileInfo.name;
			 	Session.set("filename",filename);
			 	$('.jqDropZone').html("<img src=/upload/"+fileInfo.name+" width='100%' height='295px'/>");
			 	$.ajax({	
					type:"POST",
					url:"http://127.0.0.1:5000/pestImageSearch",
					dataType:"json",
					data: 
						{
							'filename': filename,
						},
					success: function(result){
						Session.set('data',result.data);
						console.log(result.data);		
					},
					error: function(error){
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
	pests: function(){
		return PlantProblem.find({'type': 'Pest'});
	},
});

Template.TrainPest.events({
	"click #add": function (event, template) {
		var pest = document.getElementById('pestName');
		var name = pest.options[pest.selectedIndex].value;
		console.log(name);
		$.ajax({
				type:"POST",
				url:"http://127.0.0.1:5000/addTrainingData",
				dataType:"json",
				data: 
					{
						'flag':'true',
						'type': 'pest',
						'target': name,
						'filename': Session.get("filename"),
					},
				success: function(result){
					
				},
				error: function(error){
					
				}
			});	
		Session.set("filename",undefined);
		$('.jqDropZone').html("<img src=/images/drop-here.png width='100%' height='295px'/>");

  	}

});