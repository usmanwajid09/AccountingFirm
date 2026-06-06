"use client";

import { useState, useEffect } from "react";

export default function RunwayCalculator() {
  const [cash, setCash] = useState(200000);
  const [costs, setCosts] = useState(50000);
  const [collections, setCollections] = useState(30000);
  const [runway, setRunway] = useState(10);
  const [percent, setPercent] = useState(50);
  const [unitText, setUnitText] = useState("Months of Runway");

  useEffect(() => {
    const netBurn = costs - collections;
    if (netBurn <= 0) {
      setRunway("99+");
      setPercent(100);
      setUnitText("Months (Cash Flow Positive)");
    } else {
      const months = Math.min(99, Math.round(cash / netBurn));
      setRunway(months);
      setPercent(Math.min(100, (months / 24) * 100)); // normalized against 24 months
      setUnitText(months === 1 ? "Month of Runway" : "Months of Runway");
    }
  }, [cash, costs, collections]);

  return (
    <div className="bg-ia-bg-light border border-ia-border rounded-md p-8 md:p-12 shadow-light max-w-[840px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Sliders Input side */}
        <div className="flex flex-col gap-6 text-left">
          
          {/* Cash Reserves */}
          <div className="flex flex-col gap-2">
            <div className="flex justify-between font-bold text-white text-[14px]">
              <span>Cash Reserves</span>
              <span className="text-ia-blue">£{cash.toLocaleString()}</span>
            </div>
            <input 
              type="range" 
              min="10000" 
              max="1000000" 
              step="10000" 
              value={cash}
              onChange={(e) => setCash(parseInt(e.target.value))}
              className="w-full h-1.5 bg-ia-border rounded-lg appearance-none cursor-pointer accent-ia-blue"
            />
          </div>

          {/* Monthly Costs */}
          <div className="flex flex-col gap-2">
            <div className="flex justify-between font-bold text-white text-[14px]">
              <span>Monthly Operating Costs</span>
              <span className="text-ia-blue">£{costs.toLocaleString()}</span>
            </div>
            <input 
              type="range" 
              min="5000" 
              max="200000" 
              step="5000" 
              value={costs}
              onChange={(e) => setCosts(parseInt(e.target.value))}
              className="w-full h-1.5 bg-ia-border rounded-lg appearance-none cursor-pointer accent-ia-blue"
            />
          </div>

          {/* Monthly Collections */}
          <div className="flex flex-col gap-2">
            <div className="flex justify-between font-bold text-white text-[14px]">
              <span>Monthly Income / Collections</span>
              <span className="text-ia-blue">£{collections.toLocaleString()}</span>
            </div>
            <input 
              type="range" 
              min="0" 
              max="200000" 
              step="5000" 
              value={collections}
              onChange={(e) => setCollections(parseInt(e.target.value))}
              className="w-full h-1.5 bg-ia-border rounded-lg appearance-none cursor-pointer accent-ia-blue"
            />
          </div>

        </div>

        {/* Output Results display */}
        <div className="bg-ia-navy text-ia-white rounded-md p-10 flex flex-col justify-center items-center shadow-md">
          <span className="text-[12px] font-bold text-ia-blue tracking-[0.12em] uppercase mb-2">Projected Runway</span>
          <span className="text-[64px] font-extrabold leading-none mb-1 text-ia-white">{runway}</span>
          <span className="text-[14px] font-semibold text-ia-blue mb-6">{unitText}</span>
          
          {/* Progress bar */}
          <div className="w-full h-2.5 bg-ia-navy-alt rounded-full overflow-hidden">
            <div 
              className="h-full bg-ia-blue rounded-full transition-all duration-300"
              style={{ width: `${percent}%` }}
            />
          </div>
        </div>

      </div>
    </div>
  );
}
