"use client"
import { Plus_Jakarta_Sans } from "next/font/google";
import InputField from "@/components/inputField";
import { RadioInput } from "@/components/inputField";
import useStore from "./useStore";
import { MORTGAGE_TYPES } from "./useStore";

const plus_Jakarta_Sans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export default function Home() {

  const { mortgageType, setMortgageType, rate, amount, years, setAmount, setRate, setYears, isComplete, calculateMortgage, clearForm, monthlyPayment, totalRepayment, isError } = useStore();

  const formatCurrency = (number) =>
    Intl.NumberFormat("en-UK", {
      style: "currency",
      currency: "GBP",
    }).format(number);

  console.log(mortgageType);


  console.log(typeof rate, typeof amount, typeof years);

  return (
    <main className={`${plus_Jakarta_Sans.className} w-full h-screen bg-[#E8F4F9] flex gap-[32px] justify-center lg:items-center sm:items-start text-[#132830]`}>
      <section className="w-2/3 bg-white shadow-lg overflow-hidden rounded-2xl h-content grid grid-cols-2">
        <div className="p-6">
          <div className="w-full flex items-center justify-between mb-8">
            <h1 className="font-bold text-xl">Mortgage Calculator</h1>
            <button className="underline text-base font-semibold text-slate-500 cursor-pointer" onClick={clearForm}>Clear all</button>
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
              checked={mortgageType === MORTGAGE_TYPES.REPAYMENT}
              onChange={setMortgageType}
              isComplete={isComplete}
              showError={!mortgageType}
            />
            <RadioInput
              label="Interest Only"
              value="interestOnly"
              checked={mortgageType === MORTGAGE_TYPES.INTEREST_ONLY}
              onChange={setMortgageType}
              isComplete={isComplete}
              showError={!mortgageType}
            />
            {isError && (
              <p className="text-sm text-[#C44134] mt-1">This field is required</p>
            )}
          </div>
          <button className="mt-8 flex gap-3 bg-[#CEDD06] px-8 py-3 rounded-4xl cursor-pointer" onClick={calculateMortgage}>
            <img src="/images/icon-calculator.svg" alt="calculator" />
            <p className="font-bold text-base capitalize">calculate repayments</p>
          </button>
        </div>
        <div className="p-12 bg-slate-700 rounded-bl-[5rem]">
          {
            isComplete ?
              <div className="">
                <h2 className="font-bold text-white text-xl capitalize mt-3 mb-3">your results</h2>
                <p className="text-base text-[#A3C2D5] pr-14 mb-10 text-sm mt-2 font-semibold capitalize">your results are shown below based on the information you provided. to adjust the results, edit the form and click "calculate repayment" again.</p>
                <div className="bg-[#132830] w-full p-8 border-[#7893A0] shadow-md mt-4 border-t-4 border-t-[#CEDD06] rounded-md">
                  <div className="w-full pb-6 mb-6 border-b border-b-[#7893A0]">
                    <p className="text-[#A3C2D5] mb-3 text-base">your monthly repayments</p>
                    <h2 className="text-[#CEDD06] text-5xl mb-4 font-extrabold">{formatCurrency(monthlyPayment)}</h2>
                  </div>
                  <div>
                    <p className="text-[#A3C2D5] mb-4">total you'll repay over the term</p>
                    <h2 className=" text-[#FFFFFF] font-bold text-xl">{formatCurrency(totalRepayment)}</h2>
                  </div>
                </div>
              </div> :
              <div className="px-14 h-full w-full text-center flex flex-col items-center justify-center">
                <img src="/images/illustration-empty.svg" alt="illustration" className="mx-auto" />
                <h2 className="font-bold text-white capitalize mt-3">results shown here</h2>
                <p className="text-base text-[#7893A0] text-sm mt-2 font-semibold">Complete the form and click "calculate repayments" to see what your monthly repayment will be</p>
              </div>
          }
        </div>
      </section>
    </main>
  );
}
