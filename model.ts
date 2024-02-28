interface Daytime {
  day: number;
  hours: number;
  minutes: number;
}

interface BaseItem {
  title: string;
  time: Daytime;
}

export interface EventItem extends BaseItem {
  type: 'event';
  duration: number;
}

export interface TaskItem extends BaseItem {
  type: 'task';
  done: boolean;
}

export type CalendarItem = EventItem | TaskItem;
