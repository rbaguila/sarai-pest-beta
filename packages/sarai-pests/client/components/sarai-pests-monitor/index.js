Template.SaraiPestsMonitor.helpers({
	pestsRice: function(){
		return PlantProblem.find({'type': 'Pest', 'plant_affected': 'Rice'},{limit: 8});
	},
	pestsCorn: function(){
		return PlantProblem.find({'type': 'Pest', 'plant_affected': 'Corn'},{limit: 8});
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
	bannerInfo: function(){
		return CMS.find({info:'finalMonitor'});
	},
	imageURL: function(){
		var link = CMS.findOne({info:'finalMonitor'});
		if(link.bannerImage=="")
			return "/packages/sarai_sarai-pests/public/images/mon_banner2.jpg";
		else
			return link.bannerImage;
	},
    setBannerContentPosition: function(){
        var position = CMS.findOne({info:'finalMonitor'}).bannerContentPosition, size;
        switch(position){
            case "top": return "top: 5%;";
            case "middle": return "top: 25%;";
            case "bottom": return "top: 50%;";
        }
    }
});


Template.highmapsHelper.onRendered(function() {
	var self = this;
	
	self.autorun(function() {
		var data = Template.currentData();
		$('#' + data.chartId).highcharts('Map',data.chartObject);
	});
});


Template.SaraiPestsMonitor.armywormRiskMap = function() {


    // Instantiate the map
    return {
        chart: {
            spacingBottom: 20
        },
        title : {
            text : 'Pest Risk Map for Armyworm'
        },

        legend: {
            enabled: true
        },

        plotOptions: {
            map: {
                allAreas: true,
                nullColor: 'rgba(0,0,0,0)',
                joinBy: ['name'],
                dataLabels: {
                    enabled: true,
                    color: '#FFFFFF',
                    // formatter: function () {
                    //     if (this.point.properties && this.point.properties.labelrank.toString() < 5) {
                    //         return this.point.properties['hc-key'];
                    //     }
                    // },
                    format: null,
                    style: {
                        fontWeight: 'bold'
                    }
                },
                mapData: Highcharts.maps['countries/ph/ph-all'],
                tooltip: {
                    headerFormat: '',
                    pointFormat: '{point.name}: <b>{series.name}</b>'
                }

            }
        },

        series : [{
            name: 'High Risk',
            color: '#FF0000',
            data: $.map(['Quezon', 'Misamis Oriental', 'Bohol'], function (name) {
                return { name: name };
            })
        }, {
            name: 'Medium Risk',
            color: '#FFFF00',
            data: $.map(['Northern Samar', 'Zambales', 'Antique', 'Bukidnon', 'Davao del Sur',
                         'Negros Occidental', 'Pangasinan', 'Zamboanga', 'Bataan', 'Tuguegarao',
                         'Cavite', 'La Union', 'Laguna', 'Masbate', 'Misamis Occidental',
                         'Occidental Mindoro', 'Rizal', 'Aklan', 'Cagayan', 'Capiz'], function (name) {
                return { name: name };
            })
        }, {
            name: 'Low Risk',
            color: '#FFFF55',
            data: $.map(['Quirino', 'Aurora', 'Camarines Norte', 'Eastern Samar', 'Leyte'], function (name) {
                return { name: name };
            })
        }]
      }
};

Template.SaraiPestsMonitor.armywormHistory = function() {


    // Instantiate the map
    return {
        chart: {
            spacingBottom: 20
        },
        title : {
            text : 'Armyworm Pest History'
        },

        legend: {
            enabled: true
        },

        plotOptions: {
            map: {
                allAreas: true,
                nullColor: 'rgba(0,0,0,0)',
                joinBy: ['name'],
                dataLabels: {
                    enabled: true,
                    color: '#FFFFFF',
                    // formatter: function () {
                    //     if (this.point.properties && this.point.properties.labelrank.toString() < 5) {
                    //         return this.point.properties['hc-key'];
                    //     }
                    // },
                    format: null,
                    style: {
                        fontWeight: 'bold'
                    }
                },
                mapData: Highcharts.maps['countries/ph/ph-all'],
                tooltip: {
                    headerFormat: '',
                    pointFormat: '{point.name}: <b>{series.name}</b>'
                }

            }
        },

        series : [{
            name: 'History',
            color: '#AAEE00',
            data: $.map(['Northern Samar', 'Zambales', 'Antique', 'Bohol', 'Bukidnon', 'Davao del Sur',
                         'Negros Occidental', 'Pangasinan', 'Zamboanga', 'Bataan', 'Tuguegarao',
                         'Cavite', 'Isabela', 'La Union', 'Laguna', 'Masbate', 'Misamis Occidental',
                         'Misamis Oriental', 'Occidental Mindoro', 'Quezon', 'Rizal', 'Aklan', 'Cagayan', 'Capiz'], function (name) {
                return { name: name };
            })
        }]
      }
};


Template.SaraiPestsMonitor.armywormDroughtAssessment = function() {


    // Instantiate the map
    return {
        chart: {
            spacingBottom: 20
        },
        title : {
            text : 'Dry Spell/Drought Assesment for July 2016'
        },

        legend: {
            enabled: true
        },

        plotOptions: {
            map: {
                allAreas: true,
                nullColor: 'rgba(0,0,0,0)',
                joinBy: ['name'],
                dataLabels: {
                    enabled: true,
                    color: '#FFFFFF',
                    // formatter: function () {
                    //     if (this.point.properties && this.point.properties.labelrank.toString() < 5) {
                    //         return this.point.properties['hc-key'];
                    //     }
                    // },
                    format: null,
                    style: {
                        fontWeight: 'bold'
                    }
                },
                mapData: Highcharts.maps['countries/ph/ph-all'],
                tooltip: {
                    headerFormat: '',
                    pointFormat: '{point.name}: <b>{series.name}</b>'
                }

            }
        },

        series : [{
            name: 'Dry Spell',
            color: '#FF0000',
            data: $.map(['Isabela','Camarines Norte', 'Eastern Samar', 'Leyte'], function (name) {
                return { name: name };
            })
        }, {
            name: 'Drought',
            color: '#FFFF00',
            data: $.map(['Quirino', 'Aurora', 'Quezon', 'Misamis Oriental', 'Bohol'], function (name) {
                return { name: name };
            })
        }]
      }
};

//Pest Risk Map for Armyworm
// Template.SaraiPestsMonitor.armywormRiskMap = function() {
//     var data = [
//           {
// 		    "name":"Palawan",
// 		    "value":0
// 		  },
// 		  {
// 		    "name":"Negros Occidental",
// 		    "value":1
// 		  },
// 		  {
// 		    "name":"Camarines Sur",
// 		    "value":2
// 		  },
// 		  {
// 		    "name":"Isabela",
// 		    "value":0
// 		  },
// 		  {
// 		    "name":"Nueva Ecija",
// 		    "value":1
// 		  },
// 		  {
// 		    "name":"Iloilo",
// 		    "value":2
// 		  },
// 		  {
// 		    "name":"North Cotabato",
// 		    "value":0
// 		  },
// 		  {
// 		    "name":"Cagayan",
// 		    "value":1
// 		  },
// 		  {
// 		    "name":"Quezon",
// 		    "value":2
// 		  },
// 		  {
// 		    "name":"Maguindanao",
// 		    "value":0
// 		  },
// 		  {
// 		    "name":"Masbate",
// 		    "value":0
// 		  },
// 		  {
// 		    "name":"Bohol",
// 		    "value":1
// 		  },
// 		  {
// 		    "name":"Batangas",
// 		    "value":1
// 		  },
// 		  {
// 		    "name":"Agusan del Sur",
// 		    "value":2
// 		  },
// 		  {
// 		    "name":"Leyte",
// 		    "value":2
// 		  },
// 		  {
// 		    "name":"Cebu",
// 		    "value":2
// 		  },
// 		  {
// 		    "name":"Zamboanga del Sur",
// 		    "value":1
// 		  },
// 		  {
// 		    "name":"Pangasinan",
// 		    "value":2
// 		  },
// 		  {
// 		    "name":"Bukidnon",
// 		    "value":2
// 		  },
// 		  {
// 		    "name":"Capiz",
// 		    "value":0
// 		  },
//       ];
//     return{
//     	title : {
//                   text : 'Pest Risk Map for Armyworm'
//               },

//               subtitle : {
//                   text : 'Source map: <a href="https://code.highcharts.com/mapdata/countries/ph/ph-all.js">Philippines</a>'
//               },

//               mapNavigation: {
//                   enabled: true,
//                   buttonOptions: {
//                       verticalAlign: 'top'
//                   }
//               },

//               colorAxis: {
//                   min: 0,
//                   minColor: '#EEEE00',
//                   maxColor: '#FF0000',
//               },

//               series : [{
//                   data : data,
//                   mapData: Highcharts.maps['countries/ph/ph-all'],
//                   joinBy: 'name',
//                   name: 'Suitability',
//                   states: {
//                       hover: {
//                           color: '#BADA55'
//                       }
//                   },
//                   dataLabels: {
//                       enabled: false,
//                       format: '{point.name}'
//                   }
//               }]
//     }
// };