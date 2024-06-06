export interface ListaTareas{
  id: string | number;
  description: string;
  status: ListaStatus;
  createdAt: string | Date;
}

export type ListaStatus = 'empty' | 'in-progress' | 'finished';

export type FilterStatus = ListaStatus | 'all'

export type Orders = 'newest' | 'oldest'
