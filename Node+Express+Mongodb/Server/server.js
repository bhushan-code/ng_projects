const {MongoClient} = require("mongodb");           //imported MongoDB
const URL = "mongodb://localhost:27017/";           //URL from MongoDB 
const client = new MongoClient(URL);                


async function GetConnection()                      //Connection establisment
{
    let result = await client.connect();
    let db = result.db("Marvellous");
    return db.collection("Batches");
}




async function ReadData()
{
    let data = await GetConnection();                               //connection
    data = await data.find().toArray();                             //main syntax
    console.log("Data retrived from the database : ");              
    console.log(data);                                              //display data
}

async function InsertData()
{
    let data = await GetConnection();                                                                       //connection
    let result = await data.insertOne({"Name" : "Python", "Fees" : "22000", "Duration" : "2.5 Months"});    //main syntax
    if(result.acknowledged)
    {
        console.log("Data Inserted Successfully");
    }
}

async function DeleteData()
{
    let data = await GetConnection();                               //connection
    let result = await data.deleteOne({"Name" : "Python"});         //main syntax
    if(result.acknowledged)
    {
        console.log("Data Deleted Successfully");
    }
}

async function UpdateData()
{
    let data = await GetConnection();                                                   //connection
    let result = await data.updateOne({"Name" : "LB"}, {$set : {"Fees" : "25000"}});    //main syntax
    if(result.acknowledged)
    {
        console.log("Data Updated Successfully")
    }
}

function main()
{
    let ret;

    ret = GetConnection();
    console.log(ret);
    console.log("Database Connection is Successful");
    InsertData();
    // DeleteData();
    // UpdateData();
    ReadData();
}

main()