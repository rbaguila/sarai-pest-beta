changeChart = function(){
	
			var index = document.getElementById('topicPest').selectedIndex;
			var opt = document.getElementById('topicPest').options;
			var pest = opt[index].value;
			
			var index1 = document.getElementById('yearStat').selectedIndex;
			var opt1 = document.getElementById('yearStat').options;
			var year = opt1[index1].value;
			
			var count = 0;
		
			if(pest!="" || pest!=null){
				var pestStat = Assistance.find({problem:pest,year:year}).fetch();
				count = Assistance.find({problem:pest,year:year}).count();
			}
		
			var m = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
			var ans = [];
		
			for(i=0; i<12; i++){
				ans.push(Assistance.find({month:m[i],year:year,problem:pest}).count());
			}
		
			if(count!=0){
					var ctx = $("#pestchart").get(0).getContext("2d");
				
					var data = {
						labels: m,
						datasets: [
						{
						label: "My First dataset",
						fillColor: "rgba(220,220,220,0.5)",
						strokeColor: "rgba(220,220,220,0.8)",
						highlightFill: "rgba(220,220,220,0.75)",
						highlightStroke: "rgba(220,220,220,1)",
						data: ans
						}
						]
					};
		
					var options = 
					{
						//Boolean - Whether the scale should start at zero, or an order of magn
						scaleBeginAtZero : true,
						//Boolean - Whether grid lines are shown across the chart
						scaleShowGridLines : true,
						//String - Colour of the grid lines
						scaleGridLineColor : "rgba(0,0,0,.05)",
						//Number - Width of the grid lines
						scaleGridLineWidth : 1,
						//Boolean - Whether to show horizontal lines (except X axis)
						scaleShowHorizontalLines: true,
						//Boolean - Whether to show vertical lines (except Y axis)
						scaleShowVerticalLines: true,
						//Boolean - If there is a stroke on each bar
						barShowStroke : true,
						//Number - Pixel width of the bar stroke
						barStrokeWidth : 2,
						//Number - Spacing between each of the X value sets
						barValueSpacing : 5,
						//Number - Spacing between data sets within X values
						barDatasetSpacing : 1
					};
		
				//create chart
				var myBarChart = new Chart(ctx).Bar(data, options);
		
			}
			else{
				//console.log("No Data");
				$("#chartId").html('<canvas id="pestchart" width="500" height="400">Data Not Available</canvas>');
			}
	
}


Template.PestChart.helpers({
	
	render: function(){
			
			var pest = "";
			
			
			if($("#topicPest").val()!=undefined){
				var index = document.getElementById('topicPest').selectedIndex;
				var opt = document.getElementById('topicPest').options;
				pest = opt[index].value;
			}

			var year="2016";
			var count = 0;
		
			if(pest!="" || pest!=null){
				var pestStat = Assistance.find({problem:pest,year:year}).fetch();
				count = Assistance.find({problem:pest,year:year}).count();
			}

			if(count!=0){
						
					var m = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
					var ans = [];
		
					for(i=0; i<12; i++){
						ans.push(Assistance.find({month:m[i],year:year,problem:pest}).count());
					}				
							
					var ctx = $("#pestchart").get(0).getContext("2d");
				
					var data = {
						labels: m,
						datasets: [
						{
						label: "My First dataset",
						fillColor: "rgba(220,220,220,0.5)",
						strokeColor: "rgba(220,220,220,0.8)",
						highlightFill: "rgba(220,220,220,0.75)",
						highlightStroke: "rgba(220,220,220,1)",
						data: ans
						}
						]
					};
		
					var options = 
					{
						//Boolean - Whether the scale should start at zero, or an order of magn
						scaleBeginAtZero : true,
						//Boolean - Whether grid lines are shown across the chart
						scaleShowGridLines : true,
						//String - Colour of the grid lines
						scaleGridLineColor : "rgba(0,0,0,.05)",
						//Number - Width of the grid lines
						scaleGridLineWidth : 1,
						//Boolean - Whether to show horizontal lines (except X axis)
						scaleShowHorizontalLines: true,
						//Boolean - Whether to show vertical lines (except Y axis)
						scaleShowVerticalLines: true,
						//Boolean - If there is a stroke on each bar
						barShowStroke : true,
						//Number - Pixel width of the bar stroke
						barStrokeWidth : 2,
						//Number - Spacing between each of the X value sets
						barValueSpacing : 5,
						//Number - Spacing between data sets within X values
						barDatasetSpacing : 1
					};
		
				//create chart
				var myBarChart = new Chart(ctx).Bar(data, options);
		
			}
			else{
				console.log("No Data");
			}		
				
	}

});

Template.SaraiPestsStatistics.helpers({
	findPest : function(){
		return PlantProblem.find({'type': 'Pest'});
	},
	getYearNum : function(){
		
		var d = new Date();
		var y = d.getFullYear();
		var arr = [];
		for(i=2014; i<y+1; i++){
				arr.push({"year" : i});
		}
		return arr;
	}
});

Template.SaraiPestsStatistics.events({
	'change #topicPest' : function(){
			changeChart();
		},
	'change #yearStat' : function(){
			changeChart();
		},
	'submit form': function(e){
			e.preventDefault();
		},
	'click #submitBtn': function(e){
				e.preventDefault();
				var problem = "";
				var email = $("#email").val();
				var name = $("#name").val();
				var subject = $("#subject").val();
				var message = $("#message").val();
				var user = 'username';
				var date = moment().format('MMMM Do YYYY, h:mm:ss a');
				
				var index = document.getElementById('topic').selectedIndex;
				var opt = document.getElementById('topic').options;
				problem = opt[index].value;
				
				var cnum = Assistance.find().count();
				cnum = cnum + 1;
				
				var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
				var d = new Date();
				
				
				Meteor.call('insertInfo',subject,email,message,date,name,problem,cnum,monthNames[d.getMonth()],d.getFullYear().toString());
				
				changeChart();
				
				var msg = "<button id='closeBtn'>BTN</button><br/>Successfully requested assistance<br/>We will notify you through your email address provided.<br/>Here is your control number: " +cnum;
				$("#success-box").html(msg);
				$("#success-box").show();
				$("#request-div").hide();
	
				$("#subject").val('');
				$("#message").val('');
				
		},
	'click #cancelBtn': function(e){
				$("#subject").val('');
				$("#message").val('');
				$("#request-div").hide();
				$("#view-source").show();
		},
	'click #view-source': function(e){
				e.preventDefault();
				$("#view-source").hide();
				$("#request-div").show();
		},
	'click #closeBtn': function(e){
				e.preventDefault();
				$("#success-box").html('');
				$("#success-box").hide();
				$("#view-source").show();
				$("#request-div").hide();
		}

});

