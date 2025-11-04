import Header from './components/Header'
import Searchbar from './components/Searchbar';
import Filter from './components/Filter';
import Countries from './components/Countries';
import { useState } from 'react'

export default function App(){

  const [getCountry , setGetCountry] = useState('');
  const [ selectedRegion , setSelectedRegion] = useState('')

  return (
    <>
      <Header/>
      <Searchbar getCountry={getCountry} setGetCountry={setGetCountry}/>
      <Filter selectedRegion={selectedRegion} setSelectedRegion={setSelectedRegion}/>
      <Countries getCountry={getCountry} selectedRegion={selectedRegion}/>
    </>
  )
}