<template>
    <header class="main-header">
        <!-- Logo -->
        <a :href="showDashboardUrl('home')" class="logo">
            <!-- mini logo for sidebar mini 50x50 pixels -->
            <span class="logo-mini"><b>M</b>NW</span>
            <!-- logo for regular state and mobile devices -->
            <span class="logo-lg"><b>Minaworks CMS</b></span>
        </a>
        <!-- Header Navbar: style can be found in header.less -->
        <nav class="navbar navbar-static-top">
            <!-- Sidebar toggle button-->
            <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
                <span class="sr-only">Toggle navigation</span>
            </a>

            <ul class="nav navbar-nav">
                <li v-for="menu in menus" :key="menu.uri">
                    <router-link :to="menu.uri">
                        <i :class="menu.icon" v-if="menu.icon"></i> <span v-if="menu.label">{{ menu.label }}</span>
                    </router-link>
                </li>
            </ul>

            <div class="navbar-custom-menu">
                <ul class="nav navbar-nav">
                    <!-- User Account: style can be found in dropdown.less -->
                    <li class="dropdown user user-menu">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                            <img :src="showAvatar()" class="user-image" alt="User Image">
                            <span class="hidden-xs" v-text="showFullName()"></span>
                        </a>
                        <ul class="dropdown-menu">
                            <!-- User image -->
                            <li class="user-header">
                                <img :src="showAvatar()" class="img-circle" alt="User Image">

                                <p>
                                    <span v-text="showFullName()"></span>
                                    <small>Member since {{ moment(user.created_at)  }}</small>
                                </p>
                            </li>
                            <!-- Menu Footer-->
                            <li class="user-footer">
                                <div class="pull-left">
                                    <router-link :to="'users/profile'" class="btn btn-default btn-flat">Profile</router-link>
                                </div>
                                <div class="pull-right">
                                    <a :href="showDashboardUrl('logout')" class="btn btn-default btn-flat">Logout</a>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
    var moment = require('moment');
    import headerMenus from '../../../config/header-menu.js'
    export default {
        data() {
            return {
                user: {},
                baseUrl: window.BaseUrl,
                menus: headerMenus
            }
        },
        created() {},
        methods: {
            showAvatar(){
                return this.user.avatar ? this.user.avatar : this.dashboardImg('dist/img/user2-160x160.jpg');
            },
            showFullName(){
                return this.user.name
            },
            moment: function (date) {
              return moment(date).fromNow();
            },
            languageUrl: function(code){
                let url = this.$route.path.slice(3);
                return this.baseUrl + '/' + code + url;
            }
        },
        mounted() {
            this.user = window.User
        }
    }
</script>

<style lang="scss" scoped></style>
