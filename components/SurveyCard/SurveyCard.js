'use client';

import { useState } from 'react';
import { useSurvey } from '../../context/SurveyContext';
import AddressInput from '../AddressInput/AddressInput';

export default function SurveyCard() {
  const { openSurvey } = useSurvey();
  const [address, setAddress] = useState('');

  function handleAddressSelect(addr) {
    setAddress(addr);
    setTimeout(() => openSurvey(addr), 200);
  }

  function handleSubmit() {
    if (address.trim()) {
      openSurvey(address);
    }
  }

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg md:p-8">
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-bold text-gray-900">Get Your Cash Offer</h2>
        <p className="mt-2 text-gray-600">Enter your property address to get started</p>
      </div>
      
      <div className="space-y-4">
        <AddressInput
          id="surveyCardAddress"
          placeholder="Enter your property address..."
          value={address}
          onChange={setAddress}
          onAddressSelect={handleAddressSelect}
          inputClassName="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-[#0891b2] focus:outline-none focus:ring-2 focus:ring-[#0891b2]/20"
        />
        <button 
          onClick={handleSubmit}
          className="w-full rounded-lg bg-[#22c55e] px-6 py-4 text-lg font-semibold text-white transition-colors hover:bg-[#16a34a] focus:outline-none focus:ring-2 focus:ring-[#22c55e]/50"
        >
          Get My Cash Offer
        </button>
      </div>

      <div className="mt-4 flex items-center justify-center gap-6">
        <div className="flex items-center gap-2">
          <svg className="h-4 w-4 text-[#22c55e]" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          <span className="text-sm text-gray-600">No Obligation</span>
        </div>
        <div className="flex items-center gap-2">
          <svg className="h-4 w-4 text-[#22c55e]" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          <span className="text-sm text-gray-600">24hr Response</span>
        </div>
      </div>
    </div>
  );
}
