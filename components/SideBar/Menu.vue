<template lang="">
    <div class="mt-2 ps-3 flex flex-col">
        <div class="my-2 text-lg py-1 ps-2 cursor-pointer rounded-lg hover:bg-neutral-100 duration-100 " v-for="(item, index) in items" :key="index">
            <div class="flex items-center gap-x-2">
                <Icon name="uil:github" style="color: black" />
                <p>                {{item.title}}                </p>
            </div>
        </div>
    </div>
</template>
<script setup>
const items = ref([
    {
        title : 'Overview',
        path : '/overview'
    },
    {
        title : 'Dashboard',
        path : '/dashboard'
    },
    {
        title : 'Settings',
        path : '/settings'
    },
    {
        title : 'Account',
        path : '/account'
    },
    {
        title : 'Overview',
        path : '/overview'
    },
    {
        title : 'Profile',
        path : '/profile'
    },
]);
</script>
<style lang="">
    
</style>