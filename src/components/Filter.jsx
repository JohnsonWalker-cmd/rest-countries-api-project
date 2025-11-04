import { useState } from 'react'

export default function Filter({setSelectedRegion}){
    const [ dropdown , setDropdown] = useState(false);


    return (
        <div className="w-fit relative mx-4">
            <div className="mt-6 mb-2  bg-white rounded-md p-4 flex items-center gap-6 shadow-sm w-fit cursor-pointer">
                <h3 className="text-md">Filter by Region</h3>
                <i 
                className={`fa-solid ${dropdown ? "fa-angle-down ": "fa-angle-up"} text-sm`}
                onClick={()=> setDropdown(!dropdown)}
                ></i>
            </div>
            {dropdown && <div className="absolute  bg-white rounded-md p-4 shadow-sm w-full">
                <ul className="space-y-2">
                    <li className="cursor-pointer hover:font-semibold" onClick={()=> {setSelectedRegion('Africa'); setDropdown(false)}}>Africa</li>
                    <li className="cursor-pointer hover:font-semibold" onClick={()=> {setSelectedRegion('America'); setDropdown(false)}}>America</li>
                    <li className="cursor-pointer hover:font-semibold" onClick={()=> {setSelectedRegion('Asia');  setDropdown(false)}}>Asia</li>
                    <li className="cursor-pointer hover:font-semibold" onClick={()=> {setSelectedRegion('Europe'); setDropdown(false)}}>Europe</li>
                    <li className="cursor-pointer hover:font-semibold" onClick={()=> {setSelectedRegion('Oceania'); setDropdown(false)}}>Oceania</li>
                </ul>
            </div>}
        </div>
    )
}