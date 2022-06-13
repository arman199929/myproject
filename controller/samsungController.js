const url = require('url');


exports.samsung = (req, res) => {
    res.render('../views/products/samsung.ejs', {
            title: 'Samsung',
            layout: '../views/products/samsung.ejs'
        }
    )


}