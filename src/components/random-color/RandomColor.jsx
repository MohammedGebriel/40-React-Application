import React, { useEffect, useState } from 'react'


export default function RandomColor() {

  const [typeColor,setTypeColor] = useState("hex");
  const [color,setColor] = useState('#000000');

  function handleGenerateHexColor() {
    let hex = ['1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
    let hexColor = '#';
    for(let i = 0 ; i < 6 ; i++) {
      hexColor += hex[Math.floor(Math.random() * hex.length)]
    }
    setColor(hexColor)
  }

  function handleGenerateRGBColor() {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    setColor(`rgb(${r},${g},${b})`)
  }

  useEffect(()=> {
    if(typeColor === 'hex') {
      handleGenerateHexColor()
    }else{
      handleGenerateRGBColor()
    }
  },[typeColor])


  return (
    <div 
      style={{
        background: color
      }} 
      className={`h-screen `}>
      <div className='flex flex-wrap justify-center gap-3 p-2 !pt-[20px]'>
        <button className='p-2 bg-slate-400 rounded' onClick={()=> setTypeColor('hex')}>Generate Hex Color</button>
        <button className='p-2 bg-slate-400 rounded' onClick={()=> setTypeColor('rgb')}>Generate RGB Color</button>
        <button className='p-2 bg-slate-400 rounded' onClick={()=> typeColor === 'hex' ? handleGenerateHexColor() : handleGenerateRGBColor()}>Generate Random Color</button>
      </div>
      <div className=' flex flex-col items-center w-full mt-[100px] text-[25px] text-white'>
        <h1>{typeColor === 'hex' ? "Hex Color" : "RGB Color"}</h1>  
        <h3>{color}</h3>
      </div>
    </div>
  )
}



// import React, { useEffect, useState } from 'react'

// export default function RandomColor() {

//   const [color,setColor] = useState()
//   const [typeColor,setTypeColor] = useState('Hex')


//   function handleGenerateHexColor() {
//     let hexColor = '#';
//     let hex = ['1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];

//     for(let i = 0; i<6 ; i++) {
//       hexColor += hex[Math.floor(Math.random() * hex.length)]
//     }
//     // hexColor += hex[Math.floor(Math.random() * hex.length)]
//     setColor(hexColor);
//   }

//   const handleGenerateRGBColor = () => {
//     const r = Math.floor(Math.random() * 256);
//     const g = Math.floor(Math.random() * 256);
//     const b = Math.floor(Math.random() * 256);
//     console.log(`rgb(${r},${g},${b})`)

//     setColor(`rgb(${r},${g},${b})`)
//   }

//   useEffect(()=>{
//     if(typeColor === 'Hex') {
//       handleGenerateHexColor()
//     }else {
//       handleGenerateRGBColor()
//     }
//   },[typeColor])

//   return (
//     <div style={{
//       background : color
//     }} className=' h-screen bg-[#333] p-[20px]'>
//       <div className="buttons text-white flex justify-center gap-[20px]">
//         <button onClick={()=> {
//           handleGenerateHexColor()
//           setTypeColor('Hex')
//         }} className='bg-[#aaa] p-[10px] rounded'>
//           Generate Hex Color
//         </button>
//         <button onClick={() => {
//           handleGenerateRGBColor()
//           setTypeColor('RGB')
//         }} className='bg-[#aaa] p-[10px] rounded'>
//           Generate RGB Color
//         </button>

//       </div>
//       <div className='h-full flex flex-col justify-center items-center text-[22px] font-bold  '>
        
//         <p>{typeColor}</p>
//         <p>{color}</p>
        
//       </div>
//     </div>
//   )
// }
