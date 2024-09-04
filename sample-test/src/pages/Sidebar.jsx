import React, { createContext, useContext, useState } from 'react'
import { ChevronFirst, ChevronLast } from 'lucide-react'
import { MoreVertical } from 'lucide-react'

const SidebarContext = createContext()

export const Sidebar = ({ children }) => {

    const [expanded, setExpanded] = useState(true);

    return (
        <aside className='h-screen'>
            <nav className={`h-full flex flex-col bg-white border-r shadow-sm transition-all ${expanded ? 'w-64' : 'w-20'}`}>
                <div className='p-4 pb-2 flex justify-between items-center'>
                    <img
                        src="https://img.logoipsum.com/297.svg"
                        className={`overflow-hidden transition-all ${expanded ? 'w-32' : 'w-0'}`}
                        alt="dummy logo"
                    />
                    <button
                        onClick={() => setExpanded((curr) => !curr)}
                        className={`p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 ${expanded ? '' : 'mx-auto'}`}
                    >
                        {expanded ? <ChevronFirst /> : <ChevronLast />}
                    </button>
                </div>

                <SidebarContext.Provider value={{expanded}}>
                    <ul className='flex-1 px-3'>
                        {children}
                    </ul>
                </SidebarContext.Provider>
                <div className='border-t flex p-3'>
                    <img
                        src="https://i.pravatar.cc/100?img=7"
                        alt=""
                        className='w-10 h-10 rounded border-gray-700'
                    />
                    <div className={`flex justify-between items-center 
                overflow-hidden transition-all ${expanded ? 'w-52 ml-5' : 'w-0'}`}>
                        <div className='leading-4'>
                            <h4 className='font-semibold'>John Doe</h4>
                            <span className='text-xs text-gray-400'>johndoe@mail.com</span>
                        </div>
                        <MoreVertical size={20} />
                    </div>
                </div>
            </nav>
        </aside>
    )
}

export default function SidebarItem({ icon, text, active, alert }) {

    const {expanded} = useContext(SidebarContext)

    return (
        <li
            className={`relative flex justify-center items-center py-2 px-3 my-1 font-medium rounded-lg cursor-pointer
        transition-colors
        ${active
                    ? "bg-gradient-to-tr from-blue-200 to-blue-100 text-blue-800"
                    : "hover:bg-blue-50 text-gray-600"
                }`}
        >
            {icon}
            <span className={`overflow-hidden transition-all ${expanded ? 'w-52 ml-3' : 'w-0'}`}>{text}</span>
            {alert && (
                    <div className={`absolute right-2 w-2 h-2 rounded bg-blue-400 ${expanded ? '' : 'top-2'}`} />
                )}
        </li>
    )
}
