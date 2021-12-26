odoo.define('test_pos_custom.pos_limit', function (require) {
    "use strict";

    var DB = require('point_of_sale.DB');

    DB.include({

        limit:2,

    });



});