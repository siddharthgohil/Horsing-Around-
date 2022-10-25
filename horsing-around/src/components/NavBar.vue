<template>
  <div id="nav">
    <div class="left">
      <router-link to="/"
        ><img id="navlogo" src="@/assets/logo.png"
      /></router-link>
    </div>

    <div class="middle">
      <router-link to="/" class="mid textLinks">Racing</router-link> |
      <router-link to="/horses" class="mid textLinks">Horses</router-link> |
      <router-link to="/jockey" class="mid textLinks">Jockey</router-link>
    </div>

    <div class="right">
      <router-link class="loginSegment textLinks" to="/Profile" v-if="user"
        >Profile</router-link
      >
      <router-link class="loginSegment textLinks" to="/Login" v-else
        >Login</router-link
      >
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
  display: flex;
  width: 100%;
}
#navlogo {
  width: 70px;
  margin-left: 10px;
}
#nav a.textLinks {
  padding-top: 25px;
  font-weight: bold;
  text-decoration: none;
  color: #2e3e50;
  width: 100px;
  margin: 0px 1%;
  height: 70px;
}
.loginSegment {
  background-color: #750e7e;
  color: #fff !important;
  padding-top: 10px !important;
  height: 40px !important;
}

#nav a.mid.router-link-exact-active {
  background-color: #f1ecec;
  color: #750e7e;
  border-radius: 30px;
  margin-top: 60px;
  padding-top: 10px !important;
  height: 100px;
}

#nav a.loginSegment.router-link-exact-active {
  background-color: #f1ecec;
  color: #750e7e;
  border-radius: 30px;
}


.left {
  flex: 1;          /* shorthand for: flex-grow: 1, flex-shrink: 1, flex-basis: 0 */
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.middle{
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

}

.right {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
</style>
