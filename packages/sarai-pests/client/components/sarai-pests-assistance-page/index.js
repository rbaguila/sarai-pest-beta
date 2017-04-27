Template.FormRequest.events({
	'submit form': function(e){
		e.preventDefault();
	}
});

Template.FormRequest.helpers({
	findProblem : function(){
		return CMS.find();
	},
	options : function(str){
		var array = str.split(",");
		len = array.length;
		var opt="";
		for (i=0; i<len; i++){
			opt = opt + "<option value='" + array[i] + "'>" + array[i] + "</option>";
		}
		return opt;
	},
	findItems : function(){
		var prob = document.getElementById('topic').value;
		//var opt = document.getElementById('topic').options;
		//var prob = opt[index].value;
		if(prob==="Pest")
			return PlantProblem.find({'type': 'Pest'});
		else if(prob==="Disease")
			return PlantProblem.find({'type': 'Disease'});
		else
			return "none";
	},
	findPest : function(){
		return PlantProblem.find({'type': 'Pest'});
	}

});

Template.FormRequest.onRendered(function(){
     $('.fRquest').validate({
        rules: {
            subject: {
                required: true,
                minlength: 10
            },
            message: {
                required: true,
                minlength: 20
            }
        },
        messages: {
            subject: {
               required: "Please fill up this field",
					minlength: "Min length is 6"
            },
            message: {
               required: "Please fill up this field",
               minlength: "Message should be atleast 20 characters"
            }
        }
    });
});

Template.SaraiPestsAssistance.events({
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
				
				$("#subject").val('');
				$("#message").val('');
				alert('Request Submitted!');
				
				/*
				var msg = "<button id='closeBtn'>BTN</button><br/>Successfully requested assistance<br/>We will notify you through your email address provided.<br/>Here is your control number: " +cnum+1;
				$("#success-box").html(msg);
				$("#success-box").show();
				$("#request-div").hide();
				*/
		}
});



Template.FormRequest.events({
	
});
