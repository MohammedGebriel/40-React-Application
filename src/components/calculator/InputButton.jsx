import React from 'react';

export default function InputButton({ value , onClick,className /*, result ,setResult */}) {
    // function handleChange(e) {
    //     setResult(result + e.target.value)
    // }
    return (
        <input
        type="button"
        className={`${className} bg-[#6b5858] hover:bg-[#b63b97] duration-300 grow outline-none text-white cursor-pointer p-[10px] text-[22px] font-bold rounded`}
        value={value}
        onClick={onClick}
        />
    );
}
