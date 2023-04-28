var express = require('express');
var router = express.Router();

const gun_controlers= require('../controllers/gun');
// A little function to check if we have an authorized user and continue on
// redirect to login.
const secured = (req, res, next) => {
 if (req.user){
 return next();
 }

 req.session.returnTo = req.originalUrl;
 res.direct("/login");
}

/* GET home page. */
router.get('/',gun_controlers.gun_view_all_Page );
router.get('/detail', gun_controlers.gun_view_one_Page);
/* GET create gun page */
router.get('/create',secured, gun_controlers.gun_create_Page);
/* GET create update page */
router.get('/update', secured,gun_controlers.gun_update_Page);

/* GET delete costume page */
router.get('/delete',secured, gun_controlers.gun_delete_Page);

module.exports = router;
