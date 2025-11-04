import Header from './components/Header'
import Searchbar from './components/Searchbar';
import Filter from './components/Filter';
import Countries from './components/Countries';
import CountryDetails from './components/CountryDetails';
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App(){

  const [getCountry , setGetCountry] = useState('');
  const [ selectedRegion , setSelectedRegion] = useState('')

  return (
    <Router>
      <Header/>
      <Routes>
        <Route
          path='/'
          element={
            <>
              
              <Searchbar getCountry={getCountry} setGetCountry={setGetCountry}/>
              <Filter selectedRegion={selectedRegion} setSelectedRegion={setSelectedRegion}/>
              <Countries getCountry={getCountry} selectedRegion={selectedRegion}/>
            </>
          }
        />
        <Route path='/country/:name' element={<CountryDetails/>}/>
      </Routes>
    </Router>
  )
}