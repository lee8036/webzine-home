var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

    //main.ejs 뷰파일을 호출하고 데이터를 전달
  res.render('main', { title: 'EJS 메인페이지' });
});

module.exports = router;
