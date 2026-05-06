export type ResidentDJ = {
  id: string;
  name: string;
  realName?: string;
  image: string;
  genre: string;
  tagline: string;
  bio: string;
  achievements: string[];
};

export const residentDJs: ResidentDJ[] = [
  {
    id: 'dj-flixx',
    name: 'DJ Flixx',
    image: 'https://images.unsplash.com/photo-1571266028243-3716f02d2d2e?auto=format&fit=crop&q=80&w=800',
    genre: 'Open-Format',
    tagline: 'Best Female Deejay of 2025',
    bio: 'DJ Flixx (also known as DJ Flix) is a popular female DJ based in Kigali who has gained significant recognition for her energetic open-format sets. She is the official DJ for the renowned Rwandan singer The Ben and frequently performs at major clubs and events.',
    achievements: [
      'Best DJ of the Year at Diva Awards Rwanda 2025',
      'Official DJ for The Ben',
      'Resident performer at Atmosphera Kigali'
    ]
  },
  {
    id: 'dj-lamper',
    name: 'DJ Lamper',
    realName: 'Eric Livio Lamperti',
    image: 'https://images.unsplash.com/photo-1542157585-ef208ce82a8e?auto=format&fit=crop&q=80&w=800',
    genre: 'Afro House',
    tagline: 'Pioneer of Kigali\'s Afro House Movement',
    bio: 'Born in Italy to a Rwandan and Italian family, DJ Lamper moved to Kigali in 2020. He has become a leading figure in Rwanda\'s electronic music scene by fusing traditional Rwandan musical elements with modern electronic beats.',
    achievements: [
      'Founder of the groundbreaking Atmosfera Kigali event brand',
      'Headlined major events including "Fiesta" and "Twese"',
      'Performed at the prestigious BK Arena'
    ]
  },
  {
    id: 'dj-toxxyk',
    name: 'DJ Toxxyk',
    realName: 'Shema Arnold de Bosscher',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=800',
    genre: 'Open-Format / Urban',
    tagline: 'Creator of the Toxic Experience',
    bio: 'One of Rwanda\'s most influential and versatile DJs. Starting his career at 20, he is celebrated for bringing global attention to Rwanda\'s electronic and urban music scenes. Beyond DJing, he is an accomplished music producer.',
    achievements: [
      'Shared stages with Burna Boy, Davido, and John Legend at Move Afrika',
      'Released debut EP "AYDEN" in 2022',
      'Signature "Toxic Experience" event series'
    ]
  },
  {
    id: 'dj-crush',
    name: 'DJ Crush',
    realName: 'Liliane Tuyambaze',
    image: 'https://images.unsplash.com/photo-1606821369324-469b82142278?auto=format&fit=crop&q=80&w=800',
    genre: 'House / Afrobeat / Amapiano',
    tagline: 'Fast-Rising Female DJ Sensation',
    bio: 'Also known as Crush Wabo, she began DJing at age 12. Capable of blending House, Techno, Afrobeat, and Amapiano seamlessly, she is recognized for her energetic performances at major sporting events and popular nightlife spots.',
    achievements: [
      'Performed at the Amahoro Stadium for the Heroes Cup 2026 final',
      'Official DJ at the Tour du Rwanda',
      'Recognized for live mixing in radio and studio sessions'
    ]
  },
  {
    id: 'deejay-kelly250',
    name: 'Deejay Kelly250',
    realName: 'Omar Ngamije',
    image: 'https://images.unsplash.com/photo-1516997121675-4c2d1684aa3e?auto=format&fit=crop&q=80&w=800',
    genre: 'Electronic / Club Music',
    tagline: 'Pioneer of Rwanda\'s Club Music Scene',
    bio: 'Considered one of Kigali\'s most influential DJs with a career spanning over 15 years. Starting as a roadshow DJ in 2009, he moved up to become a cornerstone of the Rwandan nightlife experience and a key member of the Ruffcuts DJs collective.',
    achievements: [
      'Over 15 years pioneering Rwanda\'s club scene',
      'Completed a 24-hour non-stop DJ performance record in 2021',
      'Key member of the Ruffcuts DJs collective'
    ]
  }
];
