import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Pebble — Official Store | Smartwatches, Wireless Audio & Power Banks',
  description: 'Shop official Pebble smartwatches, Bluetooth calling watches, wireless gaming TWS earbuds, neckbands, and fast charging power banks. High quality, 1-year warranty.',
  keywords: ['pebble smartwatch', 'pebble clone', 'smartwatch India', 'pebble cosmos ultra', 'gaming TWS', 'power bank'],
  openGraph: {
    title: 'Pebble — Official Store',
    description: 'India’s leading brand for smart wearable tech and audio gear.',
    url: 'https://pebble-clone.vercel.app',
    siteName: 'Pebble Official Store',
    images: [
      {
        url: 'https://pebble-little.myshopify.com/cdn/shop/files/1_1_2f8d070b-aa85-48ef-93e1-7d13f99478f7.jpg?v=1716377755',
        width: 1200,
        height: 630,
        alt: 'Pebble Smartwatches',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased text-gray-900 bg-white selection:bg-rose-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
