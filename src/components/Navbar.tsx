import { useState } from 'react';

const Navbar = () => {
    const [nav, setNav] = useState(true);

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
            <img
            src="/luna.png"
            width={64}
            height={64} 
            ></img>
            <ul className="hidden md:flex">
                <li className="p-4">
                    <a href="#about">About</a>
                </li>
                <li className="p-4">
                    <a href="#projects">Projects</a>
                </li>
                <li className="p-4">
                    <a href="#contact">Contact</a>
                </li>
            </ul>
            
            <div onClick={handleNav} className="block md:hidden">
                { !nav ? 
                <button 
                className="material-symbols-rounded" 
                style={{fontSize: "32px"}}
                >Close</button> : 
                <button 
                className="material-symbols-rounded" 
                style={{fontSize: "32px"}}
                >Menu</button>
                }
            </div>

            <div className={!nav ? 'fixed left-0 top-0 w-[50%] h-full bg-zinc-900 ease-in-out duration-300' : 'fixed left-[-100%]'}>
                <img
                src="/luna.png"
                className="m-4"
                width={64}
                height={64} 
                ></img>
                <ul className="p-4">
                    <li className="p-4 border-b">
                        <a>About</a>
                    </li>
                    <li className="p-4 border-b">
                        <a>Projects</a>
                    </li>
                    <li className="p-4">
                        <a>Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;