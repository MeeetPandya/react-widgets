import { useEffect, useState } from "react";

export default function Marquee() {
  const [prices, setPrices] = useState({ ETH: 0, SOL: 0, BTC: 0 });

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const res = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=ethereum,solana,bitcoin&vs_currencies=usd"
        );
        const data = await res.json();
        setPrices({ ETH: data.ethereum.usd, SOL: data.solana.usd , BTC: data.bitcoin.usd });
      } catch (err) {
        console.error(err);
      }
    };
    fetchPrices();
    const interval = setInterval(fetchPrices, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-linear-60 from-black to-emerald-600 border text-white border-gray-700 rounded-2xl py-2 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap text-center text-sm font-medium w-screen ">
        ETH: ${prices.ETH} | SOL: ${prices.SOL} | BTC: ${prices.BTC} |
        ETH: ${prices.ETH} | SOL: ${prices.SOL} | BTC: ${prices.BTC} |
        ETH: ${prices.ETH} | SOL: ${prices.SOL} | BTC: ${prices.BTC} |
      </div>
      <style>{`
        .animate-marquee {
          display: inline-block;
          animation: marquee 25s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(95%); }
          100% { transform: translateX(-95%); }
          0% { transform: translateX(100%); }

        }
      `}</style>
    </div>
  );
}
