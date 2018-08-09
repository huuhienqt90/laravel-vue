export default [
    {
        heading: 'menu.main_menu',
        children: [
            {
                uri: '/'+window.Language+'/dashboard/article',
                icon: 'fa fa-newspaper-o',
                label: 'menu.article',
                permission: 'article.index'
            },
            {
                uri: '/'+window.Language+'/dashboard/article/create',
                icon: 'fa fa-newspaper-o',
                label: 'menu.article_create',
                permission: 'article.create'
            },
            {
                uri: '/'+window.Language+'/dashboard/tag',
                icon: 'fa fa-circle-o',
                label: 'menu.tag',
                permission: 'tag.index'
            },
            {
                uri: '/'+window.Language+'/dashboard/category',
                icon: 'fa fa-circle-o',
                label: 'menu.category',
                permission: 'category.index'
            }
        ]
    },

]

