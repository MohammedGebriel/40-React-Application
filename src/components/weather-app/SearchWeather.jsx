import React from 'react'

export default function SearchWeather({search,setSearch,handleSearch}) {
  return (
    <div className=' h-[45px] flex items-center justify-between gap-[10px]'>
      <input
      type="text"
      className='bg-white h-full w-[80%] rounded-[10px] p-[20px] outline-none text-[18px]'
      name=""
      placeholder='Enter City'
      id=""
      value={search}
      onChange={(event) => setSearch(event.target.value)}
      />
      <button onClick={handleSearch} className='bg-black text-white w-[15%] min-w-[80px]  rounded-[10px] min-h-full'>
        Search
      </button>
    </div>
  ) 
}
