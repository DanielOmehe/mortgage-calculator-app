"use client"
import { Plus_Jakarta_Sans } from "next/font/google";
import InputField from "@/components/inputField";
import { RadioInput } from "@/components/inputField";
import useStore from "./useStore";

const plus_Jakarta_Sans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export default function Home() {

  const { mortgageType, setMortgageType, rate, amount, years, setAmount, setRate, setYears, isComplete, calculateMortgage } = useStore();

  return (
    <main className={`${plus_Jakarta_Sans.className} w-full h-screen bg-[#E8F4F9] flex gap-[32px] justify-center lg:items-center sm:items-start`}>
      <section className="w-2/3 bg-white shadow-lg overflow-hidden rounded-2xl h-content grid grid-cols-2">
        <div className="p-6">
          <div className="w-full flex items-center justify-between mb-8">
            <h1 className="font-bold text-xl">Mortgage Calculator</h1>
            <button className="underline text-base font-semibold text-slate-500">Clear all</button>
          </div>
          <InputField name={'amount'} emblem={"£"} label={"Mortgage Amount"} handleChange={setAmount} value={amount} isComplete={isComplete} />
          <div className="w-full flex items-center justify-between mt-6 gap-4">
            <InputField name={'term'} emblem={"years"} label={"Mortgage Term"} handleChange={setYears} value={years} isComplete={isComplete} />
            <InputField name={'rate'} emblem={"%"} label={"Interest Rate"} handleChange={setRate} value={rate} isComplete={isComplete} />
          </div>
          <div className="mt-6">
            <h2 className="mb-3">Mortgage Type</h2>
            <RadioInput
              label="Repayment"
              value="repayment"
              checked={mortgageType === 'repayment'}
              onChange={setMortgageType}
              isComplete={isComplete}
              showError={!mortgageType}
            />
            <RadioInput
              label="Interest Only"
              value="interestOnly"
              checked={mortgageType === 'interestOnly'}
              onChange={setMortgageType}
              isComplete={isComplete}
              showError={!mortgageType}
            />
            {!isComplete && (
              <p className="text-sm text-[#C44134] mt-1">This field is required</p>
            )}
          </div>
          <button className="mt-8 flex gap-3 bg-[#CEDD06] px-8 py-3 rounded-4xl cursor-pointer" onClick={calculateMortgage}>
            <img src="/images/icon-calculator.svg" alt="calculator" />
            <p className="font-bold text-base capitalize">calculate repayments</p>
          </button>
        </div>
        <div className="flex items-center p-6 text-center justify-between bg-slate-700 rounded-bl-4xl">
          {
            isComplete ? 
            <div className="px-14">
              <img src="/images/illustration-empty.svg" alt="illustration" className="mx-auto" />
              <h2 className="font-bold text-white capitalize mt-3">results shown here</h2>
              <p className="text-base text-gray-500 text-sm mt-2 font-semibold">Complete the form and click "calculate repayments" to see what your monthly repayment will be</p>
            </div> : 
            <div className="px-14">
              <img src="/images/illustration-empty.svg" alt="illustration" className="mx-auto" />
              <h2 className="font-bold text-white capitalize mt-3">results shown here</h2>
              <p className="text-base text-gray-500 text-sm mt-2 font-semibold">Complete the form and click "calculate repayments" to see what your monthly repayment will be</p>
            </div>
          }
        </div>
      </section>
    </main>
  );
}
