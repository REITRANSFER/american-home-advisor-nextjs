'use client';

import { SurveyProvider, useSurvey } from '../../context/SurveyContext';
import { pageConfigs } from '../../lib/surveyConfig';
import SurveyModal from '../../components/SurveyModal/SurveyModal';
import SurveyCard from '../../components/SurveyCard/SurveyCard';
import VSLSection from '../../components/VSLSection/VSLSection';
import FooterLinks from '../../components/FooterLinks/FooterLinks';

function ExpressHomebuyersContent() {
  return (
    <>
      <main className="relative min-h-screen bg-gray-50">
        <div className="relative z-10">
          {/* Phone number at top */}
          <div className="flex items-center justify-center gap-2 bg-white py-4 shadow-sm">
            <svg className="h-5 w-5 text-[#0891b2]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
            </svg>
            <a 
              href="tel:8882984807" 
              className="text-lg font-semibold text-gray-900 hover:text-[#0891b2] transition-colors"
            >
              (888) 298-4807
            </a>
          </div>

          {/* Hero Section */}
          <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8 lg:py-12">
            {/* Centered Hero content */}
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold leading-tight text-gray-900 md:text-5xl lg:text-6xl text-balance">
                Sell Your House Fast For Cash
              </h1>
              <p className="mt-4 text-lg text-gray-600">
                Get a fair cash offer in 24 hours. No fees, no repairs, no hassle. We buy houses in any condition.
              </p>
              
              {/* Trust indicators */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#22c55e]/10">
                    <svg className="h-5 w-5 text-[#22c55e]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-gray-700">No Fees</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#22c55e]/10">
                    <svg className="h-5 w-5 text-[#22c55e]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-gray-700">No Repairs</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#22c55e]/10">
                    <svg className="h-5 w-5 text-[#22c55e]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-gray-700">Close Fast</span>
                </div>
              </div>
            </div>

            {/* VSL Video Section - Below hero */}
            <div className="mt-10 flex justify-center">
              <VSLSection />
            </div>

            {/* Survey Form - Below video */}
            <div className="mt-10 flex justify-center">
              <div className="w-full max-w-xl">
                <SurveyCard />
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="relative z-10 py-8">
            <FooterLinks />
          </div>
        </div>
      </main>
      <SurveyModal />
    </>
  );
}

export default function ExpressHomebuyersPage() {
  return (
    <SurveyProvider config={pageConfigs['express-homebuyers']}>
      <ExpressHomebuyersContent />
    </SurveyProvider>
  );
}
