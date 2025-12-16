export interface Property {
  id: number;
  title: string;
  price: string;
  address: string;
  city: string;
  beds: number;
  baths: number;
  sqft: number;
  image: string;
  type: 'Sale' | 'Rent';
  featured?: boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  interest: 'Buying' | 'Selling' | 'Investing' | 'Other';
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}
