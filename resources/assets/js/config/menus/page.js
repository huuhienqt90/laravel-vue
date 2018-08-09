export default [
    {
        heading: 'menu.pages',
        children: [
            {
                uri: '/'+window.Language+'/dashboard/pages',
                icon: 'fa fa-sticky-note',
                label: 'menu.page',
                permission: 'page.index'
            },
            {
                uri: '/'+window.Language+'/dashboard/pages/create',
                icon: 'fa fa-sticky-note',
                label: 'menu.page_create',
                permission: 'page.create'
            }
        ]
    },

]

