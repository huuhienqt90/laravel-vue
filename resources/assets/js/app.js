import httpPlugin from './plugins/http'
window.Vue = require('vue')
import VueRouter from 'vue-router'
import routes from './routes.js'
Vue.use(VueRouter)

Vue.component(
    'vue-table-pagination',
    require('./components/dashboard/TablePagination.vue')
)

Vue.component(
    'vue-table',
    require('./components/dashboard/Table.vue')
)

Vue.component(
    'vue-form',
    require('./components/dashboard/Form.vue')
)
const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    linkActiveClass: 'active menu-open',
    routes: routes
})

Vue.use(httpPlugin)

Vue.config.lang = window.Language

window.toastr = require('toastr/build/toastr.min.js')
window.innerHeight = 800

window.toastr.options = {
    positionClass: "toast-top-right",
    showDuration: "300",
    hideDuration: "1000",
    timeOut: "5000",
    extendedTimeOut: "1000",
    showEasing: "swing",
    hideEasing: "linear",
    showMethod: "fadeIn",
    hideMethod: "fadeOut"
};
// Global mixin
Vue.mixin({
    methods: {
        dashboardImg: function(url){
            return window.BaseUrl+'/themes/dashboard/'+url;
        },
        showDashboardUrl: function(url){
            return '/dashboard/' + url;
        },
        image(value) {
            if (value == null){
                return '<img src="'+ window.BaseUrl +'/images/No_Image_Available.jpg" class="img-responsive" style="width: 64px !important; height: 64px !important; margin: 0 auto;" />';
            }
            return '<img src="' + window.BaseUrl+ '/'+ value + '" class="img-responsive" style="width: 64px !important; height: 64px !important; margin: 0 auto;" />';
        },
    }
});

new Vue({
    el: "#app",
    router
});
