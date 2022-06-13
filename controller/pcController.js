const url = require('url');


exports.pc = (req, res) => {
    res.render('../views/products/pc.ejs', {
            title: 'Windows',
            layout: '../views/products/pc.ejs'
        }
    )


}