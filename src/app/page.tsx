// app/page.tsx
import Head from 'next/head';
import CategorySection from './components/CategorySection';
import { ecosystemData } from './ecosystemdata';

export default function EcosystemMap() {
  const totalTools = ecosystemData.reduce(
    (total, category) => total + category.tools.length,
    0
  );

  return (
    <>
      <Head>
        <title className='text-amber-900'>Solana Developer Ecosystem Map</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="bg-gray-100 font-sans min-h-screen">
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold text-center mb-6 text-amber-700">
            Solana Developer Ecosystem Map
          </h1>
          <p className="text-center mb-4 text-amber-950">
            An interactive map of {totalTools} unique Solana development tools, categorized by function.
          </p>

          <div className="space-y-4">
            {ecosystemData.map((category, index) => (
              <CategorySection key={index} category={category} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}