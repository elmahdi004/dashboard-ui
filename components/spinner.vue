<template>
  <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      :class="['animate-spin', className]"
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
</template>

<script setup>
const props = defineProps(['class']);
</script>

<style lang="scss" scoped>

</style>