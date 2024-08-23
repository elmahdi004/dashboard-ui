<template lang="">
  <div>
    <div class="flex items-start">
        <div class="bg-red-400 h-screen w-1/5 flex md:hidden">sidebar for mobile</div>
        <div class="bg-yellow-400 h-screen w-1/5 hidden md:flex">sidebar for desktop</div>
    </div>
    <slot />
    <footer>this is footer</footer>
  </div>
</template>
<script>
export default {};
</script>
<style lang=""></style>
