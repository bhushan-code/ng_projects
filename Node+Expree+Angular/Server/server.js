express = require("express");

eobj = express();

port = 5100;

function MarvellousWelsome()                                    //callback function
{
    console.log("Marvellous Server is ON..");
}
eobj.listen(port,MarvellousWelsome);                            //automatically when start (cmd)

//////////////////////////////////////////////////////////


function MarvellousGet(req,res)                                     
{
    res.send("Marvellous server is running");
}   
eobj.get('/',MarvellousGet);                                            //default route(browser)

//////////////////////////////////////////////////////////

function MarvellousGetBatches(req,res)
{
    res.json({"Batch" : "PPA", "Fees" : 21000, "Duration" : "3 Month"});
}
eobj.get('/getbatches',MarvellousGetBatches);                               //new route(browser)


////////////////////////////////////////////
//Handling CORS (can be install cors (search online))

//cors if server check data to be given to client or not 

eobj.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin",
    "http://localhost:4200");
  
    res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-with, Content-Type, Accept");
  
    next();
  });