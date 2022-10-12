
const { MongoClient } =require('mongodb');
async function main()
{
    const uri = "mongodb+srv://demo:node1234@cluster0.6dvowre.mongodb.net/?retryWrites=true&w=majority";
    const client =new MongoClient(uri);
    try{
        await  client.connect(); 
await createListing(client,{
    name:"Hello",
    summary:"gugj",
    batrooms:1
})


    } catch (e) {
        console.error(e);
    }finally{
        await client.close();
    }
}
main().catch(console.error);
async function createListing(client , newListing)
{
    const result = await client.db("sample_geospatial").collection("listingAndReviews").insertOne(newListing);
    console.log(`new listing created with following id:${result.insertedID}`);

}
async function listDatabases(client)
{
    const databasesList=await client.db().admin().listDatabases();
    console.log("Databases:");
    databasesList.Databases.forEach(db => {
        console.log(`- ${db.name}`);  
    })
}