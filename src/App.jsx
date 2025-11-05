import Header from './components/Header'
import Searchbar from './components/Searchbar';
import Filter from './components/Filter';
import Countries from './components/Countries';
import CountryDetails from './components/CountryDetails';
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';

export default function App(){

  const [getCountry , setGetCountry] = useState('');
  const [ selectedRegion , setSelectedRegion] = useState('')
  const [darkMode , setDarkMode] = useState(()=> {

    return localStorage.getItem('theme') === 'dark'
  });

  useEffect(()=> {
    console.log('useEffect running, darkMode:', darkMode)
    if(darkMode){
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme' , 'dark')
    }else{
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme' , 'light')
    }
  } , [darkMode])

  return (
    <Router>
      <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
      <Routes>
        <Route
          path='/'
          element={
            <div className='dark:bg-gray-900'>
              <div className='flex md:justify-between md:items-center flex-col md:flex-row'>
                <Searchbar getCountry={getCountry} setGetCountry={setGetCountry}/>
                <Filter selectedRegion={selectedRegion} setSelectedRegion={setSelectedRegion}/>
              </div>
              <Countries getCountry={getCountry} selectedRegion={selectedRegion}/>
            </div>
          }
        />
        <Route path='/country/:name' element={<CountryDetails/>}/>
      </Routes>
    </Router>
  )
}