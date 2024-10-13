import React from 'react'

export const Sidebar = ({ children }) => {
    return (
        <aside className="h-screen pt-1 w-64 bg-white">
                <ul>
                    {children}
                </ul>
        </aside>
    )
}

export const SidebarItem = ({ icon, text, active }) => {
    return (
        <li className={`
        flex items-center 
        ps-4 py-2 mb-1 mx-2
        cursor-pointer
        font-medium
        text-sm
        transition-all ease-out duration-300
        border-white
        rounded
        ${
            active
            ? "bg-orange-100 text-orange-700 font-semibold hover:bg-orange-200 active:bg-orange-300"
            : "text-gray-500 dark:text-white hover:text-gunsmoke-900 hover:bg-gray-100"
        }
        `}>
            {icon}
            <span className='ms-2'>{text}</span>
        </li>
    )
}

