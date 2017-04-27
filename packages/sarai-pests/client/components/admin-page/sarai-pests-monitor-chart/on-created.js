Template.SaraiPestsSpidMonitorChart.onCreated(function() {
	Meteor.subscribe('plantProblem');
    Meteor.subscribe('assistance'); 
    Meteor.subscribe('cms');
});

Template.monitorChart.onCreated(function() {
    var self = this;

    var count = PlantProblem.find({type:'Pest'}).count();
    var pest = PlantProblem.find({type:'Pest'}).fetch();
    var aCount = Assistance.find().count();

    var probArray = ['Unknown','Others'];
    var countArray = [Assistance.find({problem: 'Unknown'}).count(), Assistance.find({problem: 'Others'}).count()];

    console.log(countArray);
    for (i=0; i<count; i++){
        probArray.push(pest[i].name);
        countArray.push(Assistance.find({problem: pest[i].name}).count());
    }

    self.monitorChart = new ReactiveVar({
            chart: {
                type: 'column'
            },
            title: {
                text: 'Summary of Pest Request Assistance per Pest'
            },
            // subtitle: {
            //     text: 'KBurdeos'
            // },
            xAxis: {
                categories: probArray,
                crosshair: true
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Number of Request'
                }
            },
            series: [
                {
                    data: countArray
                },
                
            ],
            credits: {
                enabled: false
            }
    });


    //var index = document.getElementById('topicPest').selectedIndex;
    //var opt = document.getElementById('topicPest').options;
    //var pest = opt[index].value;
    
    //var index1 = document.getElementById('yearStat').selectedIndex;
    //var opt1 = document.getElementById('yearStat').options;
    //var year = opt1[index1].value;
    var year = "2016";
    var count = 0;

    //if(pest!="" || pest!=null){
    var pestStat = Assistance.find({year:year}).fetch();
    count = Assistance.find({year:year}).count();
    //}

    var m = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var ans = [];

    for(i=0; i<12; i++){
        ans.push(Assistance.find({month:m[i],year:year}).count());
    }

    self.numberChart = new ReactiveVar({
            chart: {
                type: '',
                //height: '500px'
            },
            title: {
                text: 'History of Pest Request'
            },
            // subtitle: {
            //     text: 'KBurdeos'
            // },
            xAxis: {
                categories: m,
                crosshair: true
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Number of Pest Request per Month'
                }
            },
            // plotOptions: {
            //     column: {
            //         pointPadding: 0.1,
            //         borderWidth: 0,
            //         groupPadding: 0
            //     }
            // },
            series: [
                {
                    //name: 'Nov5-11',
                    data: ans
                }
            ],
            credits: {
                enabled: false
            }
    });

    self.mostViewedChart = new ReactiveVar({

            chart: {
                type: 'column',
                //height: '500px'
            },
            title: {
                text: 'Most Viewed Pests'
            },
            // subtitle: {
            //     text: 'KBurdeos'
            // },
            xAxis: {
                type: 'category'
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Number of Views'
                }
            },
            // plotOptions: {
            //     column: {
            //         pointPadding: 0.1,
            //         borderWidth: 0,
            //         groupPadding: 0
            //     }
            // },
            series: [{
                name: 'Pests',
                colorByPoint: true,
                data: [{
                    name: 'Black Armyworm Adult',
                    y: 20,
                }, {
                    name: 'Green Leaf Hopper',
                    y: 18,
                }, {
                    name: 'Corn Borer',
                    y: 12,
                }, {
                    name: 'Rice Weevil',
                    y: 5,
                }]
            }],
            credits: {
                enabled: false
            }
    });
    
})