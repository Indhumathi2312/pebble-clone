import { Product, CategoryItem } from '@/types';

export const products: Product[] = [
  {
    id: 'prod-1',
    name: 'Logo Polo Red',
    price: 45,
    rating: 5.0,
    reviewCount: 18,
    image: '/images/LogoPoloRed-121.jpg',
    secondaryImage: '/images/LogoPoloRed-122.jpg',
    category: 'boys',
    badges: [
      { text: 'New', color: 'green' },
      { text: 'Popular', color: 'blue' }
    ],
    colors: [
      { name: 'Red', hex: '#ef4444' },
      { name: 'Navy', hex: '#1e3a8a' }
    ],
    sizes: ['2Y', '3Y', '4Y', '5Y', '6Y']
  },
  {
    id: 'prod-2',
    name: 'Stripe Sun Hat',
    price: 15,
    rating: 4.9,
    reviewCount: 12,
    image: '/images/StripeSunHat-211.jpg',
    secondaryImage: '/images/StripeSunHat-212.jpg',
    category: 'accessories',
    colors: [
      { name: 'Blue Stripe', hex: '#3b82f6' }
    ]
  },
  {
    id: 'prod-3',
    name: 'Backpacks Kids',
    price: 22,
    originalPrice: 32,
    rating: 4.8,
    reviewCount: 24,
    image: '/images/ColorblockBackpack-156.jpg',
    secondaryImage: '/images/ColorblockBackpack-156_1.jpg',
    category: 'accessories',
    badges: [
      { text: 'Sale', color: 'red' }
    ],
    colors: [
      { name: 'Colorblock Green', hex: '#10b981' }
    ]
  },
  {
    id: 'prod-4',
    name: 'Stripe Backpack Brown',
    price: 55,
    rating: 5.0,
    reviewCount: 30,
    image: '/images/StripeBeanieBrown-102.jpg',
    secondaryImage: '/images/StripeBeanieBrown-103.jpg',
    category: 'accessories',
    badges: [
      { text: 'Hot', color: 'purple' }
    ],
    colors: [
      { name: 'Brown Stripe', hex: '#78350f' }
    ]
  },
  {
    id: 'prod-5',
    name: 'Sleeveless Top',
    price: 26,
    rating: 4.7,
    reviewCount: 15,
    image: '/images/SleevelessTopYellow-215.jpg',
    secondaryImage: '/images/SleevelessTopYellow-216.jpg',
    category: 'girls',
    colors: [
      { name: 'Soft Pink', hex: '#f472b6' },
      { name: 'Butter Yellow', hex: '#fde047' }
    ],
    sizes: ['2Y', '3Y', '4Y', '5Y']
  },
  {
    id: 'prod-6',
    name: 'Varsity Jacket Blue',
    price: 68,
    rating: 5.0,
    reviewCount: 42,
    image: '/images/VarsityJacketBlue-138.jpg',
    secondaryImage: '/images/VarsityJacketBlue-139.jpg',
    category: 'boys',
    badges: [
      { text: 'New', color: 'green' }
    ],
    colors: [
      { name: 'Navy Blue', hex: '#172554' },
      { name: 'Cream White', hex: '#fef3c7' }
    ],
    sizes: ['3Y', '4Y', '5Y', '6Y', '7Y']
  },
  {
    id: 'prod-7',
    name: 'Sweet Lilac Fleece Set',
    price: 48,
    originalPrice: 58,
    rating: 4.9,
    reviewCount: 29,
    image: '/images/FleeceHoodieBeige-28.jpg',
    secondaryImage: '/images/FleeceHoodieKids-192.jpg',
    category: 'sets',
    badges: [
      { text: 'Sale', color: 'red' }
    ],
    colors: [
      { name: 'Lilac', hex: '#c084fc' }
    ],
    sizes: ['2Y', '3Y', '4Y', '5Y']
  },
  {
    id: 'prod-8',
    name: 'Campus Spirit Cap',
    price: 18,
    rating: 4.8,
    reviewCount: 19,
    image: '/images/BucketHatGreen-106.jpg',
    secondaryImage: '/images/BucketHatGreen-107.jpg',
    category: 'accessories',
    colors: [
      { name: 'Multi Cap', hex: '#38bdf8' }
    ]
  }
];

export const categoryItems: CategoryItem[] = [
  {
    id: 'cat-1',
    name: 'Sweaters',
    count: 25,
    gender: 'boys',
    image: '/images/collection-tasb-10.jpg'
  },
  {
    id: 'cat-2',
    name: 'Sets',
    count: 30,
    gender: 'boys',
    image: '/images/collection-tasb-12.jpg'
  },
  {
    id: 'cat-3',
    name: 'Outerwear',
    count: 18,
    gender: 'boys',
    image: '/images/collection-tasb-13.jpg'
  },
  {
    id: 'cat-4',
    name: 'Shirts',
    count: 35,
    gender: 'boys',
    image: '/images/collection-tasb-14.jpg'
  },
  {
    id: 'cat-5',
    name: 'T-Shirts',
    count: 21,
    gender: 'boys',
    image: '/images/collection-tasb-15.jpg'
  },
  {
    id: 'cat-6',
    name: 'Accessories',
    count: 24,
    gender: 'boys',
    image: '/images/collection-tasb-6.jpg'
  },
  {
    id: 'cat-7',
    name: 'Dresses',
    count: 28,
    gender: 'girls',
    image: '/images/collection-tasb-7.jpg'
  },
  {
    id: 'cat-8',
    name: 'Skirts & Shorts',
    count: 22,
    gender: 'girls',
    image: '/images/collection-tasb-8.jpg'
  }
];
