const url = require('url');


exports.lenovo = (req, res) => {
    res.render('../views/products/lenovo.ejs', {
            title: 'Lenovo',
            layout: '../views/products/lenovo.ejs'
        }
    )


}