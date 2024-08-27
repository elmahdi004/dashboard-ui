<template>
    <highchart :options="options" />
</template>

<script setup>
const props = defineProps({
    data : {
        type : Object
    }
});
const options = computed(()=>{
return {
    chart: {
        type: 'spline'
    },
    title: {
        text: ''
    },
    xAxis: {
        categories:'' ,
        accessibility: {
            description: 'Months of the year'
        },
        gridLineColor : 'transparent',
    },
    yAxis: {
        title: {
            text: ''
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
        // line :{
        //     marker : {
        //         enabled : false,
        //     }
        // },
        spline: {
            marker: {
                enabled : false,
                radius: 4,
                lineColor: '#666666',
                lineWidth: 1
            }
        }
    },
    series: [{
        name: 'line',
        marker: {
            symbol: 'square'
        },
        data: props.data

    }]
};

});
</script>

<style  scoped>

</style>