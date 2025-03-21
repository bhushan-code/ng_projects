const { response } = require("express");

express = require("express");               //load express

eobj = express();                           //create object

port = 5100;                                //should more than 2500
    
function MarvellousWelcomeMessage()         //user defined method
{
    console.log("Marvellous Servere is ON at port 5100...");
}

eobj.listen(port,MarvellousWelcomeMessage);     //automatically called when server start, parameters(port no, fuction)



function MarvellousAcceptRequest(req,res)       //user defined method
{
    res.send("Marvellous Server Connection is successful...");
} 

eobj.get('/',MarvellousAcceptRequest);          //


function MarvellousBatches(req,res)
{
    res.send("We have PPA, LB, Angular.");
}
eobj.get('/batches',MarvellousBatches);          //route


function MarvellousLocation(req,res)
{
    res.send("Location of Marvellous is Kothrud pune");
}
eobj.get('/location',MarvellousLocation);       //route


function MarvellousBatchDetails(req,res)
{
    res.json({"Batch" : "PPA", "Fees" : 22000, "Duration" : "3 Month"});        //json
}
eobj.get('/getbatchdetails',MarvellousBatchDetails); //route json