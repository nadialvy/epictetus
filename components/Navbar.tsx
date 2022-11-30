import { useState } from 'react';
import Nav from './Nav';
import classnames from 'classnames';
import Search from './Search';
import NavItem from './NavItem';
import Logo from './Logo';

export default function Navbar(){
    const [offCanvas, setOffCanvas] = useState(false);

    return(
        <>
            <div className="flex items-center">
                <Logo />
                <div className="w-8/12">
                    <div className="md:block hidden">
                        <Nav
                                direction="horizontal"
                                scheme="light"
                        />
                    </div>
                </div>
                <Search />
            </div>

            {/* <div className={classnames(
                "fixed bg-gray-800 z-10 top-0 h-full w-full md:hidden transition-all",
            )}>
                <Nav
                    direction="vertical"
                    scheme="light"
                />
            </div> */}

        </>
    );
}