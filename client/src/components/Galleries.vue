<template>
  <div>
    <div class="ui card" v-for="(photo, index) in photos" :key="index">
      <div class="content">
        <!-- <div class="right floated meta">{{ photo.uploadedAt }}</div> -->
        <img class="ui avatar image" :src="photo.url"> {{ photo.uploader.name }}
      </div>
      <div class="image">
        <img class="" :src="photo.url">
      </div>
      <div class="content">
        <span class="right floated">
          <i class="heart outline like icon"></i>
          {{ photo.likes.length }} likes
        </span>
        <i class="comment icon"></i>
        3 comments
      </div>
      <div class="extra content">
        <div class="ui large transparent left icon input">
          <i class="heart outline icon"></i>
          <input type="text" placeholder="Add Comment...">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  export default {
    name: 'Galleries',
    computed: {
      ...mapGetters(['photos'])
    },
    methods: {
      ...mapActions(['getPhotos'])
    },
    created: function () {
      this.getPhotos()
    }
  }
</script>

<style lang="css">
</style>
