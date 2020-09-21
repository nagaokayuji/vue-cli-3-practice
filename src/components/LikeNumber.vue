<template>
  <div>
    <p>nice ({{number / 2}})</p>
    <button @click="increment">+1</button>
    <p>{{hogehoge}}</p>
  </div>
</template>

<script>
export default {
  // data: function () { ← 以前の書き方
  props: {
    number: { type: Number, default: 333 },
    hogehoge: { type: String, default: "hoge" },
  },
  // data() {
  //   return {
  //     number: 0,
  //   };
  // },

  methods: {
    increment() {
      this.$emit("my-click", this.number + 1);
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