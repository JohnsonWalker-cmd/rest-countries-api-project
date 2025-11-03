import { useState , useEffect } from 'react'
export default function Countries(){
    const [ countries , setCountries] = useState(null)

    useEffect(()=> {
        fetch('/data.json')
          .then(response => response.json())
          .then(data => {
            setCountries(data)
          })
    } , []);

    return (
        <main className="flex items-center flex-col gap-6 mt-6">
           {countries &&
           countries.map((country , index) => (
            <div 
            key={index}
            className='bg-white shadow-sm rounded-sm flex flex-col'
            >
                <img 
                src={country.flags.png}
                className='object-cover rounded-t-sm w-full'
                />
                <div
                className='p-6'
                >
                    <h2 className='mb-4 text-grey-950 font-bold text-xl'>{country.name}</h2>
                    <p>Population: <span className='text-grey-400 font-light'>{country.population.toLocaleString()}</span></p>
                    <p>Region: <span className='text-grey-400 font-light'>{country.region}</span></p>
                    <p>Capital: <span className='text-grey-400 font-light'>{country.capital}</span></p>
                </div>
            </div>
           ))
           }
        </main>
    )
}