const mongo = require ('mongodb');
const mongoClient = mongo.MongoClient;
const url = "mongodb://127.0.0.1:27018";
const dbname = "116839";
mongoClient.connect (url, {useUnifiedTopology:true}, (error,client) => {
if (error) {console.log("error", err)}

const db = client.db (dbname);
//dodanie kolekcji i jeddnego dokumentu
db.collection("stuednets").insertOne({
    name: "Tomasz Tekieli",
    age: 35
    }, (error, result) => {
    if (error) {console.log("error when inserting", error) }
      console.log (result.ops)
    })

 //db.collection("students"). instertMany([
     // {},
     // {}],
     // () => {
 // }
 //}
 //odczyt z bazy danych 
 db.collection ("students").find ({
 }).toArray((error, result) =>{
     console.log(result)
 });
 //update 
 //db.collection("students").updateOne(
  //   {age:35},
  //   {$set:age 32}}
//)
//db.collection ("students").find ({}).toArray ((error,result)=> {
//console.log(result)
//});




 console.log("połączenie udane")
})