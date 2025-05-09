import { create } from "zustand";

export const MORTGAGE_TYPES = {
  REPAYMENT: "repayment",
  INTEREST_ONLY: "interestOnly",
};

const useStore = create((set) => ({
    amount: 0,
    rate: 0,
    years: 0,
    mortgageType: "", // or "Interest Only"
    monthlyPayment: 0,
    totalRepayment: 0,
    isComplete: false,
    isError: false,

    setAmount: (amount) => set({ amount }),
    setRate: (rate) => set({ rate }),
    setYears: (years) => set({ years }),
    setMortgageType: (type) => set({ mortgageType: type }),
    calculateMortgage: () => {
        set((state) => {
            const { amount, rate, years, mortgageType } = state;
            const principal = Number(amount);
            const annualRate = Number(rate);
            const loanTermYears = Number(years);

            if (!principal || !annualRate || !loanTermYears) {
                return {
                    monthlyPayment: 0,
                    totalRepayment: 0,
                    isError: true
                };
            }

            const monthlyRate = annualRate / 100 / 12;
            const numberOfPayments = loanTermYears * 12;

            
            let monthlyPayment = 0;
            let totalRepayment = 0;

            if (mortgageType === MORTGAGE_TYPES.REPAYMENT) {
                const numerator = principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments);
                const denominator = Math.pow(1 + monthlyRate, numberOfPayments) - 1;
                monthlyPayment = numerator / denominator;
                totalRepayment = monthlyPayment * numberOfPayments;
            } else if (mortgageType === MORTGAGE_TYPES.INTEREST_ONLY) {
                monthlyPayment = principal * monthlyRate;
                totalRepayment = monthlyPayment * numberOfPayments;
            }

            return {
                monthlyPayment: Math.round(monthlyPayment * 100) / 100,
                totalRepayment: Math.round(totalRepayment * 100) / 100,
                isComplete: true,
                isError: false
            };
        });
    },
    clearForm: () => {
        set(() => ({
            amount: 0,
            rate: 0,
            years: 0,
            isComplete: false,
            mortgageType: ''
        }))
    }
}));

export default useStore;
