import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function CountryDetails(){
    const { name } = useParams();
    const navigate = useNavigate();
    const [country, setCountry] = useState(null);

    useEffect(()=> {
        fetch('/data.json')
        .then(response => response.json())
        .then( data => {
            const foundCountry = data.find(item => item.name === name);
            setCountry(foundCountry)
        })
    } , [name])

    if(!country) return <p className='mt-10 text-center'>Loading...</p>
    return (
        <div className='m-8 flex flex-col gap-12'> 
            <button
            onClick={() => navigate(-1)}
            className='flex items-center gap-2 bg-white shadow-xl px-6 py-4 self-start rounded-md dark:bg-grey-400'
            >
                <i className="fa-solid fa-arrow-left dark:text-white"></i>
                <p>Back</p>
            </button>

            <section className='flex flex-col md:flex-row gap-12'>
                <img
                    src={country.flags.png}
                    alt={`${country.name} flag`}
                    className='md:flex-1'
                />
                <div className='flex flex-col gap-6 md:hidden'>
                    <h2 className='font-bold text-grey-950 text-xl dark:text-white'>{country.name}</h2>
                    <div className='flex flex-col gap-4'>
                        <p className='dark:text-grey-400'>Native Name: <span className='text-grey-400 font-light'>{country.nativeName}</span></p>
                        <p className='dark:text-grey-400'>Population: <span className='text-grey-400 font-light'>{country.population.toLocaleString()}</span></p>
                        <p className='dark:text-grey-400'>Region: <span className='text-grey-400 font-light'>{country.region}</span></p>
                        <p className='dark:text-grey-400'>Sub Region: <span className='text-grey-400 font-light'>{country.subregion}</span></p>
                        <p className='dark:text-grey-400'>Capital: <span className='text-grey-400 font-light'>{country.capital}</span></p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <p className='dark:text-grey-400'>Top Level Domain: <span className='text-grey-400 font-light'>{country.topLevelDomain}</span></p>
                        <p className='dark:text-grey-400'>Currencies: <span className='text-grey-400 font-light'>{country.currencies[0].name}</span></p>
                        <p className='dark:text-grey-400'>Languages: <span className='text-grey-400 font-light'>{country.languages[0].name}</span></p>
                    </div>
                    <div>
                        <h2 className='mb-4'>Border Countries:</h2>
                        <div className='flex gap-4'>
                            <button className='bg-white shadow-lg py-2 px-4 w-full rounded-md text-grey-400'>{country.borders[0]}</button>
                            <button className='bg-white shadow-lg py-2 px-4 w-full rounded-md  text-grey-400'>{country.borders[1]}</button>
                            <button className='bg-white shadow-lg py-2 px-4 w-full rounded-md  text-grey-400'>{country.borders[2]}</button>
                        </div>
                    </div>
                </div>
                <div className='md:flex-1 hidden'>
                    <h2 className='font-bold text-grey-950 text-xl'>{country.name}</h2>
                    <div className='flex justify-between mt-8'>
                        <div className='flex flex-col gap-4'>
                            <p className='dark:text-grey-400'>Native Name: <span className='text-grey-400 font-light'>{country.nativeName}</span></p>
                            <p className='dark:text-grey-400'>Population: <span className='text-grey-400 font-light'>{country.population.toLocaleString()}</span></p>
                            <p className='dark:text-grey-400'>Region: <span className='text-grey-400 font-light'>{country.region}</span></p>
                            <p className='dark:text-grey-400'>Sub Region: <span className='text-grey-400 font-light'>{country.subregion}</span></p>
                            <p className='dark:text-grey-400'>Capital: <span className='text-grey-400 font-light'>{country.capital}</span></p>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <p className='dark:text-grey-400'>Top Level Domain: <span className='text-grey-400 font-light'>{country.topLevelDomain}</span></p>
                            <p className='dark:text-grey-400'>Currencies: <span className='text-grey-400 font-light'>{country.currencies[0].name}</span></p>
                            <p className='dark:text-grey-400'>Languages: <span className='text-grey-400 font-light'>{country.languages[0].name}</span></p>
                        </div>
                    </div>
                    <div className='mt-6'>
                        <h2 className='mb-4'>Border Countries:</h2>
                        <div className='flex gap-4'>
                            <button className='bg-white shadow-lg py-2 px-4 w-full rounded-md text-grey-400'>{country.borders[0]}</button>
                            <button className='bg-white shadow-lg py-2 px-4 w-full rounded-md  text-grey-400'>{country.borders[1]}</button>
                            <button className='bg-white shadow-lg py-2 px-4 w-full rounded-md  text-grey-400'>{country.borders[2]}</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}