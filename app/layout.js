import './globals.css';
import FacebookPixel from '@/components/FacebookPixel/FacebookPixel';
/* Path alias rebuild trigger */

export const metadata = {
  title: 'American Home Advisor',
  description: 'Get a real cash offer for your home within 24 hours. No fees, no commissions, no repairs required.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <FacebookPixel />
        {children}
      </body>
    </html>
  );
}
