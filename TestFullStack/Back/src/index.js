const express =require('express');
const morgan= require('morgan');
const cors=require('cors');

//initializations
const app= express();
app.use(cors());

//settings
app.set('port', process.env.PORT || 4000);

//Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Global variables
app.use( (req, res, next) =>{

    next();
} );

//Routes
app.use(require('./routes'));
app.use(require('./routes/authentication'));
app.use(require('./routes/list'));
//app.use('/auth',require('./routes/authentication'));
//Public


//Starting the server
app.listen(app.get('port'), () => {
    console.log("Server on port: "+app.get('port'));
});