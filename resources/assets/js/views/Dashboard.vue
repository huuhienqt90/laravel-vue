<template>
    <div class="wrapper">
        <main-header></main-header>
        <sidebar></sidebar>
        <!-- Content Wrapper. Contains page content -->
        <div class="content-wrapper">
            <!-- Content Header (Page header) -->
            <section class="content-header">
                <h1>
                    Dashboard
                    <small>Control panel</small>
                </h1>
                <ol class="breadcrumb">
                    <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
                    <li class="active">Dashboard</li>
                </ol>
            </section>
            <router-view></router-view>
        </div>
        <footer-bar></footer-bar>
        <div class="control-sidebar-bg"></div>
    </div>
</template>

<script>

import MainHeader from '../components/dashboard/particals/Header.vue';
import Sidebar from '../components/dashboard/particals/Sidebar.vue';
import FooterBar from '../components/dashboard/particals/FooterBar.vue';
import ControlSidebar from '../components/dashboard/particals/ControlSidebar.vue';
import menus from "../config/menus"

export default {
    components: {
        MainHeader,
        Sidebar,
        FooterBar,
        ControlSidebar
    },
    data(){
        return {
            menus: menus
        }
    },
    watch: {
        '$route' (to, from) {
            this.changeLeftMenu(to.path);
        }
    },
    mounted(){
        this.changeLeftMenu(this.$route.path);
    },
    methods: {
      changeLeftMenu(path){
      }
    }

}
</script>
