import { Ticket } from '../models/ticket';

const dateToday: Date = new Date();

export const TICKETS_MOCKED: Ticket[] = [
  {
    title: 'Welcome meeting !',
    description: '',
    date: dateToday,
    author: 'Paul'
  },
  {
    title: 'Stand up',
    description: 'Description du voyage',
    date: dateToday,
    author: 'Anakin'
  },
];
