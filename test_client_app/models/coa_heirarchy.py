# -*- coding: utf-8 -*-
##############################################################################

from odoo import models, fields, api


class AccountHierarchy(models.Model):
    _name = 'account.hierarchy.group'
    _description = 'Group Hierarchy for chart of account'

    name = fields.Char(string="Name")
    group_id = fields.Many2one('account.group')
    account_id = fields.Many2one('account.account')

    @api.model
    def get_groups_info(self):
        root_groups = self.env['account.group'].search([('parent_id','=',False)])
        
        full_list = []
        final_list = []

        for ro in root_groups:
            root_list = []
            sub_list = []
            root_accounts = self.env['account.account'].search([('group_id','=',ro.id)]).ids
            root_list.append({
                'group_name':ro.name ,
                'sub_accounts':[{'acc_name':root_accounts}]

                })

            parent = self.env['account.group'].search([('id','child_of',ro.id),('id','!=',ro.id)])
            
            for pa in parent:
                sub_accounts = self.env['account.account'].search([('group_id','=',pa.id)]).ids
                sub_list.append({
                    'group_name':pa.name ,
                    'sub_accounts':[{'acc_name':sub_accounts}]

                    })
            full_list.append({'roots':root_list , 'sub_list':sub_list})

        without_groups = self.env['account.account'].search([('group_id','=',False)])
        final_list.append({'result':full_list,'without_group':without_groups})
       
        result = {
           
            'chart_of_account': final_list,
          
        }
            
        return result
