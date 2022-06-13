const url = require('url');


exports.dell = (req, res) => {
    res.render('../views/products/dell.ejs', {
            title: 'Dell',
            layout: '../views/products/dell.ejs'
        }
    )


}