export default function Searchbar(){
    return (
        <div className="relative m-4">
            <i className="fa-solid fa-magnifying-glass text-grey-400 absolute bottom-1/2 translate-y-1/2 left-4"></i>
            <input
            type="text"
            placeholder="Search for a country"
            className="p-2 pl-10 w-full rounded-sm bg-white shadow-sm"
            />
        </div>
    )
}