express = require("express");
eobj = express();

const {MongoClient} = require("mongodb");
const mobj = new MongoClient("mongodb://localhost:27017/");

///////////////////////////////////////////////////////////////////////////////

eobj.listen(5100, function(){console.log("Server Started Successfully");});

function GetDetails(req,res)
{
    res.send(this.data);
}
eobj.get('/',GetDetails);

///////////////////////////////////////////////////////////////////////////////

async function GetConnection()
{
    let result = await mobj.connect();
    let db = result.db("VAMP_DATA");
    return db.collection("mobile");
}

let data;

async function GetData()
{
    this.data = await GetConnection();
    this.data = await this.data.find().toArray();
    // console.log(this.data);
    
}

///////////////////////////////////////////////////////////////////////////////

function main()
{
    GetConnection();
    GetData();             
}

///////////////////////////////////////////////////////////////////////////////

main()

///////////////////////////////////////////////////////////////////////////////
