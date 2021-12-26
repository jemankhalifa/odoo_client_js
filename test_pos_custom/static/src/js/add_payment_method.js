odoo.define('test_pos_custom.paymentMethodAdding', function (require) {
    "use strict";


    var screens = require('point_of_sale.screens');

    screens.PaymentScreenWidget.include({

        show: function(){
            this._super();
            var default_pay = this.pos.config.default_payment_method;
            if(default_pay){

                this.click_paymentmethods(default_pay[0]);

            }

        }

    });



    

});