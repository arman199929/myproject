const express = require('express');
const dashController = require('../controller/dashController');
const appleController = require('../controller/appleController');
const lenovoController = require('../controller/lenovoController');
const asusController = require('../controller/asusController');
const dellController = require('../controller/dellController');
const samsungController = require('../controller/samsungController');
const pcController = require('../controller/pcController');
const cartController = require('../controller/cartController');


const homeRouter = express.Router();

homeRouter.get('/',dashController.index);

homeRouter.get('/apple',appleController.apple);

homeRouter.get('/lenovo',lenovoController.lenovo);

homeRouter.get('/asus',asusController.asus);

homeRouter.get('/dell',dellController.dell);

homeRouter.get('/samsung',samsungController.samsung);

homeRouter.get('/pc',pcController.pc);

homeRouter.get('/cart',cartController.cart);



module.exports = homeRouter;
