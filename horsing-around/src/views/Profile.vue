<template>
  <div style="text-align: center" v-if="user">
    <div id = "logodiv">
        <img src="@/assets/logo.png" alt="" style="width:175px; height:175px;border:4px solid#333">
    </div>
    <div>
        <p>Name: <strong>{{user.displayName}}</strong><br/>
        Email: <strong>{{user.email}}</strong><br/>
        UID: <strong>{{user.uid}}</strong><br/>
        Provider: <strong>{{user.providerData[0].providerId}}</strong>
        </p>
    </div>
    <LogoutComp />
  </div>
</template>

<script>
import LogoutComp from "@/components/LogoutComp.vue";
import {getAuth, onAuthStateChanged} from 'firebase/auth'

export default {
  name: "ProfilePage",
  components: {
    LogoutComp,
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
};
</script>

<style>
#logodiv{
  margin: 20px;
}
</style>
