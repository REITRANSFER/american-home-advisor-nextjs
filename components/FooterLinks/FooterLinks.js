import Link from 'next/link';
import Image from 'next/image';

export default function FooterLinks() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-6">
            <Link 
              href="/privacy" 
              className="text-sm text-gray-600 hover:text-[#0891b2] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link 
              href="/terms" 
              className="text-sm text-gray-600 hover:text-[#0891b2] transition-colors"
            >
              Terms of Service
            </Link>
            <Link 
              href="/contact" 
              className="text-sm text-gray-600 hover:text-[#0891b2] transition-colors"
            >
              Contact Us
            </Link>
          </div>
          
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} American Home Advisor. All rights reserved.
          </p>
        </div>
        
        <p className="mt-6 text-center text-xs text-gray-400 max-w-2xl mx-auto">
          American Home Advisor operates in Maryland. Licensed and insured. 
          This page does not constitute an offer to purchase real estate.
        </p>
      </div>
    </footer>
  );
}
