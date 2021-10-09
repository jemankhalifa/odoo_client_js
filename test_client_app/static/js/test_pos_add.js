odoo.define('test_client_app.customCategoriesWidget', function (require) {
    "use strict";

var screens = require('point_of_sale.screens');

screens.ProductCategoriesWidget.include({
    renderElement: function () {
      var self = this;
      this._super.apply(this, arguments);
      var open_test_button = this.el.querySelector(
        '.open-test-popup',
      );
    
      if (open_test_button) {
        open_test_button.addEventListener('click', function (event) {
          self.gui.show_popup('POSTestWidget');
        });
      }
    },
  });
});