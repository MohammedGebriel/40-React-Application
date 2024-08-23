import React from 'react'
import './style.css'
import useLocalStorage from './useLocalStorage'

export default function LightDarkMode() {
    const [theme,setTheme] = useLocalStorage('theme','dark')

    function handleToggleTheme() {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }
    
    return (
        <div data-theme={theme} className='light-dark-mode'>
            <div className='container-theme'>
                <p>Hello World !</p>
                <button onClick={()=> handleToggleTheme()}>Change Theme</button>
            </div>
        </div>
    )
}
