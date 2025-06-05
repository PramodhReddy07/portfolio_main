import React from 'react';

export default function FunFact({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#F8FAFC] text-[#1E293B] dark:bg-[#F8FAFC] dark:text-[#1E293B] rounded-xl px-6 py-4 text-base font-semibold shadow-sm mb-4 border border-gray-200" style={{ display: 'inline-block' }}>
      {children}
    </div>
  );
} 