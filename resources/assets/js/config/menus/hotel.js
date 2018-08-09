export default [
    {
        heading: 'menu.hotel',
        children: [
            {
                uri: '/'+window.Language+'/dashboard/hotels',
                icon: 'fa fa-building',
                label: 'menu.hotel',
                permission: 'hotel.index'
            },
            {
                uri: '/'+window.Language+'/dashboard/hotels/create',
                icon: 'fa fa-building',
                label: 'menu.hotel_create',
                permission: 'hotel.create'
            },
            {
                uri: '/'+window.Language+'/dashboard/rooms',
                icon: 'fa fa-circle-o',
                label: 'menu.room',
                permission: 'room.index'
            },
            {
                uri: '/'+window.Language+'/dashboard/model-criterias',
                icon: 'fa fa-circle-o',
                label: 'menu.model_criterias',
                permission: 'hotel.criteria-index'
            },
            {
                uri: '/'+window.Language+'/dashboard/hotels/book',
                icon: 'fa fa-book',
                label: 'menu.hotel_book',
                permission: 'hotel.booking-index'
            },
            {
                uri: '/'+window.Language+'/dashboard/hotels/reviews',
                icon: 'fa fa-book',
                label: 'menu.hotel_review',
                permission: 'rating.index'
            },
        ]
    },
    {
        heading: 'menu.configuration',
        children: [
            {
                uri: '/'+window.Language+'/dashboard/hotels/facility',
                icon: 'fa fa-building',
                label: 'menu.facility',
                permission: 'facility.index'
            },
            {
                uri: '/'+window.Language+'/dashboard/hotels/feature',
                icon: 'fa fa-building',
                label: 'menu.room_feature',
                permission: 'roomFeature.index'
            },
            {
                uri: '/'+window.Language+'/dashboard/hotels/direction',
                icon: 'fa fa-building',
                label: 'menu.room_direction',
                permission: 'roomDirection.index'
            },
            {
                uri: '/'+window.Language+'/dashboard/hotels/bed',
                icon: 'fa fa-building',
                label: 'menu.bed',
                permission: 'bed.index'
            }
        ]
    },

]

