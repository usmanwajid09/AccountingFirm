"use client";

import { useState, useEffect } from "react";

export default function DividendTaxCalculator() {
  const [salary, setSalary] = useState(12570); // default to personal allowance
  const [dividend, setDividend] = useState(40000); // default dividend
  const [salaryTax, setSalaryTax] = useState(0);
  const [dividendTax, setDividendTax] = useState(0);
  const [totalTax, setTotalTax] = useState(0);
  const [takeHome, setTakeHome] = useState(0);
  const [effectiveRate, setEffectiveRate] = useState(0);
  const [paAmount, setPaAmount] = useState(12570);

  useEffect(() => {
    // 1. Determine Personal Allowance (PA) - tapered over £100k
    const totalIncome = salary + dividend;
    let pa = 12570;
    if (totalIncome > 100000) {
      pa = Math.max(0, 12570 - Math.floor((totalIncome - 100000) / 2));
    }
    setPaAmount(pa);

    // 2. Salary tax (taxed first)
    let taxableSalary = Math.max(0, salary - pa);
    let unusedPa = Math.max(0, pa - salary);
    
    let salBasic = 0;
    let salHigher = 0;
    let salAdditional = 0;

    // Salary tax bands
    const basicLimit = 37700; // basic rate band is £37,700 taxable
    const higherLimit = 125140 - pa; // higher rate limit is £125,140 total income

    if (taxableSalary > 0) {
      // Basic rate: 20%
      salBasic = Math.min(taxableSalary, basicLimit);
      let remainingTaxable = taxableSalary - salBasic;

      if (remainingTaxable > 0) {
        // Higher rate: 40%
        const maxHigher = Math.max(0, (125140 - pa) - basicLimit);
        salHigher = Math.min(remainingTaxable, maxHigher);
        remainingTaxable -= salHigher;

        if (remainingTaxable > 0) {
          // Additional rate: 45%
          salAdditional = remainingTaxable;
        }
      }
    }

    const calculatedSalaryTax = salBasic * 0.20 + salHigher * 0.40 + salAdditional * 0.45;
    setSalaryTax(calculatedSalaryTax);

    // 3. Dividend tax (taxed after salary)
    let remainingDividend = dividend;
    
    // First, offset with unused PA
    const divPa = Math.min(remainingDividend, unusedPa);
    remainingDividend -= divPa;
    let currentIncome = salary + divPa;

    // Next, apply £500 dividend allowance (taxed at 0% but consumes band space)
    const divAllowance = Math.min(remainingDividend, 500);
    remainingDividend -= divAllowance;
    currentIncome += divAllowance;

    // Taxable dividend remaining
    let taxableDiv = remainingDividend;
    let divBasic = 0;
    let divHigher = 0;
    let divAdditional = 0;

    const totalBasicLimit = 37700 + pa; // total income basic limit
    const totalHigherLimit = 125140; // total income higher limit

    if (taxableDiv > 0) {
      if (currentIncome < totalBasicLimit) {
        const slice = Math.min(taxableDiv, totalBasicLimit - currentIncome);
        divBasic += slice;
        taxableDiv -= slice;
        currentIncome += slice;
      }
      if (taxableDiv > 0 && currentIncome < totalHigherLimit) {
        const slice = Math.min(taxableDiv, totalHigherLimit - currentIncome);
        divHigher += slice;
        taxableDiv -= slice;
        currentIncome += slice;
      }
      if (taxableDiv > 0) {
        divAdditional += taxableDiv;
      }
    }

    const calculatedDivTax = divBasic * 0.0875 + divHigher * 0.3375 + divAdditional * 0.3935;
    setDividendTax(calculatedDivTax);

    // 4. Summaries
    const calcTotalTax = calculatedSalaryTax + calculatedDivTax;
    setTotalTax(calcTotalTax);
    setTakeHome(totalIncome - calcTotalTax);
    setEffectiveRate(totalIncome > 0 ? (calcTotalTax / totalIncome) * 100 : 0);

  }, [salary, dividend]);

  return (
    <div className="bg-ia-bg-light border border-ia-border rounded-md p-8 md:p-12 shadow-light max-w-[840px] mx-auto">
      <div className="text-center mb-8">
        <span className="text-[12px] font-bold text-ia-blue tracking-[0.15em] uppercase block mb-2">Director tax tool</span>
        <h3 className="text-[24px] sm:text-[28px] font-bold text-white">Dividend Tax Calculator</h3>
        <p className="text-[14px] text-ia-text-secondary mt-1 max-w-[550px] mx-auto font-light">
          Estimate your total personal tax liability (Income Tax & Dividend Tax) based on your salary and dividend mix.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Sliders Input side */}
        <div className="flex flex-col gap-6 text-left">
          
          {/* Director's Salary */}
          <div className="flex flex-col gap-2">
            <div className="flex justify-between font-bold text-white text-[14px]">
              <span>Director's Salary</span>
              <span className="text-ia-blue">£{salary.toLocaleString()}</span>
            </div>
            <input 
              type="range" 
              min="0" 
              max="100000" 
              step="1000" 
              value={salary}
              onChange={(e) => setSalary(parseInt(e.target.value))}
              className="w-full h-1.5 bg-ia-border rounded-lg appearance-none cursor-pointer accent-ia-blue"
            />
            <div className="flex justify-between text-[11px] text-ia-text-secondary">
              <span>£0</span>
              <span>£12,570 (Tax-Free PA)</span>
              <span>£100,000</span>
            </div>
          </div>

          {/* Dividend Draw */}
          <div className="flex flex-col gap-2">
            <div className="flex justify-between font-bold text-white text-[14px]">
              <span>Dividends Drawn</span>
              <span className="text-ia-blue">£{dividend.toLocaleString()}</span>
            </div>
            <input 
              type="range" 
              min="0" 
              max="150000" 
              step="2000" 
              value={dividend}
              onChange={(e) => setDividend(parseInt(e.target.value))}
              className="w-full h-1.5 bg-ia-border rounded-lg appearance-none cursor-pointer accent-ia-blue"
            />
            <div className="flex justify-between text-[11px] text-ia-text-secondary">
              <span>£0</span>
              <span>£40,000</span>
              <span>£150,000+</span>
            </div>
          </div>

          {/* Quick Info Alerts */}
          <div className="bg-ia-navy/40 border border-ia-border/50 rounded-md p-4 text-[12px] text-ia-text-secondary leading-relaxed">
            <strong className="text-white block mb-1">UK Tax Allowances Included:</strong>
            <ul className="list-disc list-inside space-y-1">
              <li>Personal Allowance: <span className="text-white">£{paAmount.toLocaleString()}</span> {paAmount < 12570 && "(Tapered)"}</li>
              <li>Dividend Allowance: <span className="text-white">£500</span> (Tax-free limit)</li>
              <li>Basic dividend rate: <span className="text-white">8.75%</span>, Higher: <span className="text-white">33.75%</span></li>
            </ul>
          </div>

        </div>

        {/* Output Results */}
        <div className="bg-ia-navy text-ia-white rounded-md p-8 flex flex-col justify-center items-center shadow-md relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[3px] bg-ia-blue" />
          
          <span className="text-[11px] font-bold text-ia-blue tracking-[0.12em] uppercase mb-4">Estimated Net Take-Home</span>
          
          <div className="flex flex-col items-center mb-6">
            <span className="text-[54px] font-extrabold leading-none text-white">£{Math.round(takeHome).toLocaleString()}</span>
            <span className="text-[12px] font-light text-ia-text-secondary mt-1">Keep {Math.round(100 - effectiveRate)}% of your income</span>
          </div>

          <div className="w-full border-t border-ia-border/30 pt-4 flex flex-col gap-3 text-[13px] font-light text-ia-text-light">
            <div className="flex justify-between">
              <span className="text-ia-text-muted text-[12px]">Income Tax (on Salary)</span>
              <strong className="text-white">£{Math.round(salaryTax).toLocaleString()}</strong>
            </div>
            <div className="flex justify-between">
              <span className="text-ia-text-muted text-[12px]">Dividend Tax Liability</span>
              <strong className="text-white">£{Math.round(dividendTax).toLocaleString()}</strong>
            </div>
            <div className="flex justify-between border-t border-ia-border/20 pt-2 font-semibold text-[14px]">
              <span className="text-ia-blue">Total Tax Bill</span>
              <strong className="text-ia-blue">£{Math.round(totalTax).toLocaleString()}</strong>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
