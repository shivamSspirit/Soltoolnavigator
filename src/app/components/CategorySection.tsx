// app/components/CategorySection.tsx
'use client';

import { useState } from 'react';
import { EcosystemCategory } from '../types';

export default function CategorySection({ category }: { category: EcosystemCategory }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 
        className="text-xl font-semibold cursor-pointer text-blue-600 flex items-center"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {category.category} ({category.tools.length} tools)
        <span className="ml-2 text-sm">
          {isExpanded ? '▲' : '▼'}
        </span>
      </h2>
      
      {isExpanded && (
        <>
          <p className="text-gray-900 mt-2 text-base font-medium">{category.description}</p>
          <ul className="mt-2 space-y-2">
            {category.tools.map((tool, index) => (
              <li key={index} className="border-t pt-2">
                <strong className="text-lg text-gray-900 font-semibold">{tool.name}</strong>: <span className="text-gray-800 text-base">{tool.description}</span><br />
                <span className="text-sm text-gray-700 font-medium">
                  Tags: {tool.tags?.join(', ') || 'None'}
                </span><br />
                {tool.repo === 'Not specified' ? (
                  <span className="text-gray-400">No repository available</span>
                ) : (
                  <a 
                    href={tool.repo} 
                    className="text-blue-500 hover:underline inline-flex items-center" 
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