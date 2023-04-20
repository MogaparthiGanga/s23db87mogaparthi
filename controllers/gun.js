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
exports.gun_detail = async function (req, res) {

    console.log("detail" + req.params.id)
    try {
        result = await gun.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
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
// Handle Costume delete on DELETE.
exports.gun_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await gun.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
   };

// // Handle Costume update form on PUT.
// exports.gun_update_put = function (req, res) {
//     res.send('NOT IMPLEMENTED: gun update PUT' + req.params.id);
// };

// VIEWS
// Handle a show all view
exports.gun_view_all_Page = async function (req, res) {
    try {
        theGuns = await gun.find();
        res.render('gun', { title: 'Gun Search Results', results: theGuns });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle Costume update form on PUT.
exports.gun_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await gun.findById(req.params.id)
        // Do updates of properties
        if (req.body.Barrel_metal)
            toUpdate.Barrel_metal = req.body.Barrel_metal;
        if (req.body.Gun_Model) toUpdate.Gun_Model = req.body.Gun_Model;
        if (req.body.Gun_Serial_Number) toUpdate.Gun_Serial_Number = req.body.Gun_Serial_Number;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
    }
};


// Handle a show one view with id specified by query
exports.gun_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await gun.findById( req.query.id)
    res.render('gundetail',
   { title: 'Gun Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };


   // Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.gun_create_Page = async function(req, res) {
    console.log("create view")
    try{
    res.render('guncreate', { title: 'Gun Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

   // Handle building the view for updating a gun.
// query provides the id
exports.gun_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await gun.findById(req.query.id)
    res.render('gunupdate', { title: 'Gun Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

   // Handle a delete one view with id from query
exports.gun_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await gun.findById(req.query.id)
    res.render('gundelete', { title: 'Gun Delete', toShow:
   result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };
