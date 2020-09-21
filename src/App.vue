<template>
  <div>
    <LikeHeader></LikeHeader>
    <p>TOTAL NICE</p>
    <p>{{ number }}</p>
    <LikeNumber v-bind:number="number"></LikeNumber>
    <LikeNumber :number="number"></LikeNumber>
  </div>
</template>
<script>
import LikeHeader from "./components/LikeHeader.vue";
// import LikeNumber from "./components/LikeNumber.vue";

export default {
  data() {
    return {
      number: 15,
    };
  },
  components: {
    LikeHeader,
    // LikeNumber,
  },
};
</script>
<style scoped>
/* div {
  border: 1px solid blue;
} */
</style>