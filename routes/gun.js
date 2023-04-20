var express = require('express');
var router = express.Router();

const gun_controlers= require('../controllers/gun');

/* GET home page. */
router.get('/gun/:id',gun_controlers.gun_view_all_Page );
router.get('/detail', gun_controlers.gun_view_one_Page);
/* GET create gun page */
router.get('/create', gun_controlers.gun_create_Page);

module.exports = router;
