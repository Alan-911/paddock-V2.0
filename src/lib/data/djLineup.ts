export type DJSlot = {
  day: string;
  short: string;
  djName: string;
  genre: string;
  time: string;
  isSpecial?: boolean;
  specialLabel?: string;
};

export const djLineup: DJSlot[] = [
  { day: 'Monday',    short: 'MON', djName: 'Industry Night', genre: 'Chill / Lounge',       time: '7PM – 1AM' },
  { day: 'Tuesday',   short: 'TUE', djName: 'Games Night',    genre: 'PS/FIFA & Pool Tournaments', time: '7PM – 2AM', isSpecial: true, specialLabel: 'PROMO NIGHT' },
  { day: 'Wednesday', short: 'WED', djName: 'Mid-Week Vibe',  genre: 'Afrobeats',            time: '9PM – 2AM' },
  { day: 'Thursday',  short: 'THU', djName: 'Ladies Affair',  genre: 'R&B / Amapiano',       time: '9PM – 3AM', isSpecial: true, specialLabel: 'LADIES NIGHT' },
  {
    day: 'Friday', short: 'FRI', djName: 'Epic Fridays',   genre: 'Afrobeats / Dancehall', time: '10PM – 4AM',
    isSpecial: true, specialLabel: 'MAIN EVENT',
  },
  {
    day: 'Saturday', short: 'SAT', djName: 'Saturday Turnup', genre: 'Amapiano / Afrobeats',  time: '10PM – 5AM',
    isSpecial: true, specialLabel: 'WEEKEND PEAK',
  },
  { day: 'Sunday',    short: 'SUN', djName: 'Golden Oldies',  genre: 'Classic Hits / Oldies', time: '5PM – 12AM' },
];
