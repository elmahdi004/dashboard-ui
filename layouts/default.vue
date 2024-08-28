<template lang="">
  <div>
    <div class="flex w-screen">
      <div class="h-screen  w-full flex md:hidden">
        <div class="flex flex-col w-full">
          <div class="flex p-3 gap-x-3 justify-between">
            <SideBarLogo />
            <Icon
              class="cursor-pointer"
              @click="toggoleOpen(true)"
              v-if="!open"
              name="quill:hamburger"
              size="30"
              color="black"
            />
            <Icon
              class="cursor-pointer"
              @click="toggoleOpen(false)"
              v-else
              name="material-symbols:close"
              size="30"
              color="black"
            />
          </div>
          <SideBarMenu v-if="open" />
          <div v-else class="w-full h-screen p-8">
            <slot/>
          </div>
        </div>
      </div>
      <div class="hidden md:flex w-full">
        <SideBar />
        <div class="w-full h-screen p-8">
          <slot/>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const open = ref(true);
const toggoleOpen = (value) => {
  open.value = value;
};
</script>
<style lang=""></style>
