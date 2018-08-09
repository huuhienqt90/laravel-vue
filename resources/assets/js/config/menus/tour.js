export default [
    {
        heading: 'menu.main_menu',
        children: [
            {
                uri: '/'+window.Language+'/dashboard/tours',
                icon: 'fa fa-fighter-jet',
                label: 'menu.tour',
                permission: 'tour.index'
            },
            {
                uri: '/'+window.Language+'/dashboard/tours/create',
                icon: 'fa fa-fighter-jet',
                label: 'menu.tour_create',
                permission: 'tour.create'
            },
            {
                uri: '/'+window.Language+'/dashboard/design-tours',
                icon: 'fa fa-fighter-jet',
                label: 'menu.tour_design',
                permission: 'tour.design'
            },
            {
                uri: '/'+window.Language+'/dashboard/tour-category',
                icon: 'fa fa-circle-o',
                label: 'menu.category',
                permission: 'tourCategory.index'
            },
            {
                uri: '/'+window.Language+'/dashboard/tours/book/all',
                icon: 'fa fa-book',
                label: 'menu.tour_book',
                permission: 'tour.booking-index'
            },
            {
                uri: '/'+window.Language+'/dashboard/comment/tour',
                permission: 'tour.comment-index'
            },
        ]
    },

]

