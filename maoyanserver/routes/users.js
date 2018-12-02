var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/login', function(req, res, next) {
  var username = req.query.username;
  var password = req.query.password;

  if( username === 'xiaoming' && password === '123' ){
	
	var token = parseInt(Math.random() * 99999);

	req.session.token = token;
	req.session.username = username;

  	res.send({ code : 0 , token , username });
  }
  else{
  	res.send({ code : -1 });
  }
});

router.get('/isLogin' , function(req,res,next){
	var token = req.query.token;
	if( token && token == req.session.token ){
		res.send({ code : 0 , username : req.session.username });
	}
	else{
		res.send({ code : -1 });
	}
});

router.get('/logout',function(req,res,next){
	req.session.destroy();
	res.send({ code : 0 });
});


module.exports = router;
