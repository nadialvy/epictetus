
import Logo from './logo';
import NavItem from './NavItem';
import Search from './Search';

export default function Navbar(){
    return(
        <nav className="pb-10">
            <div className="container mx-auto">
                <div className="flex items-center">
                <Logo />
                <div className="w-8/12">
                    <NavItem />
                </div>
                    <Search />
                </div>
            </div>
        </nav>
    );
}