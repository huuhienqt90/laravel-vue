export default [
    {
        heading: 'menu.pages',
        children: [
            {
                uri: '/'+window.Language+'/dashboard/users',
                icon: 'fa fa-user',
                label: 'menu.user',
                permission: 'user.index'
            },
            {
                uri: '/'+window.Language+'/dashboard/role',
                icon: 'fa fa-user',
                label: 'menu.role',
                permission: 'role.index'
            }
        ]
    },

]

