import React, { useState } from 'react';
import Link from './Link';
import { Menu, X } from 'lucide-react';

const navigationData = [
    {
      id: 1,
      name: "Home",
      path: "/home"
    },
    {
      id: 2,
      name: "About",
      path: "/about"
    },
    {
      id: 3,
      name: "Services",
      path: "/services"
    },
    {
      id: 4,
      name: "Blog",
      path: "/blog"
    },
    {
      id: 5,
      name: "Contact",
      path: "/contact"
    }
  ];
  

const Navbar = () => {
    const [open,setOpen]=useState(false);
    const links =navigationData.map(route=><Link
        key={route.id} route={route}></Link>);
    return (
        <nav className='flex justify-between mt-4 mx-10'>
<span className='flex' onClick={()=>setOpen(!open)}>
    {open ?
    <X className='md:hidden'/>
    :<Menu className='md:hidden'/>}

<ul className={`md:hidden 
absolute duration-1000
${open?'top-8 ':'-top-40'}
   bg-amber-200`}>
    {links}
</ul>
<h3 className='ml-4'>My Navbar</h3>
</span>
<ul className="md:flex hidden">
{
links
}
</ul>


         {/* <ul className='flex'>
            <li className='mr-10'><a href="/">Home</a></li>
            <li className='mr-10'><a href="/about">About</a></li>
            <li className='mr-10'><a href="/blog">Blog</a></li>
         </ul> */}

         {/* <ul className='flex'>
            {
                navigationData.map(route=><li className='mr-10'>
                    <a href={route.path}>{route.name}</a></li>)
            }
         </ul> */}
<button>Sign in</button>
        </nav>
    );
};

export default Navbar;