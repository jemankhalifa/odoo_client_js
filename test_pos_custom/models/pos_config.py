from odoo import models, api, fields

class PosConfig(models.Model):
    _inherit = 'pos.config'

    default_payment_method = fields.Many2one('pos.payment.method',string="Default Payment Method")