var MongoClient = require('mongodb').MongoClient;
var BD_CONN_STR = 'mongodb://localhost:27017/test';
var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
	var name = req.body.name;
	var pwd = req.body.pwd;
	MongoClient.connect(BD_CONN_STR, function(err, db) {
		var collection = db.collection('user');
		collection.find({
			"name": name,
			"pwd": pwd
		}).toArray(function(err, result) {
				var msg = {};
				if(err){
					msg.code = 500;
					msg.message = "server error"
					res.send(err);
					return;
				}
				if(0 === result.length){
					msg.code = 444;
					msg.message = "userName or password error";
				}else{
					msg.code = 200;
					msg.message = "succeed";
					req.session.userName = result[0].name;
				}
				res.send(msg);
				db.close();
		})
	})
});

module.exports = router;