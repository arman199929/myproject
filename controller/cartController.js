const url = require('url');


exports.cart = (req, res) => {
    res.render('../views/dashbord/cart.ejs', {
            title: 'Selected products',
            layout: '../views/dashbord/cart.ejs'
        }
    )


}