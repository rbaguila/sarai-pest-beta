// module.exports = {
//   servers: {
//     one: {
//       // TODO: set host address, username, and authentication method
//       host: '1.2.3.4',
//       username: 'root',
//       // pem: './path/to/pem'
//       // password: 'server-password'
//       // or neither for authenticate from ssh-agent
//     }
//   },

//   meteor: {
//     // TODO: change app name and path
//     name: 'app',
//     path: '../app',

//     servers: {
//       one: {},
//     },

//     buildOptions: {
//       serverOnly: true,
//     },

//     env: {
//       // TODO: Change to your app's url
//       // If you are using ssl, it needs to start with https://
//       ROOT_URL: 'http://app.com',
//       MONGO_URL: 'mongodb://localhost/meteor',
//     },

//     docker: {
//       // change to 'kadirahq/meteord' if your app is not using Meteor 1.4
//       image: 'abernix/meteord:base',
//       // imagePort: 80, // (default: 80, some images EXPOSE different ports)
//     },

//     // This is the maximum time in seconds it will wait
//     // for your app to start
//     // Add 30 seconds if the server has 512mb of ram
//     // And 30 more if you have binary npm dependencies.
//     deployCheckWaitTime: 60,

//     // Show progress bar while uploading bundle to server
//     // You might need to disable it on CI servers
//     enableUploadProgressBar: true
//   },

//   mongo: {
//     port: 27017,
//     version: '3.4.1',
//     servers: {
//       one: {}
//     }
//   }
// };


module.exports = {
  servers: {
    one: {
      host: '159.203.253.36',
      username: 'root',
      // pem:
      password: 'Sa4@!tR35'
      // or leave blank for authenticate from ssh-agent
    }
  },

  meteor: {
    name: 'spid',
    path: '~/Desktop/Desktop/meteor-projects/sarai',
    servers: {
      one: {}
    },
    volumes: {
      "/sarai/uploads": "/opt/uploads"
    },
    buildOptions: {
      serverOnly: false,
    },
    env: {
      PORT: 80,
      ROOT_URL: 'http://pests.sarai.ph',
      // MONGO_URL: 'mongodb://localhost:27017/sarai'
    },

    //dockerImage: 'kadirahq/meteord'
    deployCheckWaitTime: 120,
    enableUploadProgressBar: true
  },

  mongo: {
    oplog: true,
    port: 27017,
    servers: {
      one: {},
    },
  },
};

