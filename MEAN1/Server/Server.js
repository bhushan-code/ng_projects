express = require("express");
eobj = express();

const {MongoClient} = require("mongodb");
const mobj = new MongoClient("mongodb://localhost:27017/");

///////////////////////////////////////////////////////////////////////////////

eobj.listen(5100, function(){console.log("Server Started Successfully");});

function GetDetails(req,res)
{
    let data;
    data = GetData();
    res.send(data);
}
eobj.get('/',GetDetails);

///////////////////////////////////////////////////////////////////////////////

async function GetConnection()
{
    let result = await mobj.connect();
    let db = result.db("VAMP_DATA");
    return db.collection("mobile");
}


async function GetData()
{
    let data = await GetConnection();
    data = await this.data.find().toArray();
    return data;    
}

///////////////////////////////////////////////////////////////////////////////

function main()
{
    GetConnection();            
}

///////////////////////////////////////////////////////////////////////////////

main()

///////////////////////////////////////////////////////////////////////////////
