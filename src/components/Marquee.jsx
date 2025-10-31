import { useEffect, useState } from "react";

export default function Marquee() {
  const [prices, setPrices] = useState({ ETH: 0, SOL: 0 });

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const res = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=ethereum,solana&vs_currencies=usd"
        );
        const data = await res.json();
        setPrices({ ETH: data.ethereum.usd, SOL: data.solana.usd });
      } catch (err) {
        console.error(err);
      }
    };
    fetchPrices();
    const interval = setInterval(fetchPrices, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#141414] border border-gray-700 rounded-2xl py-2 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap text-center text-sm font-medium">
        ETH: ${prices.ETH} | SOL: ${prices.SOL}
      </div>
      <style>{`
        .animate-marquee {
          display: inline-block;
          animation: marquee 15s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  );
}
