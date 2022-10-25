<template>
  <div id="sidebar">
    <div class="menu-items">
      <!-- Stores the number of race of the day -->
      <router-link to="/" class="side-btn" active-class="active">
        <button
          id="Race1"
          class="link-container side-btn-active"
          v-on:click="changeRace(1)"
        >
          Race 1
        </button>
      </router-link>
      <router-link to="/" class="side-btn" active-class="active">
        <button id="Race2" class="link-container" v-on:click="changeRace(2)">
          Race 2
        </button>
      </router-link>
      <router-link to="/" class="side-btn" active-class="active">
        <button id="Race3" class="link-container" v-on:click="changeRace(3)">
          Race 3
        </button>
      </router-link>
      <router-link to="/" class="side-btn" active-class="active">
        <button id="Race4" class="link-container" v-on:click="changeRace(4)">
          Race 4
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideBar",
  methods: {
    changeRace(raceNum) {
      this.$emit("changeRace", raceNum);
      for (let i = 1; i < 5; i++) {
        if (i != raceNum) {
          document
            .getElementById("Race" + String(i))
            .classList.remove("side-btn-active");
        } else {
          document
            .getElementById("Race" + String(i))
            .classList.add("side-btn-active");
        }
      }
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
</style>
