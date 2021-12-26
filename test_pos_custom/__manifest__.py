
{
    'name': 'Test POS Custom',
    'version': '13.0',
    'summary': """Odoo js playlist """,
    'description': """
                  
                    Add default payment method to payment screen
                    Add restriction group to POS discount  
                                                   
                    """,
    'author': "Eman Khalifa",
    'website':'https://www.emankhalifa.com',
    'category': 'Sales/Point Of Sale',
  
    'depends': ['base', 'pos_discount'],
    "data": [
        'security/pos_groups.xml',
        'views/pos_config_view.xml',
        'views/pos_views.xml',
    ],

    'installable': True,
}
