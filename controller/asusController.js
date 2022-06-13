const url = require('url');


exports.asus = (req, res) => {
    res.render('../views/products/asus.ejs', {
            title: 'Asus',
            layout: '../views/products/asus.ejs'
        }
    )


}