<template>
  <div>
    <Navbar/>
    <main class="ui container">
      <header class="ui stackable grid">
        <div class="row">
          <div class="column">
            <button class="ui right floated positive button" @click="addPhotoModal">Add Photo</button>
            <Modal/>
          </div>
        </div>
      </header>
      <router-view/>
    </main>
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar'
  import Modal from '@/components/Modal'
  export default {
    name: 'Home',
    components: {
      Navbar,
      Modal
    },
    methods: {
      addPhotoModal () {
        $('#addPhoto').modal('show')
      }
    }
  }
</script>

<style lang="css">
  main {
    margin-top: 20px;
  }
</style>
