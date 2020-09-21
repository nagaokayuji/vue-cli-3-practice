<template>
  <div>
    <h1>this is header {{headerText}}</h1>
    <slot></slot>
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: ["headerText"],
};
</script>

