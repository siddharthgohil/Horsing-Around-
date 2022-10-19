<template>
  <div style="text-align: center" v-if="user">
    <div id="logodiv">
      <img
        src="@/assets/logo.png"
        alt=""
        style="width: 175px; height: 175px; border: 4px solid#333"
      />
    </div>
    <div>
      <p>
        Name: <strong>{{ user.displayName }}</strong
        ><br />
        Email: <strong>{{ user.email }}</strong
        ><br />
        UID: <strong>{{ user.uid }}</strong
        ><br />
        Provider: <strong>{{ user.providerData[0].providerId }}</strong>
      </p>
    </div>
    <LogoutComp @added="change" />
  </div>
  <div v-else>
    <LoginComp />
  </div>
</template>

<script>
import LogoutComp from "@/components/LogoutComp.vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import LoginComp from "@/components/LoginComp";

export default {
  name: "ProfilePage",
  components: {
    LogoutComp,
    LoginComp,
  },
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
  methods: {
    change() {
      window.location.reload();
    },
  },
};
</script>

<style>
#logodiv {
  margin: 20px;
}
</style>
