<script setup>
  import Editor from '@tinymce/tinymce-vue'
</script>

<template>
  <main id="sample">
    <Editor
      api-key="kh3mtan9vc27i9l90t5l21jhgsxz3ionj3b70zunz5bbtbeo"
      :init="{
        language: 'zh_CN',
        toolbar_mode: 'sliding',
        plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount   linkchecker  ',
        toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
        tinycomments_mode: 'embedded',
        tinycomments_author: 'Author name',
        mergetags_list: [
          { value: 'First.Name', title: 'First Name' },
          { value: 'Email', title: 'Email' }
        ],
        ai_request: (request, respondWith) => respondWith.string(() => Promise.reject('See docs to implement AI Assistant'))
      }"
      initial-value=""
    />
  </main>
</template>

<style scoped>
@media (min-width: 1024px) {
  #sample {
    flex-direction: column;
    place-items: center;
    width:200vh;
    height: auto;
  }
}
</style>