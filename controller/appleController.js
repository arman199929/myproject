const url = require('url');


exports.apple = (req, res) => {
    res.render('../views/products/apple.ejs', {
            title: 'Apple',
            layout: '../views/products/apple.ejs'
        }
    )


}