import { FaSearch } from "react-icons/fa"
import { Link } from "react-router-dom"
export default function Header() {
    return (
        <div className="p-2">
            <header className='bg-fifth  '>
                <div className="flex justify-between items-center max-w-6xl mx-auto p-4">
                    <Link to="/">
                        <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
                            <span className="text-fourth ">Dream</span>
                            <span className='text-secondary'>Space</span>
                        </h1>
                    </Link>
                    <form action="" className=' text-primary p-3 rounded-md flex items-center  border-secondary border' >
                        <input type="text" name="" id="" placeholder='Search...' className='bg-transparent focus:outline-none w-24 sm:w-64 ' />
                        <FaSearch />
                    </form>
                    <ul className="flex gap-4">
                        <Link to="/"><li className="hidden sm:inline text-primary hover:text-secondary">Home</li></Link>
                        <Link to="/about"><li className="hidden sm:inline text-primary hover:text-secondary">About</li></Link>
                        <Link to="/sign-in"><li className=" sm:inline text-primary hover:text-secondary">Sign In</li></Link>
                    </ul>
                </div>
            </header>
        </div>
    )
}
