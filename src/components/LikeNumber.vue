<template>
  <div>
    <p>nice ({{number / 2}})</p>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
export default {
  // data: function () { ← 以前の書き方
  props: ["number"],
  // data() {
  //   return {
  //     number: 0,
  //   };
  // },
  methods: {
    increment() {
      this.number++;
    },
  },
};
</script>

<style scoped>
div {
  border: 1px solid red;
}
p {
  border: 1px solid yellow;
}
</style>