import Link from 'next/link';
const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex h-15 w-full justify-center" style={{background: "#2E2E2E"}}>
            <div className="flex justify-between items-center gap-6">
                <Link href="#home" scroll={true} className="text-white">Home</Link>&nbsp;
                <Link href="#experiences" className="text-white">Experiences</Link>&nbsp;
                <Link href="#projects" className="text-white">Projects</Link>&nbsp;
                <Link href="#contact" className="text-white">Contact</Link>&nbsp;
            </div>
        </nav>
    );
}
export default Navbar;