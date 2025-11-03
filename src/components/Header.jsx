export default function Header(){
    return (
        <header className="bg-white shadow-sm max-w-full flex items-center justify-between px-4 py-4">
            <h1 className="font-medium text-grey-950 text-xl">Where in this world?</h1>
            <div className="flex items-center justify-center gap-2">
                <i className="fa-regular fa-moon"></i>
                <p className="font-medium">Dark Mode</p>
            </div>
        </header>
    )
}