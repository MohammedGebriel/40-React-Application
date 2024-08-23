import React from 'react'

export default function ExpanseView({type,data}) {
  return (
    <div className='p-[20px] bg-white '>
      <h1 className={` text-red-500 font-bold text-[25px]`}>{type}</h1>
      <div>
          {data.map(item => <div className={` ${type === 'Income' ? ' bg-green-300' : 'bg-red-300'} flex mt-[20px] text-[20px] items-center justify-between bg-slate-300 p-[10px] rounded-[10px]`}>
              <p>{item.description}</p>
              <p>{item.amount}</p>
          </div>)}
      </div>
    </div>
  )
}
