
export default [
    {
        uri: '/'+window.Language+'/dashboard/home',
        icon: 'fa fa-dashboard',
        label: 'menu.dashboard'
    },
    {
        uri: '/'+window.Language+'/dashboard/tours',
        icon: 'fa fa-fighter-jet',
        label: 'menu.tour',
        children: [
            {
                uri: '/'+window.Language+'/dashboard/design-tours',
                icon: 'fa fa-circle-o',
                label: 'menu.tour_design'
            }
        ]
    },
    {
        uri: '/'+window.Language+'/dashboard/users',
        icon: 'fa fa-users',
        label: 'menu.user',
        children: [
            {
                uri: '/'+window.Language+'/dashboard/role',
                icon: 'fa fa-circle-o',
                label: 'menu.role'
            },
        ]
    },
    {
        uri: '/'+window.Language+'/dashboard/comments',
        icon: 'fa fa-comments',
        label: 'menu.comment',
        children: [
        ]
    },
    {
        uri: '/'+window.Language+'/dashboard/services',
        icon: 'fa fa-steam',
        label: 'menu.service',
        children: [
            {
                uri: '/'+window.Language+'/dashboard/service-categories',
                icon: 'fa fa-circle-o',
                label: 'menu.service_category'
            },
        ]
    },
    {
        uri: '/'+window.Language+'/dashboard/hotels',
        icon: 'fa fa-building',
        label: 'menu.hotel',
        children: [
            {
                uri: '/'+window.Language+'/dashboard/room_types',
                icon: 'fa fa-circle-o',
                label: 'menu.room_type'
            },
            {
                uri: '/'+window.Language+'/dashboard/rooms',
                icon: 'fa fa-circle-o',
                label: 'menu.room'
            },
            {
                uri: '/'+window.Language+'/dashboard/hotels/reviews',
                icon: 'fa fa-circle-o',
                label: 'menu.hotel_review'
            },
        ]
    },
    {
        uri: '/'+window.Language+'/dashboard/article',
        icon: 'fa fa-newspaper-o',
        label: 'menu.article',
        children: [
            {
                uri: '/'+window.Language+'/dashboard/tag',
                icon: 'fa fa-circle-o',
                label: 'menu.tag'
            },
            {
                uri: '/'+window.Language+'/dashboard/category',
                icon: 'fa fa-circle-o',
                label: 'menu.category'
            },
        ]
    },
    {
        uri: '/' + window.Language + '/dashboard/languages',
        icon: 'fa fa-globe',
        label: 'menu.localization',
        children: [
            {
                uri: '/' + window.Language + '/dashboard/languages',
                icon: 'fa fa-circle-o',
                label: 'menu.language'
            },
            {
                uri: '/' + window.Language + '/dashboard/countries',
                icon: 'fa fa-circle-o',
                label: 'menu.country'
            },
        ]
    },
    {
        uri: '/'+window.Language+'/dashboard/combo',
        icon: 'fa fa-star',
        label: 'menu.combo',
        children: [
            {
                uri: '/'+window.Language+'/dashboard/combo-category',
                icon: 'fa fa-circle-o',
                label: 'menu.combo_category',
            }
        ]
    },
    {
        uri: '/' + window.Language + '/dashboard/pages',
        icon: 'fa fa-sticky-note',
        label: 'menu.page',
        children: [
        ]
    },
    {
        uri: '/'+window.Language+'/dashboard/rating-models',
        icon: 'fa fa-star',
        label: 'menu.rating_models',
        children: [
            {
                uri: '/'+window.Language+'/dashboard/model-criterias',
                icon: 'fa fa-circle-o',
                label: 'menu.model_criterias',
            },
        ]
    },
    {
        uri: '/' + window.Language + '/dashboard/settings',
        icon: 'fa fa-cog',
        label: 'menu.setting',
        children: [
            {
                uri: '/' + window.Language + '/dashboard/settings/general',
                icon: 'fa fa-circle-o',
                label: 'menu.general_setting'
            },
            {
                uri: '/' + window.Language + '/dashboard/payments',
                icon: 'fa fa-circle-o',
                label: 'menu.payment'
            }
        ]
    },
]
