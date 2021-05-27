const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url = 'mongodb://localhost:27017/';
const dbname = 'conFusion';

//callback function -nested 
MongoClient.connect(url, (err, client) => 
{
    assert.equal(err,null);//true or false
    console.log('Connected correctly to server');
    const db = client.db(dbname);
    const collection = db.collection("dishes");//fetch the particular collection from the db
    collection.insertOne({"name": "Uthappizza", "description": "test"},
    (err, result) => 
    {
        assert.equal(err,null);//make sure the error is null or not
        console.log("After Insert:\n");
        console.log(result.ops);//ops property means particular item is inserted
        collection.find({}).toArray((err, docs) => 
        {
        assert.equal(err,null); 
        console.log("Found:\n");
        console.log(docs);
        db.dropCollection("dishes", (err, result) => 
           {
            assert.equal(err,null);
            client.close();
           });
        });
    });

});