import React, { useLayoutEffect, useState } from 'react'
export default function ResizeWindow() {
    // const [windowSize,setWindowSize] = useState({
    //     height: 0,
    //     width: 0,
    // })
    const [windowSize,setWindowSize] = useState({
        height: window.innerHeight,
        width: window.innerWidth,
    })
    function handleResize() {
        setWindowSize({
            height: window.innerHeight,
            width: window.innerWidth,
        })
    }
    useLayoutEffect(()=> {
        window.addEventListener('resize',handleResize);
    },[])
    return (
        <div className='flex justify-center items-center h-screen'>
            <div>
                Resize Window
                <p>Height: {windowSize.height} Px</p>
                <p>Width: {windowSize.width} Px</p>
            </div>
        </div>
    )
}




// import React, { useLayoutEffect, useState } from 'react'

// export default function useWindowResize() {
//     const [windowSize,setWindowSize] = useState({
//         height: window.innerHeight,
//         width: window.innerWidth,
//     });

//     function handleResize() {
//         setWindowSize({
//             height: window.innerHeight,
//             width: window.innerWidth,
//         })
//     };

//     useLayoutEffect(()=> {
//         window.addEventListener('resize',handleResize);
//     },[]);

//     return windowSize
// }
