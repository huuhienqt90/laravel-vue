export default {
    methods: {
        heading: 'menu.service',
        children: [
            {
                uri: '/'+window.Language+'/dashboard/services',
                icon: 'fa fa-sticky-note',
                label: 'menu.service',
                permission: 'service.index'
            },
            {
                uri: '/'+window.Language+'/dashboard/services/create',
                icon: 'fa fa-sticky-note',
                label: 'menu.service_create',
                permission: 'service.create'
            },
            {
                uri: '/'+window.Language+'/dashboard/service-categories',
                icon: 'fa fa-sticky-note',
                label: 'menu.service_category',
                permission: 'serviceCategory.index'
            },
            {
                uri: '/'+window.Language+'/dashboard/services/book',
                icon: 'fa fa-book',
                label: 'menu.service_book',
                permission: 'service.booking-index'
            },
        ]
    },

}

