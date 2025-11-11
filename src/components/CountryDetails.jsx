import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function CountryDetails() {
  const { name } = useParams();
  const navigate = useNavigate();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => {
        const foundCountry = data.find((item) => item.name === name);
        setCountry(foundCountry);
      })
      .catch((error) => {
        console.error('Promise rejected with:', error);
      });
  }, [name]);

  if (!country) {
    return <p className="mt-10 text-center text-white">Loading...</p>;
  }

  return (
    <div className="min-h-screen m-8 flex flex-col gap-12 dark:bg-gray-800">
      {/* Back button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 bg-white shadow-xl px-6 py-4 self-start rounded-md dark:bg-gray-700 dark:text-gray-100"
      >
        <i className="fa-solid fa-arrow-left"></i>
        <p>Back</p>
      </button>

      {/* Country details */}
      <section className="flex flex-col md:flex-row gap-12">
        <img
          src={country.flags.png}
          alt={`${country.name} flag`}
          className="md:flex-1 shadow-md"
        />

        {/* Right-side info */}
        <div className="flex flex-col md:flex-1 justify-center text-gray-900 dark:text-gray-100">
          <h2 className="font-bold text-3xl mb-6">{country.name}</h2>

          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div className="flex flex-col gap-3">
              <p>
                <span className="font-semibold">Native Name:</span>{' '}
                <span className="text-gray-400">{country.nativeName}</span>
              </p>
              <p>
                <span className="font-semibold">Population:</span>{' '}
                <span className="text-gray-400">
                  {country.population.toLocaleString()}
                </span>
              </p>
              <p>
                <span className="font-semibold">Region:</span>{' '}
                <span className="text-gray-400">{country.region}</span>
              </p>
              <p>
                <span className="font-semibold">Sub Region:</span>{' '}
                <span className="text-gray-400">{country.subregion}</span>
              </p>
              <p>
                <span className="font-semibold">Capital:</span>{' '}
                <span className="text-gray-400">{country.capital}</span>
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <p>
                <span className="font-semibold">Top Level Domain:</span>{' '}
                <span className="text-gray-400">{country.topLevelDomain}</span>
              </p>
              <p>
                <span className="font-semibold">Currencies:</span>{' '}
                <span className="text-gray-400">{country.currencies[0].name}</span>
              </p>
              <p>
                <span className="font-semibold">Languages:</span>{' '}
                <span className="text-gray-400">
                  {country.languages.map((lang) => lang.name).join(', ')}
                </span>
              </p>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="font-semibold mb-4">Border Countries:</h3>
            <div className="flex flex-wrap gap-3">
              {country.borders?.map((border) => (
                <button
                  key={border}
                  className="bg-white dark:bg-gray-700 dark:text-gray-100 shadow-md py-2 px-6 rounded-md"
                >
                  {border}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
