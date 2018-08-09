export default [
    {
        heading: 'menu.combo',
        children: [
            {
                uri: '/'+window.Language+'/dashboard/combo-category',
                icon: 'fa fa-circle-o',
                label: 'menu.combo_category',
                permission: 'combo.booking-index',
            },
            {
                uri: '/'+window.Language+'/dashboard/combo/book',
                icon: 'fa fa-book',
                label: 'menu.combo_book',
                permission: 'combo.booking-index',
            },
        ]
    },

]