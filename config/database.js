module.exports = {
  // configure the code below with your username, password and mlab database information
  //database: 'mongodb://johannes:8ung8ung@ds147033.mlab.com:47033/heroku_bf6ftm4f',   //prod


  //atabase: process.env.MONGODB_URI, //TODO: Make this work --> reinstall mLab on Heroku
  database: 'mongodb://localhost:27017/portfolio',    //dev
  secret: 'yoursecret'
}
