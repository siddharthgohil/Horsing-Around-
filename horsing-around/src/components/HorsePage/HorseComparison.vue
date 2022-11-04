<template>
  <RacingPositionsGraph ref="positions" @changeChart="display(this.raceNum)" />
</template>

<script>
import RacingPositionsGraph from "../RacingPositionsGraph.vue";
export default {
  name: "HorseComparison",
  component: RacingPositionsGraph,
  methods: {
    display(raceNum) {
      this.raceNum = raceNum;
      this.$refs.positions.display(raceNum);
    },
  },
};
</script>

<style></style>
