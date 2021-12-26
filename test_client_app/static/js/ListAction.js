odoo.define('test_client_app.account_group_hierarchy', function (require) {
    'use strict';
    
    var core = require('web.core');
    var AbstractAction = require('web.AbstractAction');
    
    var QWeb = core.qweb;
    var _t = core._t;
    
    var ClientAction = AbstractAction.extend({
        contentTemplate: 'account_group_hierarchy',
        hasControlPanel: true,
        loadControlPanel: true,
        withSearchBar: true,
        events: {
        
        },
        custom_events: {
            search: '_onSearch',
        },
    
        init: function (parent, action) {
            this._super.apply(this, arguments);
            this.actionManager = parent;
            this.action = action;
            this.context = action.context;
            this.domain = [];
            this.chart_of_account = [];
            this.result = [];
            this.roots = [];
            this.groups = [];
            this.subList = [];
            this.subAccounts = [];
            this.state = false;
        
            this.controlPanelParams.modelName = 'account.hierarchy.group';
        },
    
        _getState: function () {
            var self = this;
            return this._rpc({
                model: 'account.hierarchy.group',
                method: 'get_groups_info',
               
            }).then(function (state) {
                
                self.chart_of_account = state;
             
                return state;
            });
        },
    
            fetch_data: function() {
            var self = this;
            var def0 =  self._rpc({
                        model: 'account.hierarchy.group',
                        method: 'get_groups_info'
                }).then( function(result) {
    
                   result['chart_of_account'].forEach(function(res){
                        
                        self.chart_of_account = res['result'];
    
                   });
            
                    
                });
    
                
                def0.value = self.chart_of_account;
        
           
            return $.when(def0);
        },
    
    
    
        render_dashboards: function() {
            var self = this;
            
                var templates = []
                templates = ['account_group_hierarchy'];
                
                _.each(templates, function(template) {
                    QWeb.render(template, {widget: self});
                });
            
                
        },
    
        start: function () {
            var self = this;
            
            return this._super.apply(this, arguments).then(function () {
                self.render_dashboards();
            });
        },
    
    });
    
    var tree = document.querySelectorAll('ul.tree a:not(:last-child)');
    for(var i = 0; i < tree.length; i++){
        tree[i].addEventListener('click', function(e) {
            var parent = e.target.parentElement;
            var classList = parent.classList;
            if(classList.contains("open")) {
                classList.remove('open');
                var opensubs = parent.querySelectorAll(':scope .open');
                for(var i = 0; i < opensubs.length; i++){
                    opensubs[i].classList.remove('open');
                }
            } else {
                classList.add('open');
            }
            e.preventDefault();
        });
    }
    
    core.action_registry.add('account_group_hierarchy', ClientAction);
    
    return ClientAction;
    
    });