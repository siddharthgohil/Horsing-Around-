<template>
  <div v-if="user">
    <HorsesPage />
    <JockeyPage />
  </div>
  <div v-else>
    <h3>This page is only for logged in members</h3>
  </div>
</template>

<script>
import HorsesPage from "@/components/HorsesPage.vue";
import JockeyPage from "@/components/JockeyPage.vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
  name: "OnlyProfit",
  components: {
    HorsesPage,
    JockeyPage,
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
