import { CalendarItem } from "./model.js";

export const data: CalendarItem[] = [
  {
    type: 'event',
    title: 'Dentist',
    time: { day: 1, hours: 10, minutes: 30 },
    duration: 90
  },
  {
    type: 'task',
    title: 'Clean the house',
    time: { day: 1, hours: 8, minutes: 15 },
    done: false
  },
  {
    type: 'task',
    title: 'Buy groceries',
    time: { day: 1, hours: 12, minutes: 45 },
    done: true
  },
  {
    type: 'event',
    title: 'Meeting',
    time: { day: 2, hours: 14, minutes: 20 },
    duration: 60
  },
  {
    type: 'task',
    title: 'Pick up the kids',
    time: { day: 2, hours: 16, minutes: 30 },
    done: false
  },
  {
    type: 'event',
    title: 'Gym Session',
    time: { day: 3, hours: 17, minutes: 0 },
    duration: 60
  },
  {
    type: 'task',
    title: 'Submit report',
    time: { day: 3, hours: 9, minutes: 0 },
    done: false
  },
  {
    type: 'event',
    title: 'Birthday Party',
    time: { day: 4, hours: 19, minutes: 30 },
    duration: 120
  },
  {
    type: 'task',
    title: 'Study for exam',
    time: { day: 4, hours: 13, minutes: 0 },
    done: false
  },
  {
    type: 'event',
    title: 'Concert',
    time: { day: 5, hours: 20, minutes: 0 },
    duration: 120
  },
  {
    type: 'task',
    title: 'Pay bills',
    time: { day: 5, hours: 10, minutes: 0 },
    done: true
  },
  {
    type: 'event',
    title: 'Team Building Activity',
    time: { day: 6, hours: 11, minutes: 0 },
    duration: 180
  },
  {
    type: 'task',
    title: 'Call Mom',
    time: { day: 6, hours: 16, minutes: 25 },
    done: false
  },
  {
    type: 'event',
    title: 'Movie Night',
    time: { day: 7, hours: 18, minutes: 30 },
    duration: 120
  },
  {
    type: 'task',
    title: 'Workout',
    time: { day: 7, hours: 9, minutes: 0 },
    done: true
  },
  {
    type: 'event',
    title: 'Conference',
    time: { day: 8, hours: 10, minutes: 0 },
    duration: 240
  },
  {
    type: 'task',
    title: 'Update resume',
    time: { day: 8, hours: 14, minutes: 0 },
    done: false
  },
  {
    type: 'event',
    title: 'Family Dinner',
    time: { day: 9, hours: 19, minutes: 0 },
    duration: 90
  },
  {
    type: 'task',
    title: 'Read a book',
    time: { day: 9, hours: 12, minutes: 0 },
    done: false
  },
  {
    type: 'event',
    title: 'Charity Event',
    time: { day: 10, hours: 15, minutes: 0 },
    duration: 180
  },
  {
    type: 'task',
    title: 'Plan vacation',
    time: { day: 10, hours: 9, minutes: 0 },
    done: true
  },
  {
    type: 'event',
    title: 'Volunteer Work',
    time: { day: 11, hours: 13, minutes: 0 },
    duration: 120
  },
  {
    type: 'task',
    title: 'Grocery shopping',
    time: { day: 11, hours: 11, minutes: 0 },
     done: true
  },
  {
    type: 'event',
    title: 'Workshop',
    time: { day: 12, hours: 9, minutes: 0 },
    duration: 240
  },
  {
    type: 'task',
    title: 'Prepare presentation',
    time: { day: 12, hours: 14, minutes: 0 },
    done: false
  }  
];
