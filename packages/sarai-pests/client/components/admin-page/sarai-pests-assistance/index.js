Template.RequestAssistance.helpers({
	request: function(){
		return Assistance.find();
	},
	subjectString: function(str){
		if(str.length > 40){
			return str.substring(0,39) + "...";
		}else{
		return str;
		}
	},
	equals: function(v1, v2) {
		return (v1 === v2);
	},
	answered: function(){
		
	}
});


Template.RequestAssistance.events({
	'click .msg-btn': function(e){
		var id = e.target.id;
		
		var subject="";
		var msg="";
		var date="";
		var uname="";
		var req ="";
		
		if(id === undefined || id === null || id.length<1){}
		else{
			var res = Assistance.findOne({'_id': id});
			if(res===undefined){}
			else{
				subject = "<b>Subject: </b>" + res.subject;
				msg = "<b>Message: </b><br/>" + res.message;
				uname = "<b>Requested by: </b>" + res.user;
				date = "<b>Date: </b>" + res.date;
				req = '<button id="request" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" value="'+ id +'">Answer</button>';
			}
		}
		//$('#view-msg').html(text);
		$('#subj').html(subject);
		$('#date').html(date);
		$('#msg-content').html(msg);
		$('#uname').html(uname);
		$('#ans-req').html(req);
	},
	'click .del-btn': function(e){
		e.preventDefault();
		var id = e.target.id;
		
		$('#subj').html('');
		$('#date').html('');
		$('#msg-content').html('');
		$('#uname').html('');
		$('#ans-req').html('');
		
		Meteor.call('removeInfo', id);
	},
	'click #request': function(e){
		e.preventDefault();
		$("#ans-admin").show();
	},
	'click #submitAns' : function(e){
		e.preventDefault();
		var text = $("#insight").val();
		var title = $("#insightTitle").val();
		var date = moment().format('MMMM Do YYYY, h:mm:ss a');
		var num = $("#request").val();
		$("#request").hide();
		Meteor.call('insertIntoResult', num, title, text, date);
		alert('Answered');
	},
	'click #cancelAns' : function(e){
		e.preventDefault();
		$("#request").show();
		$("#insight").val('');
		$("#ans-admin").hide();
	}
	
});
