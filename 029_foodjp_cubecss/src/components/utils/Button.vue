<template>
  <button class="btn btn-primary" @click="onClick">
    <slot />
  </button>
</template>

<script>
export default {
  name: "Button",
  methods: {
    onClick() {
      this.$emit("click");
    },
  },
};
</script>

<style></style>
