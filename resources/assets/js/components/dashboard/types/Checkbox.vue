<template>
    <div class="form-group">
        <label :for="setting.key" class="col-sm-4 control-label">{{ $t(setting.label) }}</label>
        <div class="checkbox col-md-8" v-if="setting.options">
            <label v-for="option in setting.options" class="col-md-4"><input type="checkbox" :value="option.key" :checked="option.key == setting.value" :name="setting.key">{{ option.value }}</label>
            <div style="clear: both;"><p class="help-block" v-if="setting.description">{{ setting.description }}</p></div>
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