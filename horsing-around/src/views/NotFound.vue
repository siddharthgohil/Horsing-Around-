<template>
  <NavBar />
  <h3>Page not Found!!</h3>
  <h4>Please click on the aobve available options</h4>
  <LogoutComp />
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import LogoutComp from "@/components/LogoutComp.vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
  name: "NotFound",
  components: {
    NavBar,
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

<style></style>
