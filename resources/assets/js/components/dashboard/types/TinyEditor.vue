<template>
	<editor :plugins="plugins" v-model="content"></editor>
</template>
<script>
import Editor from '@tinymce/tinymce-vue';
export default {
	components: {
		'editor': Editor,
	},
	data () {
	  	return {
		  	plugins: [
	            'advlist autolink lists link image charmap print preview hr anchor pagebreak',
	            'searchreplace wordcount visualblocks visualchars code fullscreen',
	            'insertdatetime media nonbreaking save table contextmenu directionality',
	            'emoticons template paste textcolor colorpicker textpattern imagetools codesample toc'
	        	],
	        toolbar1: 'undo redo | insert | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
	        toolbar2: 'print preview media | forecolor backcolor emoticons | codesample',
		}
	},
}
</script>