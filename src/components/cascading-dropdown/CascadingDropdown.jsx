// import React, { useState } from 'react'
// export default function CascadingDropdown() {
//     const countries = [
//         {
//             name: 'las angles',
//             states : [
//                 {
//                     name: 'l first',
//                     cities: ["area 1", "area 2"],
//                 },
//                 {
//                     name: 'l second',
//                     cities: ["area 3", "area 4"],
//                 },
//                 {
//                     name: 'l third',
//                     cities: ["area 5", "area 6"],
//                 },
//             ]
//         },
//         {
//             name: 'Virginia',
//             states : [
//                 {
//                     name: 'v first',
//                     cities: ["area 7", "area 8"],
//                 },
//                 {
//                     name: 'v second',
//                     cities: ["area 9", "area 10"],
//                 },
//                 {
//                     name: 'v third',
//                     cities: ["area 11", "area 12"],
//                 },
//             ]
//         },
//     ]
//     const [country,setCountry] = useState('Country');
//     const [state,setState] = useState('State');
//     const [city,setCity]= useState('City')
//     const [states,setStates] = useState([])
//     const [cities,setCities] = useState([])

//     function countryChange(event) {
//         setCountry(event.target.value)
//         setStates(countries.find((ctr)=> ctr.name === event.target.value).states)
//     }

//     function stateChange(event) {
//         setState(event.target.value)
//         setCities(states.find((state) => event.target.value === state.name).cities)
//     }

//     function cityChange(event) {
//         setCity(event.target.value)
//     }
//     console.log(countries);
//     console.log((states));
//     console.log(cities);
//     return (
//         <div className='bg-[#333] h-screen p-[20px]  flex justify-center items-center text-center'>
//             <div className=' lg:w-[500px]'>
//                 <h1 className='text-[28px]  text-white lg:text-[40px] mb-[20px]'>Select Country and Cities</h1>
//                 <select onChange={countryChange} value={country}  className='w-full mb-[20px] rounded p-[10px]' name="" id="">
//                     <option>--Country--</option>
//                     {countries.map((ctr) => 
//                         <option className='p-[10px]' value={ctr.name}>{ctr.name}</option>
//                     )}
//                 </select>
//                 <select value={state} onChange={stateChange}  className='w-full mb-[20px] rounded p-[10px]' name="" id="">
//                     <option>--States--</option>
//                     {states.map((state) => 
//                         <option className='p-[10px]' value={state.name}>{state.name}</option>
//                     )}
//                 </select>
//                 <select value={city} onChange={cityChange}  className='w-full mb-[20px] rounded p-[10px]' name="" id="">
//                     <option>--City--</option>
//                     {cities.map((city) => 
//                         <option className='p-[10px]' value={city}>{city}</option>
//                     )}
//                 </select>
//             </div>
//         </div>
//     )
// }


import React, { useState } from 'react'


export default function CascadingDropdown() {
    const countries = [
        {
            name: 'Cairo',
            states: [
                {
                    name: 'October',
                    region: ['Region 1', 'Region 2'],
                },
                {
                    name: 'Ain Shams',
                    region: ['Region 3', 'Region 4'],
                },
                {
                    name: 'October',
                    region: ['Region 5', 'Region 6'],
                },
            ]
        },
        {
            name: 'Ash sharkia',
            states: [
                {
                    name: 'Abu Kabir',
                    region: ['Region A', 'Region B'],
                },
                {
                    name: 'Kafr Sakr',
                    region: ['Region C', 'Region D'],
                },
                {
                    name: 'Hehia',
                    region: ['Region E', 'Region F'],
                },
            ]
        },
        {
            name: 'Mansura',
            states: [
                {
                    name: 'Talkha',
                    region: ['Region 11', 'Region 12'],
                },
                {
                    name: 'Sandub',
                    region: ['Region 13', 'Region 14'],
                },
                {
                    name: 'Jehan',
                    region: ['Region 15', 'Region 16'],
                },
            ]
        },
    ]

    const [country,setCountry] = useState('Country')
    const [state,setState] = useState('State')
    const [region,setRegion] = useState('Region')

    const [states,setStates] = useState([]);
    const [regions,setRegions] = useState([]);

    function countryChange(event) {
        setCountry(event.target.value);
        if(event.target.value !== 'Country') {
            setStates(countries.find((ctr)=> ctr.name === event.target.value).states)
        }
        
        // const newList = countries.filter((country) => country.name === event.target.value)
        // console.log(newList[0].states)
    }


    console.log(country);
    console.log(states)
    
    function stateChange(event) {
        setState(event.target.value)
        if (event.target.value !== 'State') {
            console.log(states.find(((state)=> state.name === event.target.value)).region)
            setRegions(states.find(((state)=> state.name === event.target.value)).region)
        }
    }
    
    function regionChange(event) {
        setRegion(event.target.value)
    }
    
    return (
        <div className='bg-[#333] h-screen flex justify-center p-[20px] pt-[50px]'>
            <div className=''>
                <h1 className='text-white text-[28px] lg:text-[36px] font-bold mb-[20px]'>Selected Country And Region</h1>
                <select value={country} onChange={countryChange}  className='w-full mb-[20px] !p-[5px] text-[20px]' name="" id="">
                    <option value='Country'>--Country--</option>
                    {
                        countries.map((ctr) =>
                            <option value={ctr.name} className=''>{ctr.name}</option>
                        )
                    }
                </select>

                <select value={state} onChange={stateChange}  className='w-full mb-[20px] !p-[5px] text-[20px]' name="" id="">
                    <option value='State'>--State--</option>
                    {
                        states.map((state) =>
                            <option value={state.name} className=''>{state.name}</option>
                        )
                    }
                </select>

                <select value={region} onChange={regionChange}  className='w-full mb-[20px] !p-[5px] text-[20px]' name="" id="">
                    <option value='Region'>--Region--</option>
                    {
                        regions.map((region) =>
                            <option value={region} className=''>{region}</option>
                        )
                    }
                </select>
            </div>
        </div>
    )
}
