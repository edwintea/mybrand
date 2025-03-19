const express = require('express');
const bodyParser = require('body-parser');

// DB CONNECTION
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
/*
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});
*/
// END DB CONNECTION

// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded())

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "KMS for MyBrand"});
});
app.post('/auth',(req,res)=>{
    console.log(">>>>> Requested : "+JSON.stringify(req.body))
    res.json({"result":true,"response_code":200,"message":"Success.","data":req.body})
    console.log(">>>>> Response : "+JSON.stringify({"result":true,"response_code":200,"message":"Success.","data":req.body}))
})

app.post('/kms-encrypt',(req,res)=>{
    console.log(">>>>> Requested : "+JSON.stringify(req.body))
    
    res.json({"result":true,"response_code":200,"message":"Success.","data":{
                    "KeyId":"1234567","CiphertextBlob":"R0lGODlhDAAMAKIFAF5LAP/zxAAAANyuAP/gaP///wAAAAAAACH5BAEAAAUALAAAAAAMAAwAAAMlWLPcGjDKFYi9lxKBOaGcF35DhWHamZUW0K4mAbiwWtuf0uxFAgA7"
                }})
    console.log(
            ">>>>> Response : "+JSON.stringify(
            {"result":true,"response_code":200,"message":"Success.","data":{
                    "KeyId":"1234567","CiphertextBlob":"R0lGODlhDAAMAKIFAF5LAP/zxAAAANyuAP/gaP///wAAAAAAACH5BAEAAAUALAAAAAAMAAwAAAMlWLPcGjDKFYi9lxKBOaGcF35DhWHamZUW0K4mAbiwWtuf0uxFAgA7"
                }
            })
    )
})

app.post('/kms-decrypt',(req,res)=>{
    console.log(">>>>> Requested : "+JSON.stringify(req.body))
    
    res.json({"result":true,"response_code":200,"message":"Success.","data":{
                    "KeyId":"1234567","Plaintext":"R0lGODlhDAAMAKIFAF5LAP/zxAAAANyuAP/gaP///wAAAAAAACH5BAEAAAUALAAAAAAMAAwAAAMlWLPcGjDKFYi9lxKBOaGcF35DhWHamZUW0K4mAbiwWtuf0uxFAgA7"
                }})
    console.log(
            ">>>>> Response : "+JSON.stringify(
            {"result":true,"response_code":200,"message":"Success.","data":{
                    "KeyId":"1234567","Plaintext":"R0lGODlhDAAMAKIFAF5LAP/zxAAAANyuAP/gaP///wAAAAAAACH5BAEAAAUALAAAAAAMAAwAAAMlWLPcGjDKFYi9lxKBOaGcF35DhWHamZUW0K4mAbiwWtuf0uxFAgA7"
                }
            })
    )
})

// listen for requests
app.listen(3000, () => {
    console.log("Server  port 3000");
});
