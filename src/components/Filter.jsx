import { useState } from 'react'

export default function Filter(){
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
                    <li className="cursor-pointer hover:font-semibold">Africa</li>
                    <li className="cursor-pointer hover:font-semibold">America</li>
                    <li className="cursor-pointer hover:font-semibold">Asia</li>
                    <li className="cursor-pointer hover:font-semibold">Europe</li>
                    <li className="cursor-pointer hover:font-semibold">Oceania</li>
                </ul>
            </div>}
        </div>
    )
}