<template>
  <div class="ui attached stackable menu">
    <div class="ui container">
      <a class="item"><i class="home icon"></i>Home</a>
      <div class="right item">
        <button class="ui facebook button" @click="logout" v-if="token">
          <i class="sign out icon"></i>
          Logout
        </button>
        <button class="ui facebook button" @click="login" v-else>
          <i class="facebook icon"></i>
          Sign in with Facebook
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Navbar',
    data: () => {
      return {
        token: localStorage.getItem('token')
      }
    },
    methods: {
      login () {
        window.FB.login(response => {
          console.log('fblogin response ', response)
          if (response.status === 'connected') {
            window.FB.api('/me', { fields: ['id', 'name', 'email'] }, data => {
              this.$http.post('/users', data)
              .then(result => {
                console.log(result)
                window.localStorage.setItem('token', result.data.token)
                window.location.reload()
              })
              .catch(err => console.log(err))
            })
          } else {
            console.log('User cancelled login or did not fully authorize.')
          }
        }, {scope: 'public_profile, email'})
      },
      logout () {
        window.localStorage.removeItem('token')
        window.location.reload()
      }
    },
    created: () => {
      window.fbAsyncInit = function () {
        window.FB.init({
          appId: '1826498564044116',
          cookie: true,  // enable cookies to allow the server to access the session
          xfbml: true,  // parse social plugins on this page
          version: 'v2.8' // use graph api version 2.8
        })
      };
      (function (d, s, id) { // Load the SDK asynchronously
        var js
        var fjs = d.getElementsByTagName(s)[0]
        if (d.getElementById(id)) return
        js = d.createElement(s)
        js.id = id
        js.src = 'https://connect.facebook.net/en_US/sdk.js'
        fjs.parentNode.insertBefore(js, fjs)
      }(document, 'script', 'facebook-jssdk'))
    }
  }
</script>

<style lang="css">
</style>
