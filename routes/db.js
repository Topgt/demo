var MongoClient = require('mongodb').MongoClient;
var BD_CONN_STR = 'mongodb://localhost:27017/test';
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	MongoClient.connect(BD_CONN_STR, function(err, db) {
		// res.send('链接成功');	
		var collection = db.collection('user');
		collection.find({}).toArray(function(err, result) {
				if(err){
					res.send(err);
					return;
				}
				res.send(result);
				db.close();
		})
	})
});

module.exports = router;