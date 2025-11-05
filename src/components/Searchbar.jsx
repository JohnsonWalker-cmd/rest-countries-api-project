

export default function Searchbar({getCountry , setGetCountry}){
    
    return (
        <div className="relative m-4 md:w-96">
            <i className="fa-solid fa-magnifying-glass text-grey-400 absolute bottom-1/2 translate-y-1/2 left-4 dark:text-white"></i>
            <input
            value={getCountry}
            type="text"
            placeholder="Search for a country"
            className="p-2 pl-10 w-full rounded-sm bg-white shadow-sm dark:bg-grey-950 dark:text-grey-50"
            onChange={(e) => setGetCountry(e.target.value)}
            />
        </div>
    )
}