<template>
  <div>
    <div class="allPages">
      <NavBar/>
      <router-view></router-view>
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
  },
};
</script>

<style>
.allPages {
  background-color:#f1ecec; /*rgb(237, 235, 231);*/
  height: 100vh;
}
</style>
