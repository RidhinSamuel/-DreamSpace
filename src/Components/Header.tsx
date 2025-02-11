import { FaSearch } from "react-icons/fa"
import { Link } from "react-router-dom"
export default function Header() {
    return (
        <header className='bg-fourth shadow-md'>
            <div className="flex justify-between items-center max-w-6xl mx-auto p-4">
                <Link to="/">
                    <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
                        <span className="text-primary">Dream</span>
                        <span className='text-secondary'>Space</span>
                    </h1>
                </Link>
                <form action="" className='bg-slate-50 p-3 rounded-md flex items-center' >
                    <input type="text" name="" id="" placeholder='Search...' className='bg-transparent focus:outline-none w-24 sm:w-64' />
                    <FaSearch className="text-slate-400" />
                </form>
                <ul className="flex gap-4">
                    <Link to="/"><li className="hidden sm:inline text-primary hover:text-secondary">Home</li></Link>
                    <Link to="/about"><li className="hidden sm:inline text-primary hover:text-secondary">About</li></Link>
                    <Link to="/sign-in"><li className=" sm:inline text-primary hover:text-secondary">Sign In</li></Link>
                </ul>
            </div>
        </header>
    )
}
