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
        <div className='m-8 flex flex-col gap-8'> 
            <button
            onClick={() => navigate(-1)}
            className='flex items-center gap-2 bg-white shadow-xl px-6 py-4 self-start rounded-md'
            >
                <i className="fa-solid fa-arrow-left"></i>
                Back
            </button>

            <section className='flex flex-col gap-6'>
                <img
                    src={country.flags.png}
                    alt={`${country.name} flag`}
                />
                <div className='flex flex-col gap-6'>
                    <h2 className='font-bold text-grey-950 text-xl'>{country.name}</h2>
                    <div className='flex flex-col gap-4'>
                        <p>Native Name: <span className='text-grey-400 font-light'>{country.languages[2].nativeName}</span></p>
                        <p>Population: <span className='text-grey-400 font-light'>{country.population.toLocaleString()}</span></p>
                        <p>Region: <span className='text-grey-400 font-light'>{country.region}</span></p>
                        <p>Sub Region: <span className='text-grey-400 font-light'>{country.subregion}</span></p>
                        <p>Capital: <span className='text-grey-400 font-light'>{country.capital}</span></p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <p>Top Level Domain: <span className='text-grey-400 font-light'>{country.topLevelDomain}</span></p>
                        <p>Currencies: <span className='text-grey-400 font-light'>{country.currencies[0].name}</span></p>
                        <p>Languages: <span className='text-grey-400 font-light'>{country.languages[0].name}</span></p>
                    </div>
                    <div>
                        <h2>Border Countries: <span>{country.borders[1]}</span></h2>
                    </div>
                </div>
            </section>
        </div>
    )
}