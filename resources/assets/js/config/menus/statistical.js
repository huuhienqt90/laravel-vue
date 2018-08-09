export default [
    {
        heading: 'menu.statistical',
        children: [
            {
                uri: '/'+window.Language+'/dashboard/statistic/hotel',
                icon: 'fa fa-building',
                label: 'menu.hotel',
                permission: 'statistical.hotel'
            },
            {
                uri: '/'+window.Language+'/dashboard/statistic/service',
                icon: 'fa fa-sticky-note',
                label: 'menu.service',
                permission: 'statistical.service'
            },
            {
                uri: '/'+window.Language+'/dashboard/statistic/tour',
                icon: 'fa fa-fighter-jet',
                label: 'menu.tour',
                permission: 'statistical.tour'
            },
            {
                uri: '/'+window.Language+'/dashboard/statistic/combo',
                icon: 'fa fa-star',
                label: 'menu.combo',
                permission: 'statistical.combo'
            },
        ]
    },
]