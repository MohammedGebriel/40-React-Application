// // import React, { useState } from 'react'
// // import Data from './data'
// // export default function FilterComponent() {
// //     const [products,setProducts] = useState(Data);


    
// //     function handleFilter(value) {
// //         const newProducts = Data.filter((product) => value === product.category)
// //         setProducts(newProducts)
// //     }
// //     console.log([new Set(Data.map((product) => product.category))]);
// //     const [categories,setCategories] = useState([...new Set(Data.map((product) => product.category))])
// //     return (
// //         <div className='p-[20px]'>
// //             <div className="buttons">
// //                 <div className='flex justify-center gap-[10px] mb-[20px]'>
// //                 <button onClick={()=>  setProducts(Data)} className="button p-[10px] text-white rounded bg-[#333]">All</button>

// //                     {
// //                         categories.map((category) =>
// //                             <button onClick={() => handleFilter(category)} className="button p-[10px] text-white rounded bg-[#333]">{category}</button>

// //                         )
// //                     }
// // {/* 
// //                     <button onClick={() => handleFilter("men's clothing")} className="button p-[10px] text-white rounded bg-[#333]">men's clothing</button>
// //                     <button onClick={() => handleFilter("jewelery")} className="button p-[10px] text-white rounded bg-[#333]">Jewelery</button>
// //                     <button onClick={() => handleFilter("electronics")} className="button p-[10px] text-white rounded bg-[#333]">Electronics</button>
// //                     <button onClick={() => handleFilter("women's clothing")} className="button p-[10px] text-white rounded bg-[#333]">Women's clothing</button>
// //                  */}
// //                 </div>
// //                 <div className="grid md:grid-cols-3 gap-[20px]">
// //                     {
// //                         products.map((product) =>
// //                                 <div key={product.id} className=" border rounded ">
// //                                     <div className="image flex justify-center">
// //                                         <img className='h-[200px] ' src={product.image} alt="" />
// //                                     </div>
// //                                     <div className="body p-[20px]">
// //                                         <p>{product.title}</p>
// //                                         <p>{product.price}</p>
// //                                         <p>{product.description}</p>
// //                                         <p>{product.rating.count}</p>
// //                                         <p>{product.rating.rate}</p>
// //                                     </div>
// //                                 </div>
// //                         )
// //                     }
// //                 </div>
// //             </div>
// //         </div>
// //     )
// // }


// import React, { useState } from 'react'
// import Data from './data'
// export default function FilterComponent() {
//     const [products,setProducts] = useState(Data);
//     const [categories,setCategories] = useState([...new Set(Data.map((product) => product.category))])
    
//     console.log(products);
//     // console.log(Data.map((product) => product.category));
//     // console.log(new Set(Data.map((product) => product.category)));
//     // console.log([...new Set(Data.map((product) => product.category))]);
    
//     function handleFilter(value) {
//         const newList = Data.filter((product) => product.category === value);
//         setProducts(newList)
//     }
    
//     return (
//         <div className='p-[20px]'>
//             <h2 className='text-center text-[32px] lg:text-[48px] font-bold mb-[20px]'>Products Filter App</h2>
//             <div className="buttons flex justify-center gap-[20px] flex-wrap mb-[20px]">
//                 <button onClick={()=> setProducts(Data)}  className='bg-[#333] p-[10px] rounded text-white font-bold'>All</button>   
//                 {
//                     categories.map((category) => 
//                         <button onClick={()=> handleFilter(category)}  className='bg-[#333] p-[10px] rounded text-white font-bold'>{category}</button>
//                 )
//                 }
//             </div>
//             <div className="products  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[20px]">
//                 {
//                     products.map((product) => 
//                     <div className='border p-[20px] rounded '>
//                         <div className="image flex justify-center">
//                             <img className='h-[200px] max-w-full' src={product.image} alt="" />
//                         </div>
//                         <div className="content">
//                             <p className='text-[20px] truncate font-bold'>{product.title}</p>
//                             <p className='text-[20px] text-[#20861d]'>{product.price}$</p>
//                             <p className='text-[18px] max-h-[80px] overflow-hidden'>{product.description}</p>
                            
//                         </div>
//                     </div>
//                     )
//                 }
//             </div>
//         </div>
//     )
// }




import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';
export default function FilterComponent() {
    const [products,setProducts] = useState([]);
    const [newProducts,setNewProducts] = useState();
    const [active,setActive] = useState("All")
    useEffect(()=> {
        axios.get('https://fakestoreapi.com/products')
        .then(res => setProducts(res.data))
    },[])

    useEffect(()=> {
        axios.get('https://fakestoreapi.com/products')
        .then(res => setNewProducts(res.data))
    },[])


    console.log([...new Set(products?.map((product)=> product.category))]);
    function handleFilter(category) {
        const newList = products.filter((product) => category === product.category);
        setNewProducts(newList)
    }
    return (
        <div className='p-[20px]'>  
            <div className=' flex mb-[20px] justify-center gap-[20px] flex-wrap'>
                <button onClick={() => {
                    setNewProducts(products)
                    setActive('All')
                }} className={`${active === 'All' ? '!bg-[#e6e937] !text-black font-bold' : ''} bg-[#333] p-[10px] rounded text-white px-[15px]`}>
                    All
                </button>
                {[...new Set(products?.map((product)=> product.category))].map((category)=>
                <button onClick={() => {
                    handleFilter(category)
                    setActive(category)
                }} className={`${active === category ? '!bg-[#e6e937] !text-black font-bold' : ''} bg-[#333] p-[10px] rounded text-white px-[15px]`}>
                    {category}
                </button>
                )}
                
            </div>
            <div className="products grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px]">
                {newProducts?.map((product) => 
                <ProductCard title={product.title} image={product.image} link={`/products/${product.id}`}/>
                )}
            </div>
        </div>
    )
}
