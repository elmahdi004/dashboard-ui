<script setup lang="ts">
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
const loading = ref(false);
const addNewProduct = async ()=>{
    try {
        loading.value = true;
        await setTimeout(()=>{},4000);
    } catch (error) {
        
    }finally{
        loading.value = false;
    }
}
</script>

<template>
  <AlertDialog>
    <AlertDialogTrigger>
        <Button>add new product</Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Create new product</AlertDialogTitle>
        <AlertDialogDescription>
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction @click="addNewProduct()">
            <span v-if="!loading">Create</span>
            <Spinner v-else/>
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
</template>