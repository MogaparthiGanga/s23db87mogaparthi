var gun = require('../models/gun');
// List of all guns
exports.gun_list = async function (req, res) {
    //  res.send('NOT IMPLEMENTED: Gun list');
    try {
        theGun = await gun.find();
        res.send(theGun);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// for a specific gun.
exports.gun_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: gun detail: ' + req.params.id);
};

// Handle Costume create on POST.
exports.gun_create_post = async function (req, res) {
    
    console.log(req.body)
    let document = new gun();
    document.Barrel_metal = req.body.Barrel_metal;
    document.Gun_Model = req.body.Gun_Model;
    document.Gun_Serial_Number = req.body.Gun_Serial_Number;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle Costume delete form on DELETE.
exports.gun_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: gun delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.gun_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: gun update PUT' + req.params.id);
};

// VIEWS
// Handle a show all view
exports.gun_view_all_Page = async function(req, res) {
    try{
    theGuns = await gun.find();
    res.render('gun', { title: 'Gun Search Results', results: theGuns });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };