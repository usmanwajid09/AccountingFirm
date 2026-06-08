"use client";

import { useState, useEffect } from "react";

export default function RDCalculator() {
  const [staff, setStaff] = useState(100000);
  const [subcontractor, setSubcontractor] = useState(50000);
  const [software, setSoftware] = useState(10000);
  const [isLossMaking, setIsLossMaking] = useState(true);

  const [qualifyingExpenditure, setQualifyingExpenditure] = useState(0);
  const [claimValue, setClaimValue] = useState(0);
  const [reinvestmentEquivalent, setReinvestmentEquivalent] = useState("");

  useEffect(() => {
    // Subcontractor costs are restricted to 65% qualifying rate
    const totalQRE = staff + (subcontractor * 0.65) + software;
    setQualifyingExpenditure(totalQRE);

    // post-2023 UK R&D SME scheme relief rates:
    // Profit-making SME: corporate tax reduction is roughly 15.0% - 16.3% of QRE. Let's use 15.0%.
    // Loss-making SME: cash rebate is roughly 18.6% of QRE (tax credit rate of 14.5% on 86% enhancement). Let's use 18.6%.
    const rate = isLossMaking ? 0.186 : 0.150;
    const value = totalQRE * rate;
    setClaimValue(value);

    // Calculate reinvestment equivalent (e.g. junior developer salary or months of overhead)
    const developerSalary = 35000;
    const devs = (value / developerSalary).toFixed(1);
    if (parseFloat(devs) >= 1) {
      setReinvestmentEquivalent(`Fund ${devs} junior/mid developer salary equivalents`);
    } else {
      const monthsOfOffice = Math.round(value / 1500);
      setReinvestmentEquivalent(`Fund ${monthsOfOffice || 1} months of premium office rent`);
    }
  }, [staff, subcontractor, software, isLossMaking]);

  return (
    <div className="bg-ia-bg-light border border-ia-border rounded-md p-8 md:p-12 shadow-light max-w-[840px] mx-auto">
      <div className="text-center mb-8">
        <span className="text-[12px] font-bold text-ia-blue tracking-[0.15em] uppercase block mb-2">Advisory Tool</span>
        <h3 className="text-[24px] sm:text-[28px] font-bold text-white">R&D Tax Credit Calculator</h3>
        <p className="text-[14px] text-ia-text-secondary mt-1 max-w-[550px] mx-auto font-light">
          Estimate how much you can claim back under the UK SME R&D scheme for staff, software, and subcontractors.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Sliders Input side */}
        <div className="flex flex-col gap-6 text-left">
          
          {/* R&D Staff Costs */}
          <div className="flex flex-col gap-2">
            <div className="flex justify-between font-bold text-white text-[14px]">
              <span>R&D Staff Costs</span>
              <span className="text-ia-blue">£{staff.toLocaleString()}</span>
            </div>
            <input 
              type="range" 
              min="0" 
              max="500000" 
              step="5000" 
              value={staff}
              onChange={(e) => setStaff(parseInt(e.target.value))}
              className="w-full h-1.5 bg-ia-border rounded-lg appearance-none cursor-pointer accent-ia-blue"
            />
            <div className="flex justify-between text-[11px] text-ia-text-secondary">
              <span>£0</span>
              <span>£500,000</span>
            </div>
          </div>

          {/* Subcontractor Costs */}
          <div className="flex flex-col gap-2">
            <div className="flex justify-between font-bold text-white text-[14px]">
              <span>Subcontractors / Agencies</span>
              <span className="text-ia-blue">£{subcontractor.toLocaleString()}</span>
            </div>
            <input 
              type="range" 
              min="0" 
              max="250000" 
              step="5000" 
              value={subcontractor}
              onChange={(e) => setSubcontractor(parseInt(e.target.value))}
              className="w-full h-1.5 bg-ia-border rounded-lg appearance-none cursor-pointer accent-ia-blue"
            />
            <div className="flex justify-between text-[11px] text-ia-text-secondary">
              <span>£0</span>
              <span>£250,000 (restricted to 65% rate)</span>
            </div>
          </div>

          {/* Software & Consumables */}
          <div className="flex flex-col gap-2">
            <div className="flex justify-between font-bold text-white text-[14px]">
              <span>Software & Consumables</span>
              <span className="text-ia-blue">£{software.toLocaleString()}</span>
            </div>
            <input 
              type="range" 
              min="0" 
              max="50000" 
              step="1000" 
              value={software}
              onChange={(e) => setSoftware(parseInt(e.target.value))}
              className="w-full h-1.5 bg-ia-border rounded-lg appearance-none cursor-pointer accent-ia-blue"
            />
            <div className="flex justify-between text-[11px] text-ia-text-secondary">
              <span>£0</span>
              <span>£50,000</span>
            </div>
          </div>

          {/* Profit/Loss toggle */}
          <div className="flex items-center justify-between border-t border-ia-border/20 pt-4">
            <span className="font-bold text-white text-[14px]">Company Profit Status:</span>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setIsLossMaking(false)}
                className={`px-3 py-1 text-[12px] font-bold rounded transition-all duration-200 ${
                  !isLossMaking 
                    ? "bg-ia-blue text-ia-navy" 
                    : "bg-ia-navy border border-ia-border text-ia-text-secondary hover:text-white"
                }`}
              >
                Profit-Making
              </button>
              <button
                type="button"
                onClick={() => setIsLossMaking(true)}
                className={`px-3 py-1 text-[12px] font-bold rounded transition-all duration-200 ${
                  isLossMaking 
                    ? "bg-ia-blue text-ia-navy" 
                    : "bg-ia-navy border border-ia-border text-ia-text-secondary hover:text-white"
                }`}
              >
                Loss-Making
              </button>
            </div>
          </div>

        </div>

        {/* Output Results */}
        <div className="bg-ia-navy text-ia-white rounded-md p-8 flex flex-col justify-center items-center shadow-md relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[3px] bg-ia-blue" />
          
          <span className="text-[11px] font-bold text-ia-blue tracking-[0.12em] uppercase mb-4">
            {isLossMaking ? "Estimated Cash Rebate" : "Estimated Corporate Tax Reduction"}
          </span>
          
          <div className="flex flex-col items-center mb-6">
            <span className="text-[54px] font-extrabold leading-none text-white">£{Math.round(claimValue).toLocaleString()}</span>
            <span className="text-[12px] font-light text-ia-text-secondary mt-1">Based on R&D qualifying rules</span>
          </div>

          <div className="w-full border-t border-ia-border/30 pt-4 flex flex-col gap-3 text-[13px] font-light text-ia-text-light text-left">
            <div className="flex justify-between">
              <span className="text-ia-text-muted text-[12px]">Qualifying R&D Expenditure</span>
              <strong className="text-white">£{Math.round(qualifyingExpenditure).toLocaleString()}</strong>
            </div>
            <div className="flex justify-between">
              <span className="text-ia-text-muted text-[12px]">Estimated SME Relief Rate</span>
              <strong className="text-white">{isLossMaking ? "18.6% Cash Pay-out" : "15.0% CT Saving"}</strong>
            </div>
            <div className="border-t border-ia-border/20 pt-3 text-center text-[12px] font-medium text-ia-blue mt-1">
              💡 {reinvestmentEquivalent}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
