const InputField = ({ label, emblem, name, handleChange, value }) => {
    return (
        <div className="">
            <label className="text-base">{label}</label>
            <div className={`${name !== 'amount' ? 'flex-row-reverse' : ""} bg-slate-300 mt-2 flex items-center justify-between border rounded-md overflow-hidden border-slate-500`}>
                <div className={`flex items-center justify-center text-slate-500 ${name === 'amount' ? "w-1/10" : 'w-3/10'}`}><p className="font-bold text-lg">{emblem}</p></div>
                <input
                    type="text"
                    className={`${name === 'amount' ? "w-9/10" : "w-7/10"} bg-white p-3 outline-none`}
                    name={name}
                    onChange={(e)=> handleChange(e.target.value)}
                    value={value}
                />
            </div>
        </div>
    )
}

export default InputField

export const RadioInput = ({ label, value, checked, onChange }) => {
    return (
        <label
            htmlFor={value}
            className={`flex items-center justify-start gap-4 p-3 border rounded-md cursor-pointer mb-4 transition-colors duration-200 ${checked ? 'border-[#CEDD06] bg-[#F9FBE7]' : 'border-slate-300 bg-white'
                }`}
        >
            <input
                type="radio"
                id={value}
                name="mortgageType"
                value={value}
                checked={checked}
                onChange={(e) => onChange(e.target.value)}
                className="w-[20px] h-[20px] accent-[#CEDD06]"
            />
            <span className="font-semibold text-slate-900">{label}</span>
        </label>
    );
};