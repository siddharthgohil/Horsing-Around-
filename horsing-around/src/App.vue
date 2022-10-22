<template>
  <div>
    <div class="allPages">
      <NavBar ref = 'navBarRev'/>
      <router-view @added="change"></router-view>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
export default {
  components: {
    NavBar,
  },
  data() {
    return {
      refreshComp: 0,
    };
  },
  methods: {
    change() {
      console.log("wors");
      this.$refs.navBarRev.user = false;
    },
  },
};
</script>

<style>
.allPages {
  background-color:#f1ecec; /*rgb(237, 235, 231);*/
  height: 100vh;
}
</style>
