odoo.define('test_pos_custom.discount_access', function (require) {
    "use strict";

    var dis_btn = require('pos_discount.pos_discount');
    var session = require('web.session');
    var core = require('web.core');
    var _t = core._t;

    dis_btn.DiscountButton.include({
        
        button_click: function(){
            console.log("inside include custom");

            var self = this;
            var sup = self._super();


            session.user_has_group('test_pos_custom.pos_discount_group').then(
                function(has_group){
                    if(has_group){
                        return sup;
                    }

                    else{

                        self.gui.show_popup('error',{
                            'title': _t('Discount restriction'),
                            'body': _t('You have no access to discount'),  
                        });

                    }


                }


            )
        },

    });











    

});