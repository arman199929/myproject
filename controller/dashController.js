const url = require('url');
const backPath = '';


exports.index = (req, res) => {
    const session = req.session;

    res.render(`../views/dashbord/index.ejs`,{
        title:"",
        layout:'../views/dashbord/index.ejs'
    });
}