import { create } from "zustand";

const useStore = create((set) => ({
    amount: 0,
    rate: 0,
    years: 0,
    setAmount: (amount)=>{
        // console.log(amount);        
        set({ amount: amount })
    },
    setRate: (rate)=>{
        // console.log(rate);
        set({ rate: rate })
    },
    setYears: (years)=>{
        // console.log(years);
        set({ years: years })
    },
    calculateMortgage: () => {

    },
    isComplete: false,
    mortgageType: "",
    setMortgageType: (type) => {
        set({ mortgageType: type  })
    }
}));

export default useStore