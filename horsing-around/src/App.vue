<template>
  <div class="header">
    <div id="nav">
      <router-link to="/">Racing</router-link> 
      <router-link to="/horses">Horses</router-link> 
      <router-link to="/jockey">Jockey</router-link> 
      <div class = 'login'>
        <router-link to="/login">Login</router-link>
      </div>
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
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 10px;
  background-color: #fff;
  height: 60px;
  display: inline-block;
  width: 100%;
}

#nav a {
  padding-top: 19px;
  font-weight: bold;
  text-decoration: none;
  color: #2e3e50;
  display: inline-block;
  width: 8%;
  margin: 0px 1%;
  height: 70px;
}

#nav a.router-link-exact-active {
  background-color: #F1ECEC;
  color: #750e7e;
  border-radius: 30px;
}

.login{
  float: right;
  margin-right: 50px;
}
</style>
