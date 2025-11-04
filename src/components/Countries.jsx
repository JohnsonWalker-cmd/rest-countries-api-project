import { useState , useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Countries({getCountry, selectedRegion }){
    const [ countries , setCountries] = useState(null)

    const navigate = useNavigate();

    useEffect(()=> {
        fetch('/data.json')
          .then(response => response.json())
          .then(data => {
            setCountries(data)
          })
    } , []);

    const filteredCountries = countries?.filter(country => {
        const matchesSearch = country.name.toLowerCase().includes(getCountry.toLowerCase())

        const filterByRegion = country.region === selectedRegion || selectedRegion === ''
        

        return matchesSearch && filterByRegion;
    });



    return (
        <main className="flex items-center flex-col gap-6 mt-6">
           {filteredCountries &&
           filteredCountries.map((country , index) => (
            <div 
            key={index}
            onClick={()=> navigate(`/country/${country.name}`)}
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