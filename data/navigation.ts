import { NavItem } from '@/types';

export const mainNavItems: NavItem[] = [
  {
    title: 'Shop',
    href: '#shop',
    dropdown: [
      { title: "Boy's Collection", href: '#categories' },
      { title: "Girl's Collection", href: '#categories' },
      { title: 'New Arrivals', href: '#hot' },
      { title: 'Best Sellers', href: '#hot' }
    ]
  },
  {
    title: 'Collections',
    href: '#collections',
    dropdown: [
      { title: 'Move Collection', href: '#outfit-for' },
      { title: 'Glow Collection', href: '#outfit-for' },
      { title: 'Study Collection', href: '#outfit-for' },
      { title: 'Roam Collection', href: '#outfit-for' }
    ]
  },
  {
    title: 'Pages',
    href: '#pages',
    dropdown: [
      { title: 'About Us', href: '#footer' },
      { title: 'Lookbook', href: '#lookbook' },
      { title: 'Our Reviews', href: '#reviews' }
    ]
  },
  {
    title: 'Features',
    href: '#features'
  }
];

export const footerNavigation = {
  shop: [
    { title: 'Boy’s Clothing', href: '#' },
    { title: 'Girl’s Clothing', href: '#' },
    { title: 'Outerwear & Jackets', href: '#' },
    { title: 'Backpacks & Accessories', href: '#' },
    { title: 'New In Sets', href: '#' }
  ],
  customerCare: [
    { title: 'Track Order', href: '#' },
    { title: 'Shipping & Delivery', href: '#' },
    { title: 'Returns & Exchanges', href: '#' },
    { title: 'Size Guide', href: '#' },
    { title: 'Contact Us', href: '#' }
  ],
  about: [
    { title: 'Our Story', href: '#' },
    { title: 'Organic Cotton Commitment', href: '#' },
    { title: 'Sustainability', href: '#' },
    { title: 'Press & Media', href: '#' },
    { title: 'Store Locator', href: '#' }
  ]
};
