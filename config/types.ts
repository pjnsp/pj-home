export interface Stat {
  value: string;
  label: string;
}

export interface Group {
  tag: string;
  name: string;
  image: string;
  description: string;
}

export interface Value {
  name: string;
  tier: 1 | 2 | 3;
  description: string;
}

export interface EventDetail {
  label: string;
  value: string;
}

export interface SiteEvent {
  primary: boolean;
  month: string;
  title: string;
  description: string;
  url?: string;
  urlLabel?: string;
  details?: EventDetail[];
  dateRange?: string;
}

export interface Events {
  showMoreEventsSoon: boolean;
  items: SiteEvent[];
}

export interface Person {
  role: string;
  name: string;
  image: string;
  description: string;
}

export interface People {
  priests: Person[];
  leaders: Person[];
}

export interface Contact {
  role: string;
  name: string;
  phone: string;
  phoneUri: string;
}

export interface SocialLink {
  platform: string;
  url: string;
}

export interface SiteConfig {
  stats: Stat[];
  groups: Group[];
  values: Value[];
  events: Events;
  people: People;
  contacts: Contact[];
  social: SocialLink[];
}
