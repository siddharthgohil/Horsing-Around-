<template>
  <div class = 'allPages'>
    <div id="nav">
    <img class="siteLogo" src="./assets/images/logo.png">
      <router-link to="/">Racing</router-link> |
      <router-link to="/horses">Horses</router-link> |
      <router-link to="/jockey">Jockey</router-link>
      <router-link class='login' to="/login">Login</router-link>
      
    </div>
    
    <router-view></router-view>

  </div>
</template>

<script>
export default {
};
</script>

<style>
.allPages{
  background-color: rgb(237, 235, 231);
}
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

.siteLogo {
  float:left;
  width: 70px;
  margin-left: 30px;
}

.login {
  float: right;
  margin-right: 50px;
  width: 100px;
  text-align: center;
  color: white !important;
  background-color: #750e7e;
  height: 45px !important;
  padding-top: 12px !important;
}

.login:hover {
  color: black !important;
  background-color: #954AB8 !important;
}

</style>
