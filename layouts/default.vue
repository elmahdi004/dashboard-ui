<template lang="">
  <div>
    <div class="flex items-start">
        <div class="h-screen w-1/5 flex md:hidden">
            <SideBar/>
        </div>
        <div class="h-screen w-1/5 hidden md:flex">
            <SideBar/>
        </div>
    </div>
    <slot />
    <footer>this is footer</footer>
  </div>
</template>
<script>
export default {};
</script>
<style lang=""></style>
