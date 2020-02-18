var loki = require('lokijs');

//creating db conection
var db = new loki('parctice.db');

//collection creation 
var users = db.addCollection('users');  
    users.insert([
	    {name: 'user1', age: 50, dni: 11122},
	    {name: 'user2', age: 50, dni: 22233},
	    {name: 'user3', age: 50, dni: 33344}
    ]);

var results = users.find({age: 50});

console.log(results);
