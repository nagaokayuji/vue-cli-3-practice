<template>
  <div>
    <LikeHeader headerText="トータル">
      <h1>なにか</h1>
      <h2>{{number}}</h2>
    </LikeHeader>
    <p>TOTAL NICE</p>
    <p>{{ number }}</p>
    <LikeNumber v-bind:number="number" v-on:my-click="number = $event"></LikeNumber>
    <EventTitle v-model="eventData.title"></EventTitle>
  </div>
</template>
<script>
import LikeHeader from "./components/LikeHeader.vue";
// import LikeNumber from "./components/LikeNumber.vue";
import EventTitle from "./components/EventTitle.vue";

export default {
  data() {
    return {
      number: 100,
      eventData: { title: "default", maxNumber: 5 },
    };
  },
  components: {
    LikeHeader,
    EventTitle,
    // LikeNumber,
  },
};
</script>
<style scoped>
/* div {
  border: 1px solid blue;
} */
</style>