// import React, { useState } from 'react';

// export default function FormValidation() {

//     const [formData,setFormData] = useState({
//         username: '',
//         email: '',
//         password: '',
//         confirmPassword: ''
//     });
//     const [errors,setErrors] = useState({})
//     function handleSubmit(e) {
//         e.preventDefault();
//         const errorsValidation = {};
//         if(!formData.username.trim()) {
//             errorsValidation.username = 'UserName Required'
//         }
//         if(!formData.email.trim()) {
//             errorsValidation.email = 'Email Required'
//         }
//         if(!formData.password.trim()) {
//             errorsValidation.password = 'Password Required'
//         }
//         if(formData.password !== formData.confirmPassword) {
//             errorsValidation.confirmPassword = 'Password Not Matched'
//         }
//         if(Object.keys(errorsValidation).length === 0) {
//             alert('Data Confirmed')
//         }
//         setErrors(errorsValidation);

//     };

//     function handleChange(e) {
//         const name = e.target.name;
//         const value = e.target.value;
//         setFormData(
//             {
//                 ...formData,
//                 [name] : value
//             }
//         )
//     };

// console.log(formData);

//     return (
//         <div className="flex justify-center mt-[30px] px-[20px]">
//             <form onSubmit={handleSubmit} action="" className="lg:w-[500px]  border p-[20px] rounded ">
//                 <div className='mb-[20px]'>
//                     <label htmlFor="username" className="font-bold text-[20px] mb-[5px]">
//                         UserName:
//                     </label>
//                     <input
//                     type="text"
//                     name="username"
//                     id="username"
//                     className="w-full border outline-none p-[7px] px-[10px] rounded"
//                     onChange={handleChange}
//                     />
//                     {errors.username && <span className='text-[#e64444]'>{errors.username}</span>}
//                 </div>
//                 <div className='mb-[20px]'>
//                     <label htmlFor="email" className="font-bold text-[20px] mb-[5px]">
//                     Email:
//                     </label>
//                     <input
//                     type="email"
//                     name="email"
//                     id="email"
//                     className="w-full border outline-none p-[7px] px-[10px] rounded"
//                     onChange={handleChange}
//                     />
//                     {errors.email && <span className='text-[#e64444]'>{errors.email}</span>}
//                 </div>
//                 <div className='mb-[20px]'>
//                     <label htmlFor="password" className="font-bold text-[20px] mb-[5px]">
//                     Password:
//                     </label>
//                     <input
//                     type="password"
//                     name="password"
//                     id="password"
//                     className="w-full border outline-none p-[7px] px-[10px] rounded"
//                     onChange={handleChange}
//                     />
//                     {errors.password && <span className='text-[#e64444]'>{errors.password}</span>}
//                 </div>
//                 <div className='mb-[20px]'>
//                     <label htmlFor="confirmPassword" className="font-bold text-[20px] mb-[5px]">
//                     Confirm Password:
//                     </label>
//                     <input
//                     type="password"
//                     name="confirmPassword"
//                     id="confirmPassword"
//                     className="w-full border outline-none p-[7px] px-[10px] rounded"
//                     onChange={handleChange}
//                     />
//                     {errors.confirmPassword && <span className='text-[#e64444]'>{errors.confirmPassword}</span>}
//                 </div>
//                 <button type="submit" className='p-[10px] lg:px-[15px] bg-[#2891b1] lg:text-[18px] text-white rounded'>
//                     Submit
//                 </button>
//             </form>
//         </div>
//     );
// }

import React, { useState } from 'react';

export default function FormValidation() {
    const [errors,setErrors] = useState({})
    const [formData,setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    })
    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        setFormData({
            ...formData,
            [name]:value
        })
    }
    console.log(formData);
    
    function handleSubmit(e) {
        e.preventDefault();
        const ValidationErrors = {};

        if(!formData.username.trim()) {
            ValidationErrors.username = "UserName Required"
        }

        if(!formData.email.trim()) {
            ValidationErrors.email = "Email Required"
        }

        // else if(!/\S+@\S\.\S+/.test(formData.email)) {
        //     ValidationErrors.email = "Email is not valid"
        // }
        
        if(!formData.password.trim()) {
            ValidationErrors.password = "Password Required"
        }else if(formData.password.length < 6) {
            ValidationErrors.password = "Password Must be large than 6 Characters"
        }

        if(formData.confirmPassword !== formData.password) {
            ValidationErrors.confirmPassword = "Password not Matched"
        }

        setErrors(ValidationErrors)
        console.log(ValidationErrors)

        if(Object.keys(ValidationErrors).length === 0) {
            alert('Data  Confirmed');
        }
        
    }

    return (
        <div className="flex justify-center mt-[30px] px-[20px]">
        <form onSubmit={handleSubmit} action="" className=" bg-[#999] rounded w-full lg:w-[500px] p-[20px]">
            <div className="flex flex-col mb-[20px]">
                <label className="lg:text-[18px] font-medium mb-1" htmlFor="username">
                    UserName:
                </label>
                <input
                    className="p-[8px] outline-none"
                    type="text"
                    name="username"
                    id="username"
                    onChange={handleChange}
                />
                {errors.username && <span className='text-red-600 mt-[5px] font-medium text-[18px]'>{errors.username}</span>}
            </div>
            <div className="flex flex-col mb-[20px]">
                <label className="lg:text-[18px] font-medium mb-1" htmlFor="email">
                    Email:
                </label>
                <input
                    className="p-[8px] outline-none"
                    type="email"
                    name="email"
                    id="email"
                    onChange={handleChange}
                />
                {errors.email && <span className='text-red-600 mt-[5px] font-medium text-[18px]'>{errors.email}</span>}
            </div>
            <div className="flex flex-col mb-[20px]">
                <label className="lg:text-[18px] font-medium mb-1" htmlFor="password">
                    Password:
                </label>
                <input
                    className="p-[8px] outline-none"
                    type="password"
                    name="password"
                    id="password"
                    onChange={handleChange}
                />
                {errors.password && <span className='text-red-600 mt-[5px] font-medium text-[18px]'>{errors.password}</span>}
            </div>
            <div className="flex flex-col mb-[20px]">
                <label className="lg:text-[18px] font-medium mb-1" htmlFor="confirmPassword">
                    Confirm Password:
                </label>
                <input
                    className="p-[8px] outline-none"
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    onChange={handleChange}
                />
                {errors.confirmPassword && <span className='text-red-600 mt-[5px] font-medium text-[18px]'>{errors.confirmPassword}</span>}
            </div>
            <button className='bg-[#277ea0] text-white font-medium p-[10px] rounded'>
                Submit
            </button>
        </form>
        </div>
    );
}
