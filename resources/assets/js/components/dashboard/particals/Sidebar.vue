<template>
    <!-- Left side column. contains the logo and sidebar -->
    <aside class="main-sidebar">
        <!-- sidebar: style can be found in sidebar.less -->
        <section class="sidebar">
            <ul class="sidebar-menu" data-widget="tree"></ul>
        </section>
        <!-- /.sidebar -->
    </aside>
</template>

<script>
    import menus from '../../../config/menu.js'

    export default {
        data() {
            return {
                menus: menus,
                user: {}
            }
        },
        methods: {
            showAvatar(){
                return this.user.avatar
            },
            showFullName(){
                return this.user.first_name + " " + this.user.last_name
            }
        },
        mounted() {
            this.user = window.User
        }
    }
</script>

<style lang="scss" scoped></style>
