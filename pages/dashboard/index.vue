<template lang="">
    <div>
      <header class="flex justify-between items-center">
        <div>
          <p>All your transactions</p>
          <h1>Transactions</h1>
        </div>
      </header>
      <div class="py-4">
        <DataTable :data="data" :columns="columns"/>
      </div>
  </div>
  </template>
  <script setup>
  import {columns} from './columns.ts';
  const data = ref([
  { id: 1, email: 'jane48@yahoo.com', status: 'active', amount: 537 },
  { id: 2, email: 'smith89@outlook.com', status: 'inactive', amount: 218 },
  { id: 3, email: 'brown25@hotmail.com', status: 'pending', amount: 763 },
  { id: 4, email: 'john13@gmail.com', status: 'active', amount: 456 },
  { id: 5, email: 'doe56@yahoo.com', status: 'inactive', amount: 890 },
  { id: 6, email: 'taylor33@outlook.com', status: 'active', amount: 274 },
  { id: 7, email: 'anderson77@hotmail.com', status: 'pending', amount: 182 },
  { id: 8, email: 'thomas92@gmail.com', status: 'active', amount: 399 },
  { id: 9, email: 'jackson45@yahoo.com', status: 'inactive', amount: 521 },
  { id: 10, email: 'white81@outlook.com', status: 'pending', amount: 634 },
  { id: 11, email: 'john64@hotmail.com', status: 'active', amount: 752 },
  { id: 12, email: 'jane29@gmail.com', status: 'inactive', amount: 305 },
  { id: 13, email: 'doe73@yahoo.com', status: 'pending', amount: 815 },
  { id: 14, email: 'smith41@outlook.com', status: 'active', amount: 492 },
  { id: 15, email: 'brown57@hotmail.com', status: 'inactive', amount: 672 },
  { id: 16, email: 'taylor88@gmail.com', status: 'active', amount: 129 },
  { id: 17, email: 'anderson36@yahoo.com', status: 'pending', amount: 941 },
  { id: 18, email: 'thomas22@outlook.com', status: 'active', amount: 387 },
  { id: 19, email: 'jackson60@hotmail.com', status: 'inactive', amount: 524 },
  { id: 20, email: 'white19@gmail.com', status: 'pending', amount: 246 }
]);
  </script>
  <style lang="">
      
  </style>