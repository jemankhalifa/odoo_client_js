odoo.define('test_client_app.ButtonsInList', function (require) {
    "use strict";

    var ListController = require("web.ListController");
    
    
    var includeDict = {
        renderButtons: function () {
            this._super.apply(this, arguments);
            if (this.modelName === "account.account") {
                var coa_button = this.$buttons.find('.o_list_button');
                coa_button.on('click', this.proxy('o_button_click'));
            }
        },
        o_button_click: function(e){
          var self = this;
    
            var action = {
                    type: 'ir.actions.client',
                    name: 'New Custom View',
                    tag: 'account_custom_view',
                  
                };
                this.do_action(action);
    
        }
    };
    ListController.include(includeDict);
    

});
    