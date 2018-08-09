<style type="text/css">
    a.cke_dialog_tab{
        display: none !important;
    }
</style>
<template>
    <Ckeditor :config="config" v-model="content"></Ckeditor>
</template>
<script type="text/javascript">
    import Ckeditor from 'vue-ckeditor2'
    import { apiUrl } from '../../../dashboard/config/base.js'
    export default {
        components: {Ckeditor},
        props:{
            model:{
                default() {
                    return {}
                }
            },
            languageId:{
                default() {
                    return {}
                }
            },
            modelType:{
                default() {
                    return {}
                }
            },
        },
        watch:{
            content: function(){
                this.$emit('updateContent', {'modelType': this.modelType, 'languageId': this.languageId, 'content': this.content});
            }
        },
        data(){
            return {
                content: this.model,
                config: {
                    extraPlugins: 'image2',
                    toolbar: [
                    { name: 'document', items: [ 'Source', '-', 'Save', 'NewPage', 'Preview', 'Print', '-', 'Templates' ] },
                    { name: 'clipboard', items: [ 'Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Alignment', 'Undo', 'Redo' ] },
                    { name: 'editing', items: [ 'Find', 'Replace', '-', 'SelectAll', '-', 'Scayt' ] },
                    { name: 'forms', items: [ 'Form', 'Checkbox', 'Radio', 'TextField', 'Textarea', 'Select', 'Button', 'ImageButton', 'HiddenField' ] },
                    '/',
                    { name: 'basicstyles', items: [ 'Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'CopyFormatting', 'RemoveFormat' ] },
                    { name: 'paragraph', items: [ 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', 'CreateDiv', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', '-', 'BidiLtr', 'BidiRtl', 'Language' ] },
                    { name: 'links', items: [ 'Link', 'Unlink', 'Anchor' ] },
                    { name: 'insert', items: [ 'Image', 'Flash', 'Table', 'HorizontalRule', 'Smiley', 'SpecialChar', 'PageBreak', 'Iframe' ] },
                    '/',
                    { name: 'styles', items: [ 'Styles', 'Format', 'Font', 'FontSize' ] },
                    { name: 'colors', items: [ 'TextColor', 'BGColor' ] },
                    { name: 'tools', items: [ 'Maximize', 'ShowBlocks' ] },
                    { name: 'about', items: [ 'About' ] }
                    ],
                    height: 270,
                    skin: 'office2013',
                    filebrowserBrowseUrl: window.BaseUrl + '/' + window.Language + '/dashboard/upload/Images?type=Images',                    
                    filebrowserUploadUrl: window.BaseUrl + '/' + window.Language + '/dashboard/upload/Images?type=Images',
                    // filebrowserImageBrowseUrl: window.BaseUrl + '/' + window.Language + '/dashboard/upload/Images?type=Images',
                    // filebrowserImageUploadUrl: window.BaseUrl + '/' + window.Language + '/dashboard/upload/Images?type=Images',
                },
            }
        },
    }
</script>