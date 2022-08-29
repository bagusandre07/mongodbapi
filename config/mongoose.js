const mongo = require('mongoose');
const baseURL = 'mongodb://ucju0kvcp7qovvdlgoia:okhD0KQnVFi9np5oOLVi@n1-c2-mongodb-clevercloud-customers.services.clever-cloud.com:27017,n2-c2-mongodb-clevercloud-customers.services.clever-cloud.com:27017/bz2uj3h3b6nnjku?replicaSet=rs0';
mongo.connect(process.env.MONGODB_URI || baseURL,{useUnifiedTopology: true,  useCreateIndex: true, useNewUrlParser: true}).then((db)=>{
    console.log('Connected MONGODB');
}).catch((error)=> console.log('Not Connected'));