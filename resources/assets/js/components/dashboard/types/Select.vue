<template>
    <div class="form-group">
        <label :for="setting.key" class="col-sm-4 control-label">{{ $t(setting.label) }}</label>
        <div class="col-md-8">
            <select :name="setting.key" v-if="setting.options" class="form-control">
                <option v-for="option in setting.options" :selected="option.key == setting.value" :value="option.key" v-text="option.value"></option>
            </select>
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