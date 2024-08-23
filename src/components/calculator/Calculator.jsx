// import React, { useState } from 'react';
// import InputButton from './InputButton';

// export default function Calculator() {
//     const [result,setResult] = useState('')
//     function handleEqual() {
//         setResult(eval(result))
//     }

//     return (
//         <div className="h-screen flex justify-center  p-[20px] pt-[50px] bg-[#333]">
//             <div className="calculator w-full sm:w-[400px]  p-[20px]  h-fit bg-white rounded">
//                 <form action="">
//                 <input
//                     type="text"
//                     className="w-full border bg-[#333] mb-[20px] p-[10px] rounded outline-none text-white font-bold text-right text-[28px]"
//                     value={result}
//                 />
//                 <div className="grid grid-cols-4 gap-2">
//                     <InputButton value='AC' onClick={(e) => setResult('')}/>
//                     <InputButton value='DE' onClick={(e) => setResult(result.slice(0,-1))}/>
//                     <InputButton value='.' onClick={(e) => setResult(result + e.target.value)}/>
//                     <InputButton value='/' onClick={(e) => setResult(result + e.target.value)}/>

//                     <InputButton value='7' onClick={(e) => setResult(result + e.target.value)}/>
//                     <InputButton value='8' onClick={(e) => setResult(result + e.target.value)}/>
//                     <InputButton value='9' onClick={(e) => setResult(result + e.target.value)}/>
//                     <InputButton value='*' onClick={(e) => setResult(result + e.target.value)}/>

//                     <InputButton value='4' onClick={(e) => setResult(result + e.target.value)}/>
//                     <InputButton value='5' onClick={(e) => setResult(result + e.target.value)}/>
//                     <InputButton value='6' onClick={(e) => setResult(result + e.target.value)}/>
//                     <InputButton value='+' onClick={(e) => setResult(result + e.target.value)}/>

//                     <InputButton value='1' onClick={(e) => setResult(result + e.target.value)}/>
//                     <InputButton value='2' onClick={(e) => setResult(result + e.target.value)}/>
//                     <InputButton value='3' onClick={(e) => setResult(result + e.target.value)}/>
//                     <InputButton value='-' onClick={(e) => setResult(result + e.target.value)}/>

//                     <InputButton value='00' onClick={(e) => setResult(result + e.target.value)}/>
//                     <InputButton value='0' onClick={(e) => setResult(result + e.target.value)}/>
//                     <InputButton value='=' className=' col-span-2' onClick={handleEqual}/>

//                     {/* <input
//                         type="button"
//                         className="bg-[#333] hover:bg-[#b63b97] duration-300 grow outline-none text-white cursor-pointer p-[10px] text-[22px] font-bold rounded"
//                         value='4'
//                         onClick={(e)=> setResult(result + e.target.value)}
//                     /> */}
//                 </div>
//                 </form>
//             </div>
//         </div>
//     );
// }

import React, { useState } from 'react';
import InputButton from './InputButton';

export default function Calculator() {
    const [result, setResult] = useState('');
    function handleClick(e) {
        setResult(result + e.target.value);
    }
    return (
        <div className="bg-[#333] h-screen flex justify-center items-center p-[20px]">
        <div className="calculator bg-white w-full lg:w-[350px] rounded p-[20px]">
                <input
            type="text"
            value={result}
            className="bg-[#333]  mb-[20px] text-white text-[20px] text-right font-bold outline-none rounded w-full p-[10px]"
            />
            <div className="grid grid-cols-4 gap-[10px]">
                <InputButton value="AC" onClick={()=> setResult('')}/>
                <InputButton value="DE" onClick={()=> setResult(result.slice(0,-1))} />
                <InputButton value="." onClick={handleClick} />
                <InputButton value="/" onClick={handleClick} />
                
                <InputButton value="7" onClick={handleClick} />
                <InputButton value="8" onClick={handleClick} />
                <InputButton value="9" onClick={handleClick} />
                <InputButton value="*" onClick={handleClick} />
                
                <InputButton value="4" onClick={handleClick} />
                <InputButton value="5" onClick={handleClick} />
                <InputButton value="6" onClick={handleClick} />
                <InputButton value="+" onClick={handleClick} />
                
                <InputButton value="1" onClick={handleClick} />
                <InputButton value="2" onClick={handleClick} />
                <InputButton value="3" onClick={handleClick} />
                <InputButton value="-" onClick={handleClick} />
                
                <InputButton value="00" onClick={handleClick} />
                <InputButton value="0" onClick={handleClick} />
                <InputButton value="=" className='col-span-2' onClick={()=> setResult(eval(result)) } />

            </div>
        </div>
        </div>
    );
}
