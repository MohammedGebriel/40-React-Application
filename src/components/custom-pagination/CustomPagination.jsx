import React, { useState } from 'react'

export default function CustomPagination() {
    const data = [
        {
            id: 1,
            name: "Mohammed",
            email: "mm@22.22"
        },
        {
            id: 2,
            name: "Ahmed",
            email: "msdsm@22.22"
        },
        {
            id: 3,
            name: "Sayed",
            email: "mm@22sdfd.22"
        },
        {
            id: 4,
            name: "Mohammed",
            email: "mm@22.22"
        },
        {
            id: 5,
            name: "Ali",
            email: "aadfd@22.22"
        },
        {
            id: 6,
            name: "Hassan",
            email: "hsdfddf@22.22"
        },
        {
            id: 7,
            name: "Mahmoud",
            email: "mahmoud@22.22"
        },
        {
            id: 8,
            name: "Ebrahim",
            email: "ebrahim@22.22"
        },
        {
            id: 9,
            name: "Mohammed",
            email: "mdsfm@22.22"
        },
        {
            id: 10,
            name: "Ali",
            email: "Ali@22.22"
        },
        {
            id: 11,
            name: "Yaser",
            email: "yaser@22.22"
        },
        {
            id: 12,
            name: "Jeka",
            email: "jeka@22.22"
        },
        {
            id: 13,
            name: "koko",
            email: "koko@22.22"
        },
        {
            id: 14,
            name: "mohsen",
            email: "mohsenm@22.22"
        },
        {
            id: 15,
            name: "Mohammed",
            email: "mm@22.22"
        },
        {
            id: 16,
            name: "Eman",
            email: "eman@22.22"
        },
        {
            id: 17,
            name: "Lefa",
            email: "lefa@22.22"
        },
        {
            id: 18,
            name: "Update",
            email: "update@22.22"
        },
        {
            id: 19,
            name: "Mohammed",
            email: "mm@22.22"
        },
        {
            id: 20,
            name: "Mohammed",
            email: "mm@22.22"
        },
        {
            id: 21,
            name: "Mohammed",
            email: "mm@22.22"
        },
        {
            id: 22,
            name: "Sayed",
            email: "sayed@22.22"
        },
        {
            id: 23,
            name: "Ali",
            email: "ali@22.22"
        }
    ]

    const [currentPage,setCurrentPage] = useState(1);
    const rowsPerPage = 5;
    const lastIndex = currentPage * rowsPerPage;
    const firstIndex = lastIndex - rowsPerPage;
    const rows = data.slice(firstIndex,lastIndex);
    const npage = Math.ceil(data.length / rowsPerPage);
    const numbers = [...Array(npage + 1).keys()].slice(1)

    const handlePrev = () => {
        if(currentPage !== 1) {
            setCurrentPage(currentPage - 1)
        }
    }
    const handleNext = () => {
        if(currentPage !== npage) {
            setCurrentPage(currentPage + 1)
        }
    }
    const handleChange = (number) => {
        setCurrentPage(number)
    }
    
    return (
        <div>
            <div className='p-[20px] w-full overflow-x-auto'>
                <table className='border text-center !min-w-full'>
                    <thead className='!min-w-full'>
                        <tr className='w-full border-b'>
                            <th className='text-[20px] p-[10px] border-r w-[33%]'>ID</th>
                            <th className='text-[20px] p-[10px] border-r w-[33%]'>Name</th>
                            <th className='text-[20px] p-[10px] w-[33%]'>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row) => 
                            <tr className='w-full border-b'>
                            <td className='text-[20px] p-[10px] border-r w-[33%]'>{row.id}</td>
                            <td className='text-[20px] p-[10px] border-r w-[33%]'>{row.name}</td>
                            <td className='text-[20px] p-[10px] w-[33%]'>{row.email}</td>
                        </tr>
                        )}
                        
                    </tbody>
            </table>
            <ul className="pagination flex justify-center mt-[20px]">
                <li onClick={()=> handlePrev()}  className='p-[10px] text-[18px] border cursor-pointer'>Prev</li>
                {numbers.map((n) => 
                    <li 
                    onClick={()=> handleChange(n)}
                    className={`${currentPage === n ? 'bg-[#1c808d] text-white text-[20px]' : ''} p-[10px] text-[18px] border cursor-pointer`}>{n}</li>
                )}
                
                <li onClick={()=> handleNext()} className='p-[10px] text-[18px] border cursor-pointer'>Next</li>
            </ul>
        </div>
        </div>
    )
}   






























// import React, { useState } from 'react'
// // import Data from './data'
// export default function CustomPagination() {
//     const [data,setData] = useState([
//         {
//             id: 1,
//             name: "Mohammed",
//             email: "mm@22.22"
//         },
//         {
//             id: 2,
//             name: "Ahmed",
//             email: "msdsm@22.22"
//         },
//         {
//             id: 3,
//             name: "Sayed",
//             email: "mm@22sdfd.22"
//         },
//         {
//             id: 4,
//             name: "Mohammed",
//             email: "mm@22.22"
//         },
//         {
//             id: 5,
//             name: "Ali",
//             email: "aadfd@22.22"
//         },
//         {
//             id: 6,
//             name: "Hassan",
//             email: "hsdfddf@22.22"
//         },
//         {
//             id: 7,
//             name: "Mahmoud",
//             email: "mahmoud@22.22"
//         },
//         {
//             id: 8,
//             name: "Ebrahim",
//             email: "ebrahim@22.22"
//         },
//         {
//             id: 9,
//             name: "Mohammed",
//             email: "mdsfm@22.22"
//         },
//         {
//             id: 10,
//             name: "Ali",
//             email: "Ali@22.22"
//         },
//         {
//             id: 11,
//             name: "Yaser",
//             email: "yaser@22.22"
//         },
//         {
//             id: 12,
//             name: "Jeka",
//             email: "jeka@22.22"
//         },
//         {
//             id: 13,
//             name: "koko",
//             email: "koko@22.22"
//         },
//         {
//             id: 14,
//             name: "mohsen",
//             email: "mohsenm@22.22"
//         },
//         {
//             id: 15,
//             name: "Mohammed",
//             email: "mm@22.22"
//         },
//         {
//             id: 16,
//             name: "Eman",
//             email: "eman@22.22"
//         },
//         {
//             id: 17,
//             name: "Lefa",
//             email: "lefa@22.22"
//         },
//         {
//             id: 18,
//             name: "Update",
//             email: "update@22.22"
//         },
//         {
//             id: 19,
//             name: "Mohammed",
//             email: "mm@22.22"
//         },
//         {
//             id: 20,
//             name: "Mohammed",
//             email: "mm@22.22"
//         },
//         {
//             id: 21,
//             name: "Mohammed",
//             email: "mm@22.22"
//         },
//         {
//             id: 22,
//             name: "Sayed",
//             email: "sayed@22.22"
//         },
//         {
//             id: 23,
//             name: "Ali",
//             email: "ali@22.22"
//         }]
//     )
//     const [currentPage,setCurrentPage] = useState(1);
//     const recordsPerPage = 5;
//     const lastIndex = currentPage * recordsPerPage;
//     const firstIndex = lastIndex - recordsPerPage;
//     const npage = Math.ceil((data.length / recordsPerPage));
//     const records = data.slice(firstIndex,lastIndex);
//     console.log([...Array(npage + 1).keys()].slice(1));
//     const numbers = [...Array(npage + 1).keys()].slice(1);

//     console.log(data.length);
//     function prevChange() {
//         if(currentPage !== 1) {
//             setCurrentPage(currentPage - 1)
//         }
//     }
//     function handleChange(n) {
//         setCurrentPage(n)
//     }
//     function nextChange() {
//         if(currentPage !== npage) {
//             setCurrentPage(currentPage + 1)
//         }
//     }
//     return (
//         <div className='p-[20px] w-full overflow-x-auto'>
//             <table className='border text-center !min-w-full'>
//                 <thead className='!min-w-full'>
//                     <tr className='w-full border-b'>
//                         <th className='text-[20px] p-[10px] border-r w-[33%]'>ID</th>
//                         <th className='text-[20px] p-[10px] border-r w-[33%]'>Name</th>
//                         <th className='text-[20px] p-[10px] w-[33%]'>Email</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
//                         records.map((d) => 
//                         <tr key={d.id} className='border-b'>
//                             <td className='text-[20px] border-r p-[10px]'>{d.id}</td>
//                             <td className='text-[20px] border-r p-[10px]'>{d.name}</td>
//                             <td className='text-[20px] p-[10px]'>{d.email}</td>
//                         </tr>
//                         )
//                     }
//                 </tbody>
//             </table>
//             <ul className="pagination flex justify-center mt-[20px]">
//                 <li onClick={prevChange} className='p-[10px] text-[18px] border cursor-pointer'>Prev</li>
//                 {numbers.map((n)=>
//                 <li style={{
//                     background: n === currentPage ? '#00b6ff' : '',
//                     color: n === currentPage ? 'white' : '',
//                     fontSize: n === currentPage ? '20px' : '',
//                 }}
//                 onClick={()=> handleChange(n)}
//                 className='p-[10px] text-[18px] border cursor-pointer'>{n}</li>
//                 )}
//                 <li onClick={nextChange} className='p-[10px] text-[18px] border cursor-pointer'>Next</li>
//             </ul>
//         </div>
//     )
// }




