import React, { useEffect, useState } from 'react';
import { MdSunny } from "react-icons/md";
import { LuSunMoon } from "react-icons/lu";

const Theme = () => {

    const [themes, setThemes] = useState(() => {
        let initialTheme = localStorage.getItem("theme")
        if (!initialTheme) {
            initialTheme = "light"
        }
        return initialTheme
    })

    useEffect(() => {
        const html = document.documentElement;
        html.setAttribute("data-theme",themes)
        localStorage.setItem('theme', themes)
    }, [themes])

    const handleTheme = () => {
        setThemes(prev => (prev === 'light' ? 'dark' : 'light'))
    }

    return (
        <div className='flex items-center'>
            <button onClick={handleTheme}>
                {
                    themes === 'light' ? <LuSunMoon size={20} /> : <MdSunny size={20} />
                }
            </button>
        </div>
    );
};

export default Theme;