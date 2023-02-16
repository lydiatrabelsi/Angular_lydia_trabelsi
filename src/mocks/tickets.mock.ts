import { Ticket } from '../models/ticket';

const dateToday: Date = new Date();

export const TICKETS_MOCKED: Ticket[] = [
  {
    title: 'Welcome meeting !',
    description: '',
    date: dateToday,
    student: 'Lydia',
    major : 'SI'
  },
  {
    title: 'Stand up',
    description: 'Description du voyage',
    date: dateToday,
    student: 'Sara',
    major : 'GE'
  },
];
