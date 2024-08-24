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
            <highchart :options="options" />
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
let currentCategorie = ref([
            'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ]);
let categories = ref([]);
const options = computed(()=>{
return {
    chart: {
        type: 'spline'
    },
    title: {
        text: ''
    },
    xAxis: {
        categories:currentCategorie ,
        accessibility: {
            description: 'Months of the year'
        },
        gridLineColor : 'transparent',
    },
    yAxis: {
        title: {
            text: 'Temperature'
        },
        labels: {
            format: '{value}°'
        },
        gridLineColor : 'transparent',

    },
    tooltip: {
        crosshairs: true,
        shared: true
    },
    plotOptions: {
        spline: {
            marker: {
                radius: 4,
                lineColor: '#666666',
                lineWidth: 1
            }
        }
    },
    series: [{
        name: 'Tokyo',
        marker: {
            symbol: 'square'
        },
        data: [5.2, 5.7, 8.7, 13.9, 18.2, 21.4, 25.0, {
            y: 26.4,
            marker: {
                symbol: 'url(https://www.highcharts.com/samples/graphics/sun.png)'
            },
            accessibility: {
                description: 'Sunny symbol, this is the warmest point in the ' +
                    'chart.'
            }
        }, 22.8, 17.5, 12.1, 7.6]

    }, {
        name: 'Bergen',
        marker: {
            symbol: 'diamond'
        },
        data: [{
            y: 1.5,
            marker: {
                symbol: 'url(https://www.highcharts.com/samples/graphics/snow.png)'
            },
            accessibility: {
                description: 'Snowy symbol, this is the coldest point in the ' +
                    'chart.'
            }
        }, 1.6, 3.3, 5.9, 10.5, 13.5, 14.5, 14.4, 11.5, 8.7, 4.7, 2.6]
    }]
};

});
</script>
<style lang=""></style>
