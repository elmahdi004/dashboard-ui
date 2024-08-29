import { h } from 'vue'

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: 'id',
    header: () => h('div', { class: 'text-left' }, 'ID'),
    cell: ({ row }) => {
      const id = row.getValue('id');
      return h('div',{class : 'text-left font-medium'},id);
    },
  },
  {
    accessorKey: 'email',
    header: () => h('div', { class: 'text-left' }, 'Email'),
    cell: ({ row }) => {
      const email = row.getValue('email');
      return h('div',{class : 'text-left font-medium'},email);
    },
  },
  {
    accessorKey: 'status',
    header: () => h('div', { class: 'text-left' }, 'Status'),
    cell: ({ row }) => {
      const status = row.getValue('status');
      return h('div',{class : 'text-left font-medium'},status);
    },
  },
  {
    accessorKey: 'amount',
    header: () => h('div', { class: 'text-left' }, 'Amount'),
    cell: ({ row }) => {
      const amount = row.getValue('amount');
      return h('div',{class : 'text-left font-medium'},'$'+amount);
    },
  },
]