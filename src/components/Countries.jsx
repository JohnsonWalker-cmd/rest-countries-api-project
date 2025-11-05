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
          .catch((error)=> {
            console.log('Promise rejected with:' , error)
          })
    } , []);

    const filteredCountries = countries?.filter(country => {
        const matchesSearch = country.name.toLowerCase().includes(getCountry.toLowerCase())

        const filterByRegion = country.region === selectedRegion || selectedRegion === ''
        

        return matchesSearch && filterByRegion;
    });



    return (
        <main className="grid md:grid-cols-4 grid-cols-1 gap-6 mt-6 mx-4">
           {filteredCountries &&
           filteredCountries.map((country , index) => (
            <div 
            key={index}
            onClick={()=> navigate(`/country/${country.name}`)}
            className='bg-white shadow-sm rounded-sm flex flex-col dark:bg-grey-950'
            >
                <img 
                src={country.flags.png}
                className='object-cover rounded-t-sm w-full'
                />
                <div
                className='p-6'
                >
                    <h2 className='mb-4 text-grey-950 font-bold text-xl dark:text-white'>{country.name}</h2>
                    <p className='dark:text-gray-400'>Population: <span className='text-grey-400 font-light'>{country.population.toLocaleString()}</span></p>
                    <p className='dark:text-gray-400'>Region: <span className='text-grey-400 font-light'>{country.region}</span></p>
                    <p className='dark:text-gray-400'>Capital: <span className='text-grey-400 font-light'>{country.capital}</span></p>
                </div>
            </div>
           ))
           }
        </main>
    )
}