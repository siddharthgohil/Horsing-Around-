<template>
  <div id="nav">
    <router-link to="/"><img id="navlogo" src="@/assets/logo.png" /></router-link>
    <router-link to="/" class ='textLinks'>Racing</router-link> |
    <router-link to="/horses" class ='textLinks'>Horses</router-link> |
    <router-link to="/jockey" class ='textLinks'>Jockey</router-link>

    <router-link class="textLinks loginSegment" to="/Profile" v-if="user"
      >Profile</router-link
    >
    <router-link class="textLinks loginSegment" to="/Login" v-else>Login</router-link>
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
.login {
  float: right;
}
#navlogo {
  width: 70px;
  float: left;
  margin-left: 20px;
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
#nav a.textLinks {
  padding-top: 19px;
  font-weight: bold;
  text-decoration: none;
  color: #2e3e50;
  display: inline-block;
  width: 100px;
  margin: 0px 1%;
  height: 70px;
}
.loginSegment {
  float: right;
  background-color: #750e7e;
  color: #fff !important;
  padding-top: 10px !important;
  height: 40px !important;
}
#nav a.textLinks.router-link-exact-active {
  background-color: #f1ecec;
  color: #750e7e;
  border-radius: 30px;
}

</style>
