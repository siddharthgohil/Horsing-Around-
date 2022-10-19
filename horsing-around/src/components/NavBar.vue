<template>
  <div id="nav">
    <img id="navlogo" src="@/assets/logo.png" />
    <router-link to="/">Racing</router-link> |
    <router-link to="/horses">Horses</router-link> |
    <router-link to="/jockey">Jockey</router-link>
    <div class="login">
      <router-link to="/Profile" v-if="user">Profile</router-link>
      <router-link to="/Login" v-else>Login</router-link>
    </div>
  </div>
</template>

<script>
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
  name: "NavBar",
  data() {
    return {
      user: false,
    };
  },
  mounted() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.user = user;
      }
    });
  },
};
</script>

<style>
#navlogo {
  width: 35px;
  height: 35px;
  float: left;
  margin-left: 50px;
  margin-top: 10px;
}
.login {
  float: right;
}
#app {
  font-family: "Roboto", sans-serif;
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
  width: 80px;
  margin: 0px 1%;
  height: 70px;
}
#nav a.router-link-exact-active {
  background-color: #f1ecec;
  color: #750e7e;
  border-radius: 30px;
}
</style>
