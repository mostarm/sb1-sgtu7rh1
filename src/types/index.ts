export interface Talk {
  id: string;
  title: string;
  abstract: string;
  track: string;
  startTime: string;
  endTime: string;
  speakers: Speaker[];
  room: string;
}

export interface Speaker {
  id: string;
  name: string;
  bio: string;
  image: string;
  talks: Talk[];
}

export interface Sponsor {
  id: string;
  name: string;
  logo: string;
  website: string;
  category: 'platinum' | 'gold' | 'silver' | 'bronze';
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
  type: 'agenda' | 'favorite' | 'general';
}