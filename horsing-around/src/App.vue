<template>
  
  <div id="nav">
    <router-link to="/">Racing</router-link> |
    <router-link to="/horses">Horses</router-link> |
    <router-link to="/jockey">Jockey</router-link> 
    <div class = 'login'>
      <router-link to="/login">Login</router-link>
    </div>
  </div>
  <router-view />

</template>


<script>

export default {
  name: 'App',
  // data() {
  // },
  // methods: {
  // },

}

</script>



<style>
#app {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  top: 0px;
  padding: 10px;
  background-color: rgb(176, 176, 176);
  margin-bottom: 30px;

}

#nav a {
  font-weight: bold;
  color: #2e3e50;
}

#nav a.router-link-exact-active {
  color: #750e7e
}

.login{
  float: right;
}
</style>
