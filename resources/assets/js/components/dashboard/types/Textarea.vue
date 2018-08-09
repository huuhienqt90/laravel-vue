<template>
    <div class="form-group">
        <label class="col-sm-4 control-label">{{ $t(setting.label) }}</label>
        <div class="col-md-8">
            <textarea class="form-control" :name="setting.key">{{ setting.value }}</textarea>
            <div><p class="help-block" v-if="setting.description">{{ setting.description }}</p></div>
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