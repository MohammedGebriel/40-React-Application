import React, { useEffect, useState } from 'react'

export default function CurrencyConverter() {
    const [amount,setAmount] = useState(0);
    const [from,setFrom] = useState('USD');
    const [to,setTo] = useState('EGP');
    const [output,setOutput] = useState(0)

    const [data,setData] = useState([])
    const [options,setOptions] = useState([])

    useEffect(()=> {
        const fetchData = async ()=> {
            const response = await fetch(`https://api.fastforex.io/fetch-all?from=${from}&api_key=6a1b85d749-a1b89739ba-si5vxr`);
            const result = await response.json()
            setData(result)
        }   
        fetchData()
    },[from]);
    

    useEffect(()=> {
        // console.log(data)
        if(data.base) {
            setOptions(Object.keys(data.results));
        }
    },[data])

    const Converter = () => {
        if(data.base) {
            const rate = amount * data.results[to];
            setOutput(rate)
        }   
    }

    const fromChange = (e) => {
        setFrom(e.target.value);
        setOutput(0);
    }
    
    const toChange = (e) => {
        setTo(e.target.value);
        setOutput(0);
    }

    return (
        <div className='h-screen flex flex-col justify-center items-center bg-black p-[20px]'>
            <h1 className='text-[28px] text-center text-white mb-[20px]'>Currency Converter</h1>
            <div className='w-full md:w-[400px] bg-white p-[20px] rounded'>
                <div className="converter">
                    <div className='mb-[20px]'>
                        <h3 className='text-[22px] mb-[10px]'>Amount</h3>
                        <input  onChange={(e) => setAmount(e.target.value)}  className='w-full outline-none text-[20px] rounded border p-[5px]' type="text" name="" id="" />
                    </div>
                    <div className='mb-[20px]'>
                        <h3 className='text-[22px] mb-[10px]'>From</h3>
                        <select value={from} onChange={fromChange}  name="" className='w-full outline-none text-[20px] rounded border p-[5px]' id="">
                            {
                                options.map((option) => 
                                    <option value={option}>{option}</option>
                                )
                            }
                        </select>
                    </div>
                    <div className='mb-[20px]'>
                        <h3 className='text-[22px] mb-[10px]'>To</h3>
                        <select value={to} onChange={toChange} name="" className='w-full outline-none text-[20px] rounded border p-[5px]' id="">
                            {
                                options.map((option) => 
                                    <option value={option}>{option}</option>
                                )
                            }
                        </select>
                    </div>
                    <div className='flex flex-col gap-[10px] justify-center items-center'>
                        <p className='text-center text-[20px]'>
                            Converted Amount
                        </p>
                        <p className='text-[20px]'>{`${amount} ${from} = ${output} ${to}`}</p>
                        <button onClick={Converter} className='p-[10px] px-[15px] text-white rounded font-bold bg-[#1e85ad]'>Convert</button>
                    </div>
                </div>
            </div>
        </div>
    )
}






























// import React, { useEffect, useState } from 'react'
// import axios from 'axios';

// //Link of API 
// // https://api.fastforex.io/fetch-all?api_key=6a1b85d749-a1b89739ba-si5vxr


// export default function CurrencyConverter() {
//     const [amount,setAmount] = useState(0);
//     const [from,setFrom] = useState('AED');
//     const [to,setTo] = useState('AED');
//     const [output,setOuptut] = useState(0);

//     const [data,setData] = useState([]);
//     const [options,setOptions] = useState([])

//     // const fetchData = async () => {
//     //     // const response = await fetch(`https://api.fastforex.io/fetch-all?from=${from}&api_key=6a1b85d749-a1b89739ba-si5vxr`)
//     //     // const response = await fetch(`https://api.fastforex.io/fetch-multi?from=AED&to=USD&api_key=6a1b85d749-a1b89739ba-si5vxr`)
//     //     const response = await fetch(`https://api.fastforex.io/fetch-all?api_key=6a1b85d749-a1b89739ba-si5vxr`)
//     //     const result = await response.json()
//     //     setData(result)
//     // }

//     useEffect(()=> { 
//         axios.get(`https://api.fastforex.io/fetch-all?from=${from}&api_key=6a1b85d749-a1b89739ba-si5vxr`)
//         .then(res => setData(res.data))
//         .catch(err => console.log(err))
//     },[from])
    
//     useEffect(()=> {
//         if(data.base) {
//             setOptions(Object.keys(data.results))
//         }
//     },[data])

//     const Convert = () => {
//         if(data.base) {
//             const rate = data.results[to]
//             setOuptut(rate * amount)
//         }
//     }
    
//     const changeFrom = (e) => {
//         setFrom(e.target.value)
//         setOuptut(0)
//     }

//     const changeTo = (e) => {
//         setTo(e.target.value)
//         setOuptut(0)
//     }
    
//     return (
//         <div className='h-screen flex flex-col justify-center items-center bg-black p-[20px]'>
//             <h1 className='text-[28px] text-center text-white mb-[20px]'>CurrencyConverter</h1>
//             <div className='w-full md:w-[400px] bg-white p-[20px] rounded'>
//                 <div className="converter">
//                     <div className='mb-[20px]'>
//                         <h3 className='text-[22px] mb-[10px]'>Amount</h3>
//                         <input onChange={(e)=> setAmount(e.target.value)}  className='w-full outline-none text-[20px] rounded border p-[5px]' type="text" name="" id="" />
//                     </div>
//                     <div className='mb-[20px]'>
//                         <h3 className='text-[22px] mb-[10px]'>From</h3>
//                         <select onChange={changeFrom} name="" className='w-full outline-none text-[20px] rounded border p-[5px]' id="">
//                             {options.map((option) =>
//                                 <option className='!text-[22px]' value={option}>{option}</option>
//                             )}
//                         </select>
//                     </div>
//                     <div className='mb-[20px]'>
//                         <h3 className='text-[22px] mb-[10px]'>To</h3>
//                         <select onChange={changeTo} name="" className='w-full outline-none text-[20px] rounded border p-[5px]' id="">
//                             {options.map((option) =>
//                                 <option className='!text-[22px]' value={option}>{option}</option>
//                             )}
//                         </select>
//                     </div>
//                     <div className='flex flex-col gap-[10px] justify-center items-center'>
//                         <p className='text-center text-[20px]'>
//                             Converted Amount
//                         </p>
//                         <p className='text-[20px]'>{`${amount} ${from} = ${output} ${to}`}</p>
//                         <button onClick={Convert} className='p-[10px] px-[15px] text-white rounded font-bold bg-[#1e85ad]'>Convert</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
