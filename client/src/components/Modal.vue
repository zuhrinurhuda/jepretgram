<template>
  <div id="addPhoto" class="ui tiny modal">
    <i class="close icon"></i>
    <div class="header">
      Add Photo
    </div>
    <div class="content">
      <div class="ui form">
        <div class="field">
          <label>Url</label>
          <input type="text" name="url" placeholder="url">
        </div>
        <div class="field">
          <label>Caption</label>
          <input type="text" name="caption" placeholder="caption">
        </div>
      </div>
    </div>
    <div class="actions">
      <div class="ui black deny button">
        Cancel
      </div>
      <div class="ui positive icon button">
        Submit
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Modal'
  }
</script>

<style lang="css">
</style>
