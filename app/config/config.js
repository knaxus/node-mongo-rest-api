'use strict';
let env = process.env.NODE_ENV || 'development';

if(env === 'development'){
  process.env.PORT = 3000;
  process.env.MONGODB_URI = 'mongodb://127.0.0.1:27017/LinkBin';
}

else if(env === 'test'){
  process.env.PORT = 3000;
  process.env.MONGODB_URI = 'mongodb://127.0.0.1:27017/LinkBin';
}

console.log('****Working Environment is : ', env);
console.log('****MONGO Environment is : ', process.env.MONGODB_URI);
