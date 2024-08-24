<template lang="">
  <div>
    <header class="flex justify-between items-center">
      <div>
        <p>Hi , welcome back el mahdi !</p>
        <h1>Dashboard</h1>
      </div>
      <!-- <div class="w-[150px] h-[30px] bg-neutral-300"></div> -->
    </header>
    <main>
      <section class="flex flex-col gap-y-4">
        <!-- <div class="flex gap-x-[10px]">
                    <div class="w-[100px] h-6 bg-neutral-300">
                    </div>
                    <div class="w-[100px] h-6 bg-neutral-300">
                    </div>
                    <div class="w-[100px] h-6 bg-neutral-300">
                    </div>
                </div>
                <div class="w-full h-[250px] bg-neutral-300">
                </div> -->
        <Tabs default-value="account" class="w-[400px]">
          <TabsList>
            <TabsTrigger v-for="(tab, index) in tabs" :key="index" :value="tab.trigger"> {{tab.trigger}} </TabsTrigger>
          </TabsList>
          <TabsContent :value="tab.trigger" v-for="(tab,ind) in tabs">
            {{tab.content}}
          </TabsContent>
        </Tabs>
        <div class="flex gap-x-[10px]">
          <div class="h-[100px] flex-1 bg-neutral-300"></div>
          <div class="h-[100px] flex-1 bg-neutral-300"></div>
          <div class="h-[100px] flex-1 bg-neutral-300"></div>
        </div>
      </section>
    </main>
    <footer>this is the footer</footer>
  </div>
</template>
<script setup>
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
const tabs = [
    {
        trigger : 'Today',
        content : 'Today'
    },
    {
        trigger : 'This Week',
        content : 'This Week'
    },
    {
        trigger : 'This Month',
        content : 'This Month'
    },
    {
        trigger : 'This Year',
        content : 'This Year'
    },
];

</script>
<style lang=""></style>
