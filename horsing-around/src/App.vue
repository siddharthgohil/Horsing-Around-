<template>
  <div>
    <div class="allPages">
      <NavBar />
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue"; 
export default {
  components: {
    NavBar
  }
};
</script>

<style>
.allPages{
  background-color: rgb(237, 235, 231);
}
</style>
