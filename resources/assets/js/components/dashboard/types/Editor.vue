<template>
    <ckeditor :config="config" v-model="content" @blur="onBlur($event)" @focus="onFocus($event)"></ckeditor>
</template>
<script>
    import Ckeditor from 'vue-ckeditor2'
    export default {
        components: { Ckeditor },
        props: {
            settings: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        data() {
            return {
                content: this.settings.content,
                config: {
                    toolbar: [
                        { name: 'document', items: [ 'Source', '-', 'Save', 'NewPage', 'Preview', 'Print', '-', 'Templates' ] },
                        { name: 'clipboard', items: [ 'Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo' ] },
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
                    height: 300
                }
            }
        },
        methods: {
            onBlur (editor) {
              console.log(editor)
              this.content = editor._.data
            },
            onFocus (editor) {
              console.log(editor)
              this.content = editor._.data
            },
        }
    }
</script>