export default [
    {
        heading: 'menu.main_menu',
        children: [
            {
                uri: '/'+window.Language+'/dashboard/settings/general',
                icon: 'fa fa-cogs',
                label: 'menu.general_setting',
                permission: 'generalSetting'
            },
            {
                uri: '/'+window.Language+'/dashboard/languages',
                icon: 'fa fa-globe',
                label: 'menu.language',
                permission: 'language.index'
            },
            {
                uri: '/'+window.Language+'/dashboard/countries',
                icon: 'fa fa-map-marker',
                label: 'menu.country',
                permission: 'country.index'
            },
            {
                uri: '/'+window.Language+'/dashboard/payments',
                icon: 'fa fa-money',
                label: 'menu.payment',
                permission: 'payment.index'
            },
            {
                uri: '/'+window.Language+'/dashboard/payments/coupon',
                icon: 'fa fa-arrow-down',
                label: 'menu.coupon',
                permission: 'coupon.index',
                children: [
                    {
                        uri: '/'+window.Language+'/dashboard/payments/coupon/used-list',
                        icon: 'fa fa-circle-o',
                        label: 'menu.coupon_used',
                        permission: 'coupon.index'
                    },
                ]
            },
            {
                uri: '/'+window.Language+'/dashboard/sliders',
                icon: 'glyphicon glyphicon-film',
                label: 'menu.sliders',
                permission: 'slider.index'
            },
        ]
    },

]

