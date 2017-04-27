// if (Main.find().count() === 0) {
Main.remove({});
	Main.insert({
		name: 'topHeader',
		message: 'ENSO-Neutral Condition',
		href: 'http://www.pagasa.dost.gov.ph/index.php/climate/climate-advisories',
		searchText: 'How can we help you?',
		enabled: true
	});

	Main.insert({
		name: 'mainHeader',
		img: '/header_green.png',
    links: [
      {
      	name: 'SARAi',
      	href: 'http://sarai.ph/about-us',
      	links: [],
      	id: 'about-us-link',
      	withsublinks: false,
      	rank: 1
      },
      {
      	name: 'Crops',
      	href: '/',
      	links: [
      		{
      			name: 'Rice',
      			href: 'http://sarai.ph/icm-rice',
      			rank: 1
      		},
      		{
      			name: 'Corn',
      			href: 'http://sarai.ph/icm-corn',
      			rank: 2
      		},
      		{
      			name: 'Banana',
      			href: 'http://sarai.ph/icm-banana',
      			rank: 3
      		},
      		{
      			name: 'Coconut',
      			href: 'http://sarai.ph/icm-coconut',
      			rank: 4
      		},
      		{
      			name: 'Coffee',
      			href: 'http://sarai.ph/icm-coffee',
      			rank: 5
      		},
      		{
      			name: 'Cacao',
      			href: 'http://sarai.ph/icm-cacao',
      			rank: 6
      		}
      	],
      	id: 'crops',
      	withsublinks: true,
      	rank: 2
      },
      {
      	name: 'Maps',
      	href: '',
      	links: [
      		{
      			name: 'Suitability Maps',
      			href: 'http://maps.sarai.ph/suitability-maps',
      			rank: 1
      		},
      		{
      			name: 'Crop Production Area',
      			href: 'http://maps.sarai.ph/crop-production-area',
      			rank: 2
      		},
      		{
      			name: 'Normalized Difference Vegetation Index (NDVI)',
      			href: 'http://maps.sarai.ph/ndvi',
      			rank: 3
      		},
      		{
      			name: 'Rainfall Map',
      			href: 'http://maps.sarai.ph/rainfall-maps',
      			rank: 4
      		}
      	],
      	id: 'explore-link',
      	withsublinks: true,
      	rank: 3
      },
      {
      	name: 'Services',
      	href: '',
      	links: [
      		{
      			name: 'Alerts and Advisories',
      			href: 'http://sarai.ph/advisories',
      			rank: 1
      		},
      		{
      			name: 'Monitoring',
      			href: 'http://sarai.ph/weather-monitoring',
      			rank: 2
      		},
      		{
      			name: 'Planting Guide',
      			href: 'http://sarai.ph/rainfall-distribution',
      			rank: 3
      		},
      		{
      			name: 'SPIDTech',
      			href: 'http://pests.sarai.ph/',
      			rank: 4
      		},
      		{
      			name: 'Open Data',
      			href: 'http://opendata.sarai.ph/',
      			rank: 5
      		},
      		{
      			name: 'SARAi Eskwela',
      			href: 'http://portal.sarai.ph/index.php?option=com_content&view=article&id=38&Itemid=319',
      			rank: 6
      		}
      	],
      	id: 'get-involved-link',
      	withsublinks: true,
      	rank: 4
      },
      {
      	name: 'Contact Us',
      	href: '',
      	links: [
      		{
      			name: 'Subscribe',
      			href: 'https://docs.google.com/a/up.edu.ph/forms/d/e/1FAIpQLSdRWCollMXmPGCoKhWZToL249RCc1FAh9KssEuCDH1jDj8ERw/viewform?c=0&w=1',
      			rank: 1
      		}
      	],
      	id: 'contact-us-link',
      	withsublinks: true,
      	rank: 5
      }
    ],
    buttonText: 'BETA',
    buttonEnabled: true,
    enabled: true
	});

	Main.insert({
		name: 'banner',
		slides: [
			{
				image: '/homepage-slider/Project-SARAI.png',
				textPosition: 'left',
				title: 'PROJECT SARAI',
			    subTitle: 'Smarter Farmers, Smarter Agriculture.',
			    text: 'Search through the different SARAI technologies and systems to what, when, and where to plant',
			    buttonText: 'MORE',
			    buttonLink: ''
			},
			{
				image : "/homepage-slider/Knowledge-Portal.png",
	            textPosition : "left",
	            title : "SARAi KNOWLEDGE PORTAL",
	            subTitle : "One-stop-shop for crop monitoring and forecasting",
	            text : "Get comprehensive national, regional, and municipal data to know what, where, and, when to plant.",
	            buttonText : "EXPLORE",
	            buttonLink : "#main-preview",
	            rank : ""
	        },
			{
				image: '/homepage-slider/Real-Time-Monitoring.jpg',
				textPosition: 'right',
				title: 'REAL-TIME WEATHER MONITORING',
				subTitle: 'Guide your farming practices with weather data',
				text: 'Get information on previous weather patterns and current weather conditions through historical and current weather data.',
				buttonText: 'EXPLORE',
				buttonLink: ''
			},
			{
				image: '/homepage-slider/Crop-Monitoring-and-Forecasting.jpg',
				textPosition: 'right',
				title: 'CROP MONITORING AND FORECASTING',
				subTitle: 'Plan your planting practices wisely for optimum yield',
				text: 'View the 30-day cumulative rainfall data and 10-day weather forecast in your area to know the right time to plant.',
				buttonText: 'EXPLORE',
				buttonLink: ''
			},
			{
				image: '/homepage-slider/Smarter-Crop-Management.jpg',
				textPosition: 'right',
				title: 'SMARTER CROP MANAGEMENT',
				subTitle: 'Helping farmers to produce more with less',
				text: 'Know the right amount of nutrient, the adequate management practices for pest and diseases, and the right amount of water for maximum yield.',
				buttonText: 'KNOW MORE',
				buttonLink: ''
			},
			{
				image: '/homepage-slider/MOBILE-APP.png',
				textPosition: 'right',
				title: 'SARAI MOBILE APP',
				subTitle: 'Agriculture alerts on-the-go',
				text: 'A mobile app where users can receive alerts via push notifications to mobile devices.',
				buttonText: 'CLICK HERE TO DOWNLOAD',
				buttonLink: 'https://build.phonegap.com/apps/1850892/install/HNYZJ_mtp4V4uSLkgvCK'
			},
			{
				image: '/homepage-slider/eskwela.png',
				textPosition: 'right',
				title: 'SARAI ESKWELA',
				subTitle: 'Knowledge sharing for smarter agriculture',
				text: 'Explore the training modules and information, education, and communication materials to guide you in your farming practice.',
				buttonText: 'CLICK HERE',
				buttonLink: ''
			}
		],
		enabled: true
	});

	Main.insert({
		name: 'footer',
		text: 'Project SARAI aims to develop a national crop forecasting and monitoring system for first six priority crops: rice, corn, banana, coconut, coffee, cacao. This project is funded by DOST-PCAARRD.',
		img: 'http://sarai.ph/wp-content/uploads/2016/03/DOST_PCAARRD_UPLB.png',
		share: [
	        {
	            class_name: 'facebook',
	            href: 'https://www.facebook.com/projectsarai/',
	            img: '/footer-icons/fb.png'
	        },
	        {
	            class_name: 'twitter',
	            href: 'https://twitter.com/ProjectSARAI',
	            img: '/footer-icons/twitter.png'
	        },
	        {
	        	class_name: 'youtube',
	        	href: 'https://www.youtube.com/channel/UCJtzNfVmoqFZGCF326VaTZw',
	        	img: '/footer-icons/youtube.png'
	        }
        ],
        enabled: true
	});

	Main.insert({
		name: 'contact-us',
		number: '+63 (049) 536 3080, 2836',
		mailname: 'sarai@uplb.edu.ph',
		mailhref: 'mailto:http://sarai@uplb.edu.ph',
		location: 'SESAM UPLB, College, Laguna Philippines 4031',
		businesshours: 'Mon – Fri : 8:00am to 5:00pm Saturday and Sunday Closed.',
		enabled: true
	});

	Main.insert({
		name: 'crop-list',
		crops: [
	      {
	        href: '/rice',
	        text: 'RICE',
	        img: '/crops-flat-icons/rice.png'
	      },
	      {
	        href: '/corn',
	        text: 'CORN',
	        img: '/crops-flat-icons/corn.png'
	      },
	      {
	        href: '/banana',
	        text: 'BANANA',
	        img: '/crops-flat-icons/banana.png'
	      },
	      {
	        href: '/coconut',
	        text: 'COCONUT',
	        img: '/crops-flat-icons/coconut.png'
	      },
	      {
	        href: '/coffee',
	        text: 'COFFEE',
	        img: '/crops-flat-icons/coffee.png'
	      },
	      {
	        href: '/cacao',
	        text: 'CACAO',
	        img: '/crops-flat-icons/cacao.png'
	      }
	    ],
	    enabled: true
	});

	Main.insert({
		name: 'services',
	    title: 'Our Projects',
	    description: 'Anchored on precision agriculture, Project SARAI uses advances in technology to determine what, when, and where to plant.',
	    subtext: '',
	    enabled: true,
	    buttonEnabled: true
	});

	Main.insert({
		name: 'reports',
		text: 'Get our reports on events related to rice, corn, banana, coconut, coffee, and cacao.',
		reports: [
	      {
	        href: 'http://sarai.ph/wp-content/uploads/2016/03/Assessment_basis_Project-SARAI.pdf',
	        label: 'View Report',
	        img: '/samplepics/Lando_cover.png'
	      },
	      {
	        href: 'http://sarai.ph/wp-content/uploads/2016/03/Pest-Risk-Map-Armyworm.png',
	        label: 'View Report',
	        img: '/samplepics/Pest-Risk-Map-Armyworm-copy_2.png'
	      }
	    ],
	    enabled: true
	});

	Main.insert({
		name: 'blogs',
		title: 'From the Blog',
		text: 'Read articles & express your opinions on environment',
    	subtext: '',
    	enabled: true
	});

	Main.insert({
		name: 'testimonials',
		title: 'What People Say…',
	    mainTestimonial: 'SARAI aims to harness state-of-the-art science and technology to empower Filipino farmers.',
	    subtext: '',
	    author: 'Dr. Ma. Victoria O. Espaldon',
	    img: '/samplepics/MVOE-2.jpg',
	    testimonials: [
	    	{
	    		title: '',
	    		author:'Dr, Efren Galo',
	    		authorInfo: 'Professor, College of Agriculture, University of Eastern Philippines',
	    		testimony: 'Attending this activity (SARAI Training on pest and disease management for rice) is very important for increasing our knowledge especially sa new technologies and of course to increase our production in our province.'
	    	},
	    	{
	    		title: '',
	    		author:'Mr. Reynaldo Salamat',
	    		authorInfo: 'Chief Regional Crop Protection Center, Region VIII-DA',
	    		testimony: 'Malaki ang importansya nitong activity (SARAI Training on pest and disease management for rice) kasi we are now challenged by climate change. Alam natin na we have to be more resilient in terms of technology. We have to be more efficient in recycling our resources.'
	    	},
	    	{
		        title: '',
		        author: 'Mr. Ricky S. Dador',
		        authorInfo: 'Weather Observer, Dumangas Agromet Station',
		        testimony: 'Yung SARAI makakatulong sa Dumangas para mas makilala o mas maging successful itong aming climate feild school for Dumangas'
	    	},
	    		    	{
	    		title: '',
	    		author:'Mr. Eugenio D. Decastillo Jr.',
	    		authorInfo: 'Dumangas Municipal Agriculturist',
	    		testimony: 'With the help of UPLB SARAI, we hope to have a good partnership for the development of our climate field school and also for us to have a more improved extension approaches to our farmers and to also develop a very good module on the climate-related problems of our farmers and of course to improve productivity towards food security.'
	    	}
	    ],
	    enabled: true,
	    imgenabled: true
	});

	Main.insert({
		name : "partner-institutions",
	    img : "/partner-institutions.jpg",
	    enabled : true
	});

	Main.insert({
		name: 'weather-advisory',
	    title: 'Weather Advisory',
	    description: '',
	    subtext: 'FORECAST: Partly cloudy to cloudy skies with isolated rainshowers or thunderstorms will be experienced over Metro Manila and the rest of the country. Moderate to strong winds blowing from the East to Southeast will prevail over Northern Luzon and coming from the East over Eastern Visayas and the rest of luzon. The coastal waters along these areas will be moderate to rough. Elsewhere, winds will be light to moderate coming from the East with slight to moderate seas.',
	    enabled: true,
	});
// }