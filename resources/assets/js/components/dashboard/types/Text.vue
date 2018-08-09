<template>
    <div class="form-group">
        <label class="col-sm-4 control-label">{{ $t(setting.label) }}</label>
        <div class="col-md-8">
            <input type="text" :name="setting.key" class="form-control" :value="setting.value">
            <div><p class="help-block" v-if="setting.description">{{ $t(setting.description) }}</p></div>
        </div>
        
    </div>
</template>

<script>
    export default {
        props: {
            setting: {}
        }
    }
</script>
<style lang="scss" scoped>
    .clear {
        clear: both;
    }
</style>