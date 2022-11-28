import { useState } from 'react';

export default function NavItem(){
    const [dropdown, setDropdown] = useState(false);

    return(
        <ul className="space-x-10 flex items-center">
            <li><a href="#" className="hover:underline">UI Design</a></li>
            <li><a href="#" className="hover:underline">Front-end</a></li>
            <li><a href="#" className="hover:underline">Back-end</a></li>
            <li className="relative hover:underline">
                <a
                    href="#"
                    className="cursor-pointer flex items-center"
                    onClick={() => setDropdown(!dropdown)}
                >
                Lainnya
                <svg className="ml-2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 6L8 10L12 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                </a>
                {dropdown && (
                <ul className="absolute w-[200px] bg-gray-800 rounded mt-4">
                    <li><a href="#" className="flex py-3 px-6 hover:bg-gray-700/60 border-b border-white/5">Internet</a></li>
                    <li><a href="#" className="flex py-3 px-6 hover:bg-gray-700/60 border-b border-white/5">Book</a></li>
                    <li><a href="#" className="flex py-3 px-6 hover:bg-gray-700/60">Open Source</a></li>
                </ul>
                )}
            </li>
        </ul>
    );
}