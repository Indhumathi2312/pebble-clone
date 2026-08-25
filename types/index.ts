export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating?: number;
  reviewCount?: number;
  image: string;
  secondaryImage?: string;
  category: 'boys' | 'girls' | 'accessories' | 'sets';
  itemCount?: number;
  badges?: { text: string; color: 'green' | 'blue' | 'red' | 'purple' }[];
  colors?: { name: string; hex: string; border?: string }[];
  sizes?: string[];
  description?: string;
  overlayProduct?: {
    title: string;
    price: string;
    image: string;
  };
}

export interface CategoryItem {
  id: string;
  name: string;
  count: number;
  image: string;
  gender: 'boys' | 'girls';
}

export interface HeroSlide {
  id: string;
  subtitle: string;
  title: string;
  buttonText: string;
  image: string;
  bgColor: string;
  tag?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  avatar?: string;
  rating: number;
  comment: string;
  title: string;
  date: string;
  verified: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor?: string;
  selectedSize?: string;
}

export interface NavItem {
  title: string;
  href: string;
  dropdown?: { title: string; href: string }[];
}
