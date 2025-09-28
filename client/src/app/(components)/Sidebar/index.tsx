'use client'
import React ,{useState} from 'react'
import Image from 'next/image';
import { Link, LockIcon, LucideIcon} from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/app/redux';
const Sidebar = () => {
    const [showProjects, setShowProjects] = React.useState(true);
    const [showPriority, setShowPriority] = React.useState(true);

    const sidebarClassNames = `fixed flex flex-col h-[100%] justify-beetween shadow-xl transition-all duration-300 h-full z-40 overflow-y-auto bg-white w-64 `
  return (
    <div className={sidebarClassNames}>
     <div className="flex h-[100%] w-full flex-col justify-start">
        <div className="z-50 flex min-h-[56px] w-64 items-center justify-between bg-white px-6 pt-3 ">
            <div className='text-xl font-bold text-gray-800'>Nova</div>
        </div>
     <div className='flex item-center gap-5 border-y-[1.5px] border-gray-200 px-8 py-3'>
        <Image src="/logo.png" alt="logo" width={40} height={40} className='rounded-full'/>
        <div>
            <h3 className='text-md font-bold tracking-wide'>User Name</h3>
        <div className='mt-1 flex items-start gap-2 '>
            <LockIcon className='h-3 w-3 text-gray-500 mt-[0.1rem]'/>
            <p className='text-xs text-gray-500'>Private</p>
        </div>
        </div>
     </div>
     </div>
    </div>
  )
}

interface SidebarLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
  isCollapsed: boolean;
}
const SidebarLink = ({
  href,
  icon : Icon,
  label,
  isCollapsed
}:SidebarLinkProps) =>{
  const pathname = usePathname();
  const isActive = pathname === href || (pathname === "/" && href === "/dashboard");
  const screenWidth = window.innerWidth;

  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector((state) => state.global.isSidebarCollapsed);

  return (
    <Link href={href} className='w-full'>
      <div className={`relative flex cursor-pointer items-center gap-3 transition-colors hover:bg-gray-100 ${isActive ? "bg-gray-100 text-white": ""}`}>

        </div>
    </Link>
  )

}

export default Sidebar

