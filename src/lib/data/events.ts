export type Event = {
  id: string;
  date: string;
  month: string;
  title: string;
  description: string;
  tag: string;
  isHighlighted?: boolean;
};

export const events: Event[] = [
  {
    id: '1',
    date: '09',
    month: 'MAY',
    title: 'Afrobeats Friday',
    description: 'The biggest Afrobeats night in Kigali. DJ Krest takes the decks all night long.',
    tag: 'WEEKLY',
    isHighlighted: true,
  },
  {
    id: '2',
    date: '10',
    month: 'MAY',
    title: 'Saturday Takeover',
    description: 'DJ Monarch drops an exclusive set. VIP tables available — book before they sell out.',
    tag: 'FEATURED',
    isHighlighted: false,
  },
  {
    id: '3',
    date: '17',
    month: 'MAY',
    title: 'Amapiano Night',
    description: 'A special themed night dedicated to the hottest sound in Africa right now.',
    tag: 'SPECIAL EVENT',
    isHighlighted: false,
  },
];
