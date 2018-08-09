<template>
    <select multiple class="form-control select2" :data-placeholder="$t('form.select_places')">
        <slot></slot>
    </select>
</template>

<script>
    export default {
        twoWay: true,
        priority: 1000,
        props: {
            options: {
                type: Array,
                default() {
                    return []
                }
            },
            value: {
                type: Array,
                default() {
                    return ["1","2"]
                }
            }
        },
        data() {
            return {}
        },
        mounted (){
            var self = this;
            $(this.$el)
                .select2( {data: this.options} )
                .val(this.value)
                .trigger('change')
                .on('change', function () {
                    //self.$emit('input', this.value) //single select worked good
                    self.$emit('input',  $(this).val()) // multiple select
                })
        },
        watch: {
            value: function (value) {
                $(this.$el).val(value)
            },
            options: function (options) {
                $(this.$el).select2({ data: options })
            }
        },
        destroyed: function () {
            $(this.$el).off().select2('destroy')
        }
    }
</script>