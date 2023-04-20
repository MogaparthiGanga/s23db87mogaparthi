var express = require('express');
var router = express.Router();

const gun_controlers= require('../controllers/gun');

/* GET home page. */
router.get('/gun/:id',gun_controlers.gun_view_all_Page );
router.get('/detail', gun_controlers.gun_view_one_Page);
/* GET create gun page */
router.get('/create', gun_controlers.gun_create_Page);
/* GET create update page */
router.get('/update', gun_controlers.gun_update_Page);

/* GET delete costume page */
router.get('/delete', gun_controlers.gun_delete_Page);

module.exports = router;
