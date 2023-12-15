import Link from "next/link";
import { faHome, faSearch, faCompass, faBell, faUser, faCog, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import NavLink from "../common/NavLink";

const Navbar = () => {
    return (
        <nav className="flex flex-col items-center h-3/4 justify-between border-r border-gray-600">
            <div className="h-1/4 flex items-center">
                <Link href="/">
                    <img src="/logo-no-background.png" alt="logo" className="w-36"/>
                </Link>
            </div>
            <div className="flex flex-col h-3/4 gap-6">
                <NavLink icon={faHome} text="Home" link="/"/>
                <NavLink icon={faSearch} text="Search" link="/search"/>
                <NavLink icon={faPaperPlane} text="Messages" link="/messages"/>
                <NavLink icon={faCompass} text="Explore" link="/explore"/>
                <NavLink icon={faBell} text="Notifications" link="/notifications"/>
                <NavLink icon={faUser} text="Profile" link="/profile"/>
                <NavLink icon={faCog} text="Settings" link="/settings"/>
            </div>
        </nav>
    );
};

export default Navbar;
