import React, { useEffect, useState } from 'react'
import SearchWeather from './SearchWeather'

export default function WeatherApp() {
    const [search,setSearch] = useState('');
    const [weatherData,setWeatherData] = useState();
    const [loading,setLoading] = useState();

    async function fetchWeatherData(Param) {
        try{
            setLoading(true)
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${Param || "London"}&appid=e46504085f0245545d56f422567b79a6`);
            const data = await response.json();
            if(data) {
                setWeatherData(data);
                setLoading(false);
            }
        }catch(e) {
            console.log(e);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchWeatherData(search)
    },[])

    function handleSearch() {
        fetchWeatherData(search)
        setSearch('')
    }

    function getCurrentDate() {
        return new Date().toLocaleDateString('en-us', {
            weekday : 'long',
            month : 'long',
            day: "numeric",
            year : 'numeric'
        })
    }

    console.log(weatherData);

    return (
        <div className='lg:w-[600px] bg-slate-300 mx-[30px] lg:mx-auto mt-[20px] rounded-[20px] p-[20px]'>
            <SearchWeather search={search} setSearch={setSearch} handleSearch={handleSearch}/>
            <div className="information text-center mt-[30px]">
                <p className='text-[30px] font-bold'>{weatherData?.name},{weatherData?.sys?.country}</p>
                <p className='my-[10px] italic font-medium text-[20px]'>{getCurrentDate()}</p>
                <p className='text-[50px] font-bold'>{Math.floor(weatherData?.main?.temp - 273)} C</p>
                <p className='text-[22px] font-medium'>{weatherData?.weather[0]?.description}</p>
                <div className='flex justify-center gap-[50px] mt-[20px] mb-[40px] font-medium text-[22px]'>
                    <div>
                        <p>{weatherData?.wind?.speed}</p>
                        <p>Wind Speed</p>
                    </div>
                    <div>
                        <p>{weatherData?.main?.humidity}</p>
                        <p>Humidity</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
