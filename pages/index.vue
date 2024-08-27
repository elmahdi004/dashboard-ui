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
        <Tabs :default-value="tabs[0].trigger" class="">
          <TabsList>
            <TabsTrigger
              id="trigger"
              v-for="(tab, index) in tabs"
              :key="index"
              :value="tab.trigger"
            >
              {{ tab.trigger }}
            </TabsTrigger>
          </TabsList>
          <TabsContent :value="tab.trigger" v-for="(tab, ind) in tabs">
            <chart :data="tab.data" :lineData="tab.lineData" />
          </TabsContent>
        </Tabs>
        <div class=" grid grid-cols-3 gap-x-5">
                <Card v-for="(card, index) in cards" :key="index" :data="card"/>
        </div>
      </section>
    </main>
    <footer>this is the footer</footer>
  </div>
</template>
<script setup>
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const tabs = [
  {
    trigger: "Today",
    content: "Today",
    data: [
      5.2, 5.7, 8.7, 13.9, 0.2, 21.4, 2.0, 22.8, 17.5, 12.1, 7.6, 5.2, 5.7, 8.7,
      13.9, 0.2, 21.4, 2.0, 22.8, 17.5, 12.1, 7.6, 3, 4, 2, 3,
    ],
    lineData: Array.from({ length: 24 }, (_, i) => i),
  },
  {
    trigger: "This Week",
    content: "This Week",
    data: [5.2, 5.7, 8.7, 21.9, 0.2, 21.4, 25.01],
    lineData: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
  },
  {
    trigger: "This Month",
    content: "This Month",
    data: [2.2, 5.7, 81.7, 1123.9, 0.2, 35.4, 25.0, 11.8, 17.5, 12.1, 7.6],
    lineData: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
  },
  {
    trigger: "This Year",
    content: "This Year",
    data: [5.2, 5.7, 8.7, 13.9, 0.2, 21.4, 43.0, 12.8, 17.5, 12.1, 7.6,22],
    lineData: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
  },
];
let currentCategorie = ref([
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
]);
const cards = ref([
    {
        title : 'Sales',
        progression : 20,
        amount : 230,
        description : 'Sales of March 2024',
        icon : 'mdi:sale-outline'
    },
    {
        title : 'Refunds',
        progression : 230,
        amount : 230,
        description : 'Refunds of March 2024',
        icon : 'gridicons:refund'
    },
    {
        title : 'Payouts',
        progression : -20,
        amount : 230,
        description : 'Payouts of March 2024',
        icon : 'material-symbols:money-outline'
    },
]);
</script>
<style lang=""></style>
