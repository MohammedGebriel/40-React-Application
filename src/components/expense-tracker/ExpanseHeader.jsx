import { GlobalContext } from './Context';
import React, { useContext } from 'react'
import { FaTimes } from "react-icons/fa";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';


// import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';






const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    };


export default function ExpanseHeader() {
    const {handleSubmit,transactionData,setTransactionData} = useContext(GlobalContext)

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);




    function handleChangeForm(event) {
        setTransactionData({
            ...transactionData,
            [event.target.name]: event.target.value,
        })
    }

    return (
        <div className='flex items-center justify-between p-[10px] py-[20px] lg:p-[20px]'>
            <h1 className='text-[#36a1d3] text-[18px] lg:text-[35px] font-bold'>Expense Tracker</h1>
            <button onClick={handleOpen} className='bg-[#36a1d3] p-[5px] lg:p-[10px] rounded-[12px] font-bold'>Add New Transaction</button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className='w-[320px]  lg:w-[600px]'>
                    <div className=''>
                        <div className="header-modal flex justify-between items-center mb-[20px]">
                            <h2 className='text-[22px]'>Add New Transaction </h2>
                            <span onClick={handleClose}>
                                <FaTimes className='text-[22px] cursor-pointer'/>
                            </span>
                        </div>
                    </div>
                    <div className="form">
                        <form action="">
                            <div className='mb-[10px] description'>
                                <p className="label text-[22px] mb-[10px]">
                                    Enter Description
                                </p>
                                <input 
                                    className='w-full border bg-white p-[10px] rounded outline-none' 
                                    placeholder='Enter Transaction Description' 
                                    type="text" 
                                    name="description" 
                                    id="" 
                                    onChange={handleChangeForm}
                                />
                            </div>
                            <div className='mb-[10px] amount'>
                                <p className="label text-[22px] mb-[10px]">
                                    Enter Amount
                                </p>
                                <input 
                                    className='w-full border bg-white p-[10px] rounded outline-none' 
                                    placeholder='Enter Transaction Amount' 
                                    type="text" 
                                    name="amount" 
                                    id="" 
                                    onChange={handleChangeForm}
                                />
                            </div>
                            <div className="radio-group flex items-center gap-[10px]" >
                                {/* <select name="type" id="" onChange={handleChangeForm}>
                                    <option value="Income">Income</option>
                                    <option value="Expense">Expense</option>
                                </select> */}
                                <FormControl>
                                    <FormLabel id="demo-row-radio-buttons-group-label">Interaction</FormLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="type"
                                        onChange={handleChangeForm}
                                    >
                                        <FormControlLabel value="Income" control={<Radio />} label="Income" />
                                        <FormControlLabel value="Expense" control={<Radio />} label="Expense" />
                                    </RadioGroup>
                                </FormControl>

                            </div>
                            <div className="buttons flex justify-end gap-[15px] ">
                                <button onClick={handleClose} className='bg-[#eee] py-[10px] px-[15px] rounded font-medium'>
                                    Cancel
                                </button>
                                <button onClick={handleSubmit} type='submit' className='bg-[#eee]  rounded font-medium'>
                                    <span onClick={handleClose} className='w-full h-full block py-[10px] px-[15px]' >
                                        Add
                                    </span>
                                </button>
                            </div>
                        </form>
                    </div>
                </Box>
            </Modal>
        </div>

    )
}
