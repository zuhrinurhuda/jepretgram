<template>
  <div class="ui attached stackable menu">
    <div class="ui container">
      <a class="item">
        <i class="home icon"></i> Home
      </a>
      <a class="item">
        <i class="grid layout icon"></i> Browse
      </a>
      <a class="item">
        <i class="mail icon"></i> Messages
      </a>
      <div class="ui simple dropdown item">
        More
        <i class="dropdown icon"></i>
        <div class="menu">
          <a class="item"><i class="edit icon"></i> Edit Profile</a>
          <a class="item"><i class="globe icon"></i> Choose Language</a>
          <a class="item"><i class="settings icon"></i> Account Settings</a>
        </div>
      </div>
      <div class="right item">
        <button class="ui facebook button" @click="login">
          <i class="facebook icon"></i>
          Sign in with Facebook
        </button>
        <button class="ui facebook button">
          <i class="sign out icon"></i>
          Logout
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Navbar',
    methods: {
      login () {
        FB.login(function(response) {
          if (response.status === 'connected') {
            FB.api('/me', function(response) {
              console.log('Successful login for: ' + response.name);
              
            });
          } else {

          }
        })
      }
    },
    created : {

    }
  }
</script>

<style lang="css">
</style>
