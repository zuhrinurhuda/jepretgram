<template>
  <div id="addPhoto" class="ui tiny modal">
    <i class="close icon"></i>
    <div class="header">Add Photo</div>
    <div class="content">
      <div class="ui form">
        <div class="field">
          <label>Url</label>
          <input type="text" name="url" placeholder="url" v-model="newPhoto.url">
        </div>
        <div class="field">
          <label>Caption</label>
          <input type="text" name="caption" placeholder="caption" v-model="newPhoto.caption">
        </div>
      </div>
    </div>
    <div class="actions">
      <div class="ui black deny button">Cancel</div>
      <div class="ui positive icon button" @click="submitAddPhoto">Submit</div>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    name: 'Modal',
    data: () => {
      return {
        newPhoto: {
          url: null,
          caption: null
        }
      }
    },
    methods: {
      ...mapActions(['addPhoto']),
      submitAddPhoto () {
        // console.log(this.newPhoto)
        this.addPhoto(this.newPhoto)
      }
    }
  }
</script>

<style lang="css">
</style>
