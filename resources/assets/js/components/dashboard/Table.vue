<template>
    <div class="row">
        <div class="col-xs-12">
            <div class="box">
                <div class="box-header">
                    <h3 class="box-title">{{ title }}</h3>

                    <div class="box-tools">
                        <slot name="buttons"></slot>
                    </div>
                    <div class="box-body ">
                        <slot name="header"></slot>
                    </div>
                </div>
                <!-- /.box-header -->
                <div class="box-body table-responsive no-padding">
                    <div>
                        <slot name="body"></slot>
                    </div>
                    <template v-if="isLoading">
                        <div class="loading text-center">
                            <pulse-loader :color="'#f07124'"></pulse-loader>
                        </div>
                    </template>
                    <table v-else class="table table-hover" id="list-data">
                        <thead>
                            <tr>
                                <template v-for="field in fields">
                                    <template v-if="isSpecialField(field.name)">
                                        <th v-if="field.name == '__view_actions'" :class="field.titleClass">
                                            <template v-if="field.trans">
                                                {{ $t(field.trans) }}
                                            </template>
                                            <template v-else>
                                                {{ field.title ? field.title : '' }}
                                            </template>
                                        </th>
                                        <th v-if="field.name == '__actions'" :class="field.titleClass">
                                            <template v-if="field.trans">
                                                {{ $t(field.trans) }}
                                            </template>
                                            <template v-else>
                                                {{ field.title ? field.title : '' }}
                                            </template>
                                        </th>
                                        <th v-if="field.name == '__component'" :class="field.titleClass">
                                            <template v-if="field.trans">
                                                {{ $t(field.trans) }}
                                            </template>
                                            <template v-else>
                                                {{ field.title ? field.title : field.name }}
                                            </template>
                                        </th>
                                        <th v-if="field.name == '__link'" :class="field.titleClass">
                                            <template v-if="field.trans">
                                                {{ $t(field.trans) }}
                                            </template>
                                            <template v-else>
                                                {{ field.title ? field.title : field.name }}
                                            </template>
                                        </th>
                                    </template>
                                    <template v-else>
                                        <th :class="field.titleClass">
                                            <template v-if="field.trans">
                                                {{ $t(field.trans) }}
                                            </template>
                                            <template v-else>
                                                {{ field.title ? field.title : field.name }}
                                            </template>
                                        </th>
                                    </template>
                                </template>
                            </tr>
                        </thead>
                        <tbody v-cloak>
                        <template v-if="items.length > 0">
                            <tr v-for="item in items">
                                <template v-for="field in fields">
                                    <template v-if="isSpecialField(field.name)">
                                        <template v-if="field.name == '__view_actions'">
                                            <td :class="field.dataClass" class="actions">
                                                <div class="btn-group">
                                                    <template v-for="action in itemViewActions">
                                                        <a @click="callAction(action.name, item)" :class="action.class">
                                                            <i :class="action.icon"></i>
                                                            {{ action.label }}
                                                        </a>
                                                    </template>
                                                </div>
                                            </td>
                                        </template>
                                        <template v-if="field.name == '__actions'">
                                            <td :class="field.dataClass" class="actions">
                                                <div class="btn-group">
                                                    <template v-for="action in itemActions" v-if="typeof action.permission === 'undefined' || (action.permission && checkUserPermission(action.permission) === true)">
                                                        <a @click="callAction(action.name, item)" :class="action.class">
                                                            <i :class="action.icon"></i>
                                                            {{ action.label }}
                                                        </a>
                                                    </template>
                                                </div>
                                            </td>
                                        </template>
                                        <template v-if="field.name == '__component'">
                                            <td :class="field.dataClass" class="component">
                                                <custom-action :api-url="apiUrl" :row-data="item"></custom-action>
                                            </td>
                                        </template>
                                        <template v-if="field.name == '__link'">
                                            <td :class="field.dataClass" class="slot">
                                                <a @click="callAction(field.action, item)" style="cursor:pointer" >{{ item[field.label] }}</a>
                                            </td>
                                        </template>
                                    </template>
                                    <template v-else>
                                        <td v-if="hasCallback(field)" :class="field.dataClass" v-html="callCallback(field, item)">
                                        </td>
                                        <td :class="field.dataClass" v-else>
                                            {{ item[field.name] }}
                                        </td>
                                    </template>
                                </template>
                            </tr>
                        </template>
                        </tbody>
                        <tfoot>
                        <tr>
                            <template v-for="field in fields">
                                <template v-if="isSpecialField(field.name)">
                                    <th v-if="field.name == '__view_actions'" :class="field.titleClass">
                                        <template v-if="field.trans">
                                            {{ $t(field.trans) }}
                                        </template>
                                        <template v-else>
                                            {{ field.title ? field.title : '' }}
                                        </template>
                                    </th>
                                    <th v-if="field.name == '__actions'" :class="field.titleClass">
                                        <template v-if="field.trans">
                                            {{ $t(field.trans) }}
                                        </template>
                                        <template v-else>
                                            {{ field.title ? field.title : '' }}
                                        </template>
                                    </th>
                                    <th v-if="field.name == '__component'" :class="field.titleClass">
                                        <template v-if="field.trans">
                                            {{ $t(field.trans) }}
                                        </template>
                                        <template v-else>
                                            {{ field.title ? field.title : field.name }}
                                        </template>
                                    </th>
                                    <th v-if="field.name == '__link'" :class="field.titleClass">
                                        <template v-if="field.trans">
                                            {{ $t(field.trans) }}
                                        </template>
                                        <template v-else>
                                            {{ field.title ? field.title : field.name }}
                                        </template>
                                    </th>
                                </template>
                                <template v-else>
                                    <th :class="field.titleClass">
                                        <template v-if="field.trans">
                                            {{ $t(field.trans) }}
                                        </template>
                                        <template v-else>
                                            {{ field.title ? field.title : field.name }}
                                        </template>
                                    </th>
                                </template>
                            </template>
                        </tr>
                        </tfoot>
                    </table>
                    <h3 class="none text-center" v-if="items.length == 0 && !isLoading">{{ $t('page.nothing') }}</h3>
                    <table-pagination ref="pagination" v-on:loadPage="loadPage" v-if="showPaginate && items.length > 0"></table-pagination>
                </div>
                <!-- /.box-body -->
            </div>
            <!-- /.box -->
        </div>
    </div>
</template>

<script>

    import PulseLoader from 'vue-spinner/src/RingLoader.vue'
    import CustomAction from './CustomAction.vue'
    import TablePagination from './TablePagination.vue'

    export default{
        props: {
            wrapperClass: {
                type: String,
                default() {
                    return null
                }
            },
            tableClass: {
                type: String,
                default() {
                    return 'table table-striped table-hover'
                }
            },
            title: {
                type: String,
                default() {
                    return ''
                }
            },
            showPaginate: {
                type: Boolean,
                default() {
                    return false
                }
            },
            fields: {
                type: Array,
                required: true
            },
            apiUrl: {
                type: String,
                required: true
            },
            disabledClass: {
                type: String,
                default() {
                    return 'disabled'
                }
            },
            itemActions: {
                type: Array,
                default() {
                    return [
                        { name: 'edit-item', icon: 'fa fa-edit', class: 'btn btn-info' },
                        { name: 'delete-item', icon: 'fa fa-trash', class: 'btn btn-danger' }
                    ]
                }
            },
            itemViewActions: {
                type: Array,
                default() {
                    return [
                        { name: 'view-item', icon: 'fa fa-eye', class: 'btn btn-warning' },
                    ]
                }
            },
        },
        components: {
            TablePagination,
            CustomAction,
            PulseLoader
        },
        data() {
            return{
                items: [],
                totalPage: 0,
                currentPage: 0,
                pagination: null,
                isLoading: true
            }
        },
        watch: {
            $route() {
                let pageNum = 1

                if (this.$route.query.page) {
                    pageNum = this.$route.query.page
                }

                this.loadPage(pageNum)
            },
            apiUrl(){
                this.isLoading = true;
                this.loadData()
            }
        },
        created() {
            this.currentPage = this.$route.query.page

            this.loadData()
        },
        mounted() {
            this.$parent.$on('reload', () => {
                this.loadData()
            })
        },
        methods: {
            loadPage(page) {
                if (page == 'prev') {
                    this.goPreviousPage()
                } else if (page == 'next') {
                    this.goNextPage()
                } else {
                    this.goPage(page)
                }
            },
            loadData() {
                var url = this.apiUrl;

                if (this.currentPage) {
                    let page = ''
                    if (url.indexOf('?') != -1) {
                        page = '&page='
                    } else {
                        page = '?page='
                    }
                    url = url + page + this.currentPage
                    this.$router.push(page + this.currentPage)
                }

                this.$http.get(url)
                    .then(response => {
                        this.items = response.data.data.data
                        this.pagination = response.data.data
                        this.totalPage = response.data.data.last_page
                        this.currentPage = response.data.data.current_page
                        this.isLoading = false

                        if (this.showPaginate && this.items.length != 0) {
                            this.$nextTick(() => {
                                this.$refs.pagination.$data.pagination = this.pagination
                            })
                        }

                        if(this.items.length == 0 && this.currentPage > 1){
                            this.currentPage--
                            this.loadData()
                        }
                    })
            },
            goPreviousPage() {
                if (this.currentPage > 1) {
                    this.currentPage--
                    this.loadData()
                }
            },
            goNextPage() {
                if (this.currentPage < this.totalPage) {
                    this.currentPage++
                    this.loadData()
                }
            },
            goPage(page) {
                if (page != this.currentPage && (page > 0 && page <= this.totalPage)) {
                    this.currentPage = page
                    this.loadData()
                }
            },
            hasCallback(item) {
                return item.callback ? true : false
            },
            callCallback(field, item) {
                if (! this.hasCallback(field)) return

                var args = field.callback.split('|')
                var func = args.shift()

                if (typeof this.$parent[func] == 'function') {
                    return (args.length > 0)
                        ? this.$parent[func].apply(this.$parent, [this.getObjectValue(item, field.name), item].concat(args))
                        : this.$parent[func].call(this.$parent, this.getObjectValue(item, field.name), item)
                }

                return null
            },
            getObjectValue(object, path, defaultValue) {
                defaultValue = (typeof defaultValue == 'undefined') ? null : defaultValue

                var obj = object
                if (path.trim() != '') {
                    var keys = path.split('.')
                    keys.forEach((key) => {
                        if (obj !== null && typeof obj[key] != 'undefined' && obj[key] !== null) {
                            obj = obj[key]
                        } else {
                            obj = defaultValue
                            return
                        }
                    })
                }
                return obj
            },
            isSpecialField(name) {
                return name.slice(0, 2) === '__'
            },
            callAction(action, data) {
                this.$emit('table-action', action, data)
            },
            reload() {
                this.loadData()
            }
        }
    }
</script>

<style lang="scss" scoped>
    .none {
        color: #ECF0F1;
        padding-bottom: 20px;
    }
    .actions {
      width: 15%;
      padding: 12px 0px;
      text-align: center;
    }
    .active {
      background-color: #3d4e60;
      border-right: none;
    }
    .pagination li {
      cursor: pointer;
    }
</style>
