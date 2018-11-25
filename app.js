const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');
const multer = require('multer');
const compression = require('compression');

// Connect To Database (NEW) But not working!!!!!!!!!! (because of secret in db.js!!!!!)
//const db = require('./config/database');
// Map global promise - get rid of warning
//mongoose.Promise = global.Promise;
// Connect to mongoose
//mongoose.connect(db.mongoURI, {
    //useMongoClient: true
//})
//.then(() => console.log('MongoDB Connected...'))
//.catch(err => console.log(err));

//Setting up storage engine

// Connect To Database (OLD CODE)
mongoose.connect(config.database, { useMongoClient: true});
// On Connection
mongoose.connection.on('connected', () => {
  console.log('Connected to Database '+config.database);
});
// On Error
mongoose.connection.on('error', (err) => {
  console.log('Database error '+err);
});

const app = express();

const users = require('./routes/users');
const articles = require('./routes/articles');

// Port Number
const port = process.env.PORT || 8080;

// CORS Middleware
app.use(cors());

//Compressing for speed loadimg
app.use(compression());


// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));

// Body Parser Middleware
app.use(bodyParser.json());

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users', users);
app.use('/articles',articles);

// Index Route
app.get('/', (req, res) => {
  res.send('invaild endpoint');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

//File Upload

const storage = multer.diskStorage({
  destination: './public/uploads/',
  filename: function(req, file, cb){
    cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage,
  limits:{fileSize: 100000000},
  fileFilter: function(req, file, cb){
    checkFileType(file, cb);
  }
}).single('imageData');

// Check File Type
function checkFileType(file, cb){
  // Allowed ext
  const filetypes = /jpeg|jpg|png|gif/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);

  if(mimetype && extname){
    return cb(null,true);
  } else {
    cb('Error: Images Only!');
  }
}

app.post('/uploadFile', (req, res) => {
  console.log("Endpoint reached");
  
  upload(req, res, (err) => {
    if(err){
      res.json({success: false, msg: "An Error occured", error: err})
    } else {
      if(req.file == undefined){
        res.json({success: false, msg: "An Error occured - req.file is undefined"})
      } else {
        //now post the images path and name to mongodb

        res.json({success: true, msg: "Upload successful", file: req.file})        
      }
    }
  });
});

// Start Server
app.listen(port, () => {
  console.log('Server started on port '+port);
});
