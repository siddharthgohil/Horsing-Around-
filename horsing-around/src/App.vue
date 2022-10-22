<template>
  <div>
    <div class="allPages">
      <NavBar :key="refreshComp" />
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
      this.refreshComp += 1;
    },
  },
};
</script>

<style>
.allPages {
  background-color:#f1ecec; /*rgb(237, 235, 231);*/
  
}
</style>
