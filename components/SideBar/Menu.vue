<template lang="">
  <div class="mt-2 ps-3 flex flex-col">
    <div
      class="my-2 text-lg py-1 ps-2 cursor-pointer rounded-lg hover:bg-neutral-100 duration-100"
      v-for="(item, index) in items"
      :key="index"
    >
      <div class="flex items-center gap-x-2">
        <Icon :name="item.icon" size="20" style="color: black" />
        <p>{{ item.title }}</p>
      </div>
    </div>
  </div>
</template>
<script setup>
const items = ref([
  {
    title: "Overview",
    path: "/overview",
    icon: "grommet-icons:overview",
  },
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: "material-symbols:dashboard-outline",
  },
  {
    title: "Settings",
    path: "/settings",
    icon: "material-symbols:settings-outline",
  },
  {
    title: "Account",
    path: "/account",
    icon: "mdi:account-outline",
  },

  {
    title: "Profile",
    path: "/profile",
    icon: "iconamoon:profile",
  },
  {
    title: "Logout",
    path: "/logout",
    icon: "material-symbols:logout",
  },
]);
</script>
<style lang=""></style>
