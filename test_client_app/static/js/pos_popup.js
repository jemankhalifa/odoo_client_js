odoo.define("test_client_app.test_popup", function(require){
    "use strict";
    
    var gui = require('point_of_sale.gui');
    var PopupWidget = require('point_of_sale.popups');
 
    var _t  = require('web.core')._t;
 
    var POSTestWidget = PopupWidget.extend({
        template:'POSTestWidget',
    
        init: function(parent, options){
            this._super(parent, options);
            
    
        },
        show: function() {
            this._super();
          
        },
    
        events: {
            'click .button.cancel':  'click_cancel',
            'click .button.confirm': 'click_confirm',
        },
    
    
        click_confirm: function(){
            
        },
         click_cancel: function(){
            this.gui.close_popup();
    
        }
    });
    gui.define_popup({name:'POSTestWidget', widget: POSTestWidget});
    
    });