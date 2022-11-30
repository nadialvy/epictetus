import { useState } from 'react';
import classnames from 'classnames';

export default function NavItem({ direction, scheme } : { direction: any, scheme: any }){
    const [dropdown, setDropdown] = useState(false);

    const dirs = {
        horizontal: "space-x-10 flex",
        vertical: "space-y-6 flex-col"
    }

    const pickedDir = dirs[direction as keyof typeof dirs] || dirs["horizontal"];

    const schemes = {
        light: "text-white hover:text-white text-opacity-60",
        dark: "text-black font-semibold",
    }

    const pickedScheme = schemes[scheme as keyof typeof schemes] || schemes["light"];

    return(
        <ul className={classnames("flex items-center", pickedDir)}>
            <li><a href="#" className={classnames("hover:underline", pickedScheme)}>UI Design</a></li>
            <li><a href="#" className={classnames("hover:underline", pickedScheme)}>Front-end</a></li>
            <li><a href="#" className={classnames("hover:underline", pickedScheme)}>Back-end</a></li>
            <li className="relative hover:underline">
                <a
                    href="#"
                    className={classnames("cursor-pointer flex items-center", pickedScheme)}
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