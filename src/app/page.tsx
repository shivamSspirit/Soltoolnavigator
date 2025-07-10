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

      <div className="min-h-screen font-sans bg-gradient-to-br from-[#1A1A2E] via-[#0ABAB5] to-[#9945FF] flex items-center justify-center py-10">
        <div className="container max-w-4xl mx-auto p-6 rounded-3xl shadow-2xl bg-white/10 backdrop-blur-md border border-[#14F195]/30">
          <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-6 bg-gradient-to-r from-[#9945FF] via-[#14F195] to-[#00FFD0] bg-clip-text text-transparent drop-shadow-lg">
            Solana Developer Ecosystem Map
          </h1>
          <div className="flex justify-center mb-8">
            <div className="bg-white/20 rounded-xl px-6 py-4 shadow-lg border border-[#14F195]/20 max-w-xl">
              <p className="text-center text-lg md:text-xl font-medium text-gray-100">
                An interactive map of <span className="font-bold text-[#14F195]">{totalTools}</span> unique Solana development tools, categorized by function.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            {ecosystemData.map((category, index) => (
              <CategorySection key={index} category={category} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}