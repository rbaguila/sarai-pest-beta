Template.reactiveChart.helpers({
	
	render : function () { 
			Chart.defaults.global.responsive = true;
			var count = PlantProblem.find({type:'Pest'}).count();
			var pest = PlantProblem.find({type:'Pest'}).fetch();
			var aCount = Assistance.find().count();
	
			var probArray = ["Unknown","Others"];
			var countArray = [Assistance.find({problem: 'Unknown'}).count(), Assistance.find({problem: 'Others'}).count()];
			
			//console.log(count);
				for (i=0; i<count; i++){
					probArray.push(pest[i].name);
					countArray.push(Assistance.find({problem: pest[i].name}).count());
				}

			//console.log(probArray);
			if(count!=0){        
			var ctx = $("#myChart").get(0).getContext("2d");
	
			var options ={
				///Boolean - Whether grid lines are shown across the chart
				scaleShowGridLines : true,
				//String - Colour of the grid lines
				scaleGridLineColor : "rgba(0,0,0,.05)",
				//Number - Width of the grid lines
				scaleGridLineWidth : 1,
				//Boolean - Whether to show horizontal lines (except X axis)
				scaleShowHorizontalLines: true,
				//Boolean - Whether to show vertical lines (except Y axis)
				scaleShowVerticalLines: true,
				//Boolean - Whether the line is curved between points
				bezierCurve : true,
				//Number - Tension of the bezier curve between points
				bezierCurveTension : 0.4,
				//Boolean - Whether to show a dot for each point
				pointDot : true,
				//Number - Radius of each point dot in pixels
				pointDotRadius : 4,
				//Number - Pixel width of point dot stroke
				pointDotStrokeWidth : 1,
				//Number - amount extra to add to the radius to cater for hit detection
				pointHitDetectionRadius : 5,
				//Boolean - Whether to show a stroke for datasets
				datasetStroke : false,
				//Number - Pixel width of dataset stroke
				datasetStrokeWidth : 2,
				datasetFill : false
					};
	
	
			var data = {
				labels: probArray,
				datasets: [
					{
					label: "Pests",
					fillColor: "rgba(151,187,205,1)",
					strokeColor: "rgba(151,187,205,1)",
					pointColor: "rgba(151,187,205,1)",
					pointStrokeColor: "#fff",
					pointHighlightFill: "#fff",
					pointHighlightStroke: "rgba(151,187,205,1)",
					data: countArray
					}
					]
			};
	
	
				
			var myLineChart = new Chart(ctx).Line(data, options);
		}
	}
	   
	
});

Template.SaraiPestsClinic.events({
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
				
				
				var msg = "<button id='closeBtn'>BTN</button><br/>Successfully requested assistance<br/>We will notify you through your email address provided.<br/>Here is your control number: " + cnum;
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

Template.Expert.helpers({
	expertInfo: function(){
		return Expert.find();
	}
});   

Template.Banner.helpers({
	bannerInfo: function(){
		return CMS.find({info:'finalClinic'});
	},
	imageURL: function(){
		var link = CMS.findOne({info:'finalClinic'});
		if(link.bannerImage=="")
			return "/packages/sarai_sarai-pests/public/images/clinic/sarai.jpg";
		else
			return link.bannerImage;
	},
	setBannerContentPosition: function(){
		var position = CMS.findOne({info:'finalClinic'}).bannerContentPosition, size;
		switch(position){
			case "top": return "top: 5%;";
			case "middle": return "top: 25%;";
			case "bottom": return "top: 50%;";
		}
	}
});

Template.About.helpers({
	aboutInfo: function(){
		return CMS.find({info:'finalClinic'});
	},
	imageURL: function(){
		var link = CMS.findOne({info:'finalClinic'});
		if(link.rowIImage=="")
			return "/packages/sarai_sarai-pests/public/images/clinic/sarai_3.jpg";
		else
			return link.rowIImage;
	}
});

Template.AccurateDiagnostic.helpers({
	rowInfo: function(){
		return CMS.find({info:'finalClinic'});
	},
	imageURL: function(){
		var link = CMS.findOne({info:'finalClinic'});
		if(link.rowIIImage=="")
			return "/packages/sarai_sarai-pests/public/images/clinic/sarai_2.jpg";
		else
			return link.rowIIImage;
	}
});

Template.News.helpers({
	news: function(){
		return Report.find({limit:4});
	}
});