import Link from 'next/link';
import Home from './Home';
import Experiences from './Experiences';
import Projects from './Projects';
import Contacts from './Contacts';

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex bg-gray-200 h-15 w-full justify-center">
            <div className="flex justify-between items-center gap-6">
                <Link href="/" className="text-white ">Home</Link>
                <Link href="/Experiences" className="text-white">Experiences</Link>
                <Link href="/Projects" className="text-white">Projects</Link>
                <Link href="/Contact" className="text-white">Contact</Link>
            </div>
        </nav>
    );
}
export default Navbar;