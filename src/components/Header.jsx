export default function Header({darkMode , setDarkMode}){
    console.log('darkMode:', darkMode)
    return (
        <header className="bg-white shadow-sm max-w-full flex items-center justify-between px-4 py-4 dark:bg-gray-800 ">
            <h1 className="font-medium text-grey-950 text-xl dark:text-white">Where in this world?</h1>
            <div className="flex items-center justify-center gap-2 cursor-pointer" onClick={()=> {
                    setDarkMode(!darkMode)}
                }
               
            >
                {darkMode ? 
                    <>
                        <i className="fa-regular fa-sun dark:text-white"></i>
                        <p className="font-medium dark:text-white">Light Mode</p>  
                    </>
                 :
                 <>
                    <i className="fa-regular fa-moon"></i>
                    <p className="font-medium">Dark Mode</p>
                 </>
                }
            </div>
        </header>
    )
}