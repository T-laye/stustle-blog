export interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  views: number;
  description: string;
  image: string;
  post: string;
  _createdAt: string;
}

export interface Registration {
  _key: string; // Unique identifier for each registration
  _type: "registration"; // Type identifier
  name: string; // Registrant's name
  email: string; // Registrant's email address
  createdAt: string; // ISO format date (e.g., "2024-11-28T14:00:00Z")
}

export interface Event {
  _id: string;
  theme: string;
  slug: { current: string }; // Slug object with current value
  description: string;
  date: string; // ISO format date (e.g., "2024-11-28")
  time: string; // Time string (e.g., "14:00")
  location: string;
  link: string; // URL to the event
  image: {
    asset: { _ref: string; _type: string }; // Image reference in Sanity
    hotspot?: {
      x: number;
      y: number;
      height: number;
      width: number;
    }; // Optional for cropping
  };
  registrations: Registration[]; // Array of registration objects
  _createdAt: string; // ISO format creation date
  _updatedAt?: string; // Optional: ISO format update date
}