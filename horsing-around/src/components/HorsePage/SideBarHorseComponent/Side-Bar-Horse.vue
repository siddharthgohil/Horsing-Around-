<template>
  <div id="sidebar">
    <div class="menu-items">
      <!-- Stores the number of race of the day -->
      <router-link
        to="/horses"
        class="side-btn"
        active-class="active"
        v-on:click="changeTabParent('AllHorses')"
      >
        <button id="AllHorsesButton" class="link-container side-btn-active">
          All Horses
        </button>
      </router-link>
      <router-link
        to="/horses"
        class="side-btn"
        active-class="active"
        v-on:click="changeTabParent('Comparison')"
      >
        <button id="ComparisonButton" class="link-container">Comparison</button>
      </router-link>
      <router-link
        to="/horses"
        class="side-btn"
        active-class="active"
        v-on:click="changeTabParent('BookMarked')"
      >
        <button id="BookMarkedButton" class="link-container">Bookmarked</button>
      </router-link>
      <router-link
        to="/horses"
        class="side-btn"
        active-class="active"
        v-on:click="changeTabParent('Combination')"
      >
        <button id="CombinationButton" class="link-container">
          Combination
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideBarHorse",
  data(){
    return{
      tabName: "AllHorses"
    }
  },
  mounted(){
    this.changeColors(this.tabName)
  },
  methods: {
    changeTabParent(tabName){
      this.$emit("changeTab", tabName);
    },
    changeColors(tabName) {
        document.getElementsByClassName("side-btn-active")[0].classList.remove("side-btn-active");
        document.getElementById(tabName + "Button").classList.add("side-btn-active");
    },
  },
};
</script>

<style scoped>
.menu-items {
  display: flex;
  flex-direction: column;
  color: white;
  font-size: 20px;
  margin-top: 15vh;
  width: 100%;
}
.menu-items > * {
  width: 100%;
  margin-top: 1px;
}

.link-container {
  width: 100%;
  border: none;
  background-color: #954ab8;
  color: white;
}
.side-btn-active {
  color: #954ab8;
  background-color: #f1ecec;
}
.side-btn {
  width: 100%;
}
</style>

