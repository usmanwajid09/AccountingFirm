"use client";

import { useState, useEffect } from "react";

export default function BookkeepingROICalculator() {
  const [hours, setHours] = useState(5); // hours per week
  const [rate, setRate] = useState(60);  // hourly value rate in GBP
  const [software, setSoftware] = useState(45); // current software/admin costs
  const [diyCost, setDiyCost] = useState(0);
  const [savings, setSavings] = useState(0);
  const [hoursSaved, setHoursSaved] = useState(0);

  useEffect(() => {
    const monthlyHours = Math.round(hours * 4.33);
    const timeCost = monthlyHours * rate;
    const totalDiyCost = timeCost + software;
    const outsourcedFee = 150; // standard mock outsourcing fee
    
    setDiyCost(totalDiyCost);
    setHoursSaved(monthlyHours);
    setSavings(Math.max(0, totalDiyCost - outsourcedFee));
  }, [hours, rate, software]);

  return (
    <div className="bg-ia-bg-light border border-ia-border rounded-md p-8 md:p-12 shadow-light max-w-[840px] mx-auto">
      <div className="text-center mb-8">
        <span className="text-[12px] font-bold text-ia-blue tracking-[0.15em] uppercase block mb-2">ROI Calculator</span>
        <h3 className="text-[24px] sm:text-[28px] font-bold text-white">Bookkeeping Value & Savings Calculator</h3>
        <p className="text-[14px] text-ia-text-secondary mt-1 max-w-[500px] mx-auto font-light">See how much time and money you save by outsourcing your books to our Chartered Accountants.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Sliders Input side */}
        <div className="flex flex-col gap-6 text-left">
          
          {/* Weekly Hours */}
          <div className="flex flex-col gap-2">
            <div className="flex justify-between font-bold text-white text-[14px]">
              <span>Time Spent on Bookkeeping</span>
              <span className="text-ia-blue">{hours} Hours/Week</span>
            </div>
            <input 
              type="range" 
              min="2" 
              max="15" 
              step="1" 
              value={hours}
              onChange={(e) => setHours(parseInt(e.target.value))}
              className="w-full h-1.5 bg-ia-border rounded-lg appearance-none cursor-pointer accent-ia-blue"
            />
          </div>

          {/* Value Rate */}
          <div className="flex flex-col gap-2">
            <div className="flex justify-between font-bold text-white text-[14px]">
              <span>Value of Your Time</span>
              <span className="text-ia-blue">£{rate}/Hour</span>
            </div>
            <input 
              type="range" 
              min="20" 
              max="200" 
              step="10" 
              value={rate}
              onChange={(e) => setRate(parseInt(e.target.value))}
              className="w-full h-1.5 bg-ia-border rounded-lg appearance-none cursor-pointer accent-ia-blue"
            />
          </div>

          {/* Current Admin Costs */}
          <div className="flex flex-col gap-2">
            <div className="flex justify-between font-bold text-white text-[14px]">
              <span>Software & Ledger Costs</span>
              <span className="text-ia-blue">£{software}/Month</span>
            </div>
            <input 
              type="range" 
              min="10" 
              max="150" 
              step="5" 
              value={software}
              onChange={(e) => setSoftware(parseInt(e.target.value))}
              className="w-full h-1.5 bg-ia-border rounded-lg appearance-none cursor-pointer accent-ia-blue"
            />
          </div>

        </div>

        {/* Output Results */}
        <div className="bg-ia-navy text-ia-white rounded-md p-8 flex flex-col justify-center items-center shadow-md relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[3px] bg-ia-blue" />
          
          <span className="text-[11px] font-bold text-ia-blue tracking-[0.12em] uppercase mb-4">Estimated Monthly Savings</span>
          
          <div className="flex flex-col items-center mb-6">
            <span className="text-[54px] font-extrabold leading-none text-white">£{savings.toLocaleString()}</span>
            <span className="text-[12px] font-light text-ia-text-secondary mt-1">Saved per Month</span>
          </div>

          <div className="w-full border-t border-ia-border/30 pt-4 flex justify-between text-[13px] font-light text-ia-text-light">
            <div className="text-left">
              <span className="block text-[11px] uppercase tracking-wider text-ia-text-muted">Time Reclaimed</span>
              <strong className="text-white text-[15px]">{hoursSaved} Hours/Mo</strong>
            </div>
            <div className="text-right">
              <span className="block text-[11px] uppercase tracking-wider text-ia-text-muted">Your DIY Cost</span>
              <strong className="text-white text-[15px]">£{diyCost}</strong>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
