// app/components/CategorySection.tsx
'use client';

import { useState } from 'react';
import { EcosystemCategory } from '../types';

export default function CategorySection({ category }: { category: EcosystemCategory }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white/90 p-6 rounded-2xl shadow-lg border border-[#14F195] mb-2">
      <h2
        className="text-2xl font-extrabold cursor-pointer flex items-center gap-2 select-none transition-colors duration-200 text-gray-900 hover:text-[#14F195] mb-2"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span className="text-gray-900 font-extrabold">{category.category}</span>
        <span className="ml-2 text-base font-semibold text-gray-600">({category.tools.length} tools)</span>
        <span className={`ml-3 text-lg font-bold transition-transform duration-200 ${isExpanded ? 'rotate-180 text-[#14F195]' : 'text-gray-700'}`}>
          ▼
        </span>
      </h2>
      
      {isExpanded && (
        <>
          <p className="mt-2 text-base font-medium mb-4 text-gray-800">{category.description}</p>
          <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
            {category.tools.map((tool, index) => (
              <li
                key={index}
                className="relative rounded-2xl p-6 bg-white/90 border border-[#14F195] shadow-md hover:shadow-lg transition-shadow flex flex-col gap-2 min-h-[170px]"
              >
                <div className="flex items-center gap-3 mb-1">
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#14F195]/20 border border-[#14F195]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#14F195]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </span>
                  <strong className="text-lg font-bold text-gray-900">{tool.name}</strong>
                </div>
                <div className="text-base font-normal mb-1 text-gray-800">{tool.description}</div>
                <div className="text-xs font-medium mb-1">
                  <span className="bg-[#14F195]/10 text-[#14F195] px-2 py-1 rounded mr-2">Tags:</span>
                  <span className="text-gray-700">{tool.tags?.join(', ') || 'None'}</span>
                </div>
                {tool.repo === 'Not specified' ? (
                  <span className="text-gray-400 text-sm font-medium">No repository available</span>
                ) : (
                  <a
                    href={tool.repo}
                    className="inline-flex items-center font-bold transition-colors duration-200 text-sm mt-1 text-[#14F195] hover:text-[#9945FF]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    View Repository
                  </a>
                )}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}