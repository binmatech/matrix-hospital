export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  icon: string;
  benefits: string[];
}

export interface Doctor {
  id: string;
  name: string;
  qualifications: string;
  specialty: string;
  department: string;
  experience: string;
  bio: string;
  image: string;
  availability: string[];
  contactEmail: string;
}

export interface Department {
  id: string;
  name: string;
  description: string;
  headOfDepartment: string;
  icon: string;
  servicesIncluded: string[];
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  date: string;
}

export interface Appointment {
  id: string;
  name: string;
  phone: string;
  email: string;
  department: string;
  doctor: string;
  date: string;
  timeSlot: string;
  message: string;
  status: 'Confirmed' | 'Pending' | 'Rescheduled';
  createdAt: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'General' | 'Appointments' | 'Services' | 'Emergency';
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}
