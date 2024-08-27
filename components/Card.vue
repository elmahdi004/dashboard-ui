<template>
<Card class="">
    <CardHeader class="p-0">
        <div class="flex justify-between items-center p-4">
            <p>{{ data.title }}</p>
            <Badge :class="data.progression > 0 ? 'bg-green-400' : 'bg-red-400'">{{ data.progression + '%' }}</Badge>
        </div>
    </CardHeader>
    <CardContent class="p-0">
        <div class="flex justify-end text-[48px] font-[800] border-b p-4">
            <span class=" text-neutral-300">$</span>
            <span>2324</span>
        </div>
    </CardContent>
    <CardFooter class="p-0">
        <div class="flex w-full justify-between items-center p-4">
            <div class="text-[12px] flex items-center">
                <div class=" bg-neutral-100 rounded-md p-[2px]">
                    <Icon :name="data.icon" class="mx-1 mt-1" style="color: black" />
                </div>
                <span class="ms-1">{{ data.description }}</span>
            </div>
            <Button variant="outline">{{ 'View ' + data.title.toLowerCase() }}</Button>
        </div>
    </CardFooter>
</Card>
</template>

<script setup>
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
const props = defineProps([
    'data'
]);
</script>

<style  scoped>

</style>