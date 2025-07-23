import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { scroller, animateScroll as scroll } from 'react-scroll';
import Logo from '../assets/Logo.png';

export const Navbar = () => {
  const [active, setActive] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setMenuOpen(false); // Close mobile menu on route change
  }, [location.pathname]);

  useEffect(() => {
    const path = location.pathname;

    if (path === '/') {
      const handleScroll = () => {
        const sections = ['home', 'services', 'contact'];
        const scrollPosition = window.scrollY + 100;

        for (let i = sections.length - 1; i >= 0; i--) {
          const element = document.getElementById(sections[i]);
          if (element && scrollPosition >= element.offsetTop) {
            setActive(sections[i]);
            break;
          }
        }
      };

      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Set initial

      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      if (path === '/about') setActive('about');
      else if (path.startsWith('/projects')) setActive('projects');
      else if (path.startsWith('/blogs')) setActive('blogs');
    }
  }, [location.pathname]);

  const baseMenuItems = [
    { name: 'home', type: 'scrolltop' },
    { name: 'services', type: 'scroll', id: 'services' },
    { name: 'projects', type: 'route', path: '/projects' },
    { name: 'about', type: 'route', path: '/about' },
    { name: 'blogs', type: 'route', path: '/blogs' },
  ];

  const menuItems = [...baseMenuItems, { name: 'contact', type: 'scroll', id: 'contact' }];

  const handleScroll = (id) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        scroller.scrollTo(id, {
          duration: 800,
          delay: 100,
          smooth: 'easeInOutQuart',
        });
      }, 200);
    } else {
      scroller.scrollTo(id, {
        duration: 800,
        smooth: 'easeInOutQuart',
      });
    }
  };

  const handleScrollTop = () => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        scroll.scrollToTop({ duration: 800, smooth: 'easeInOutQuart' });
      }, 200);
    } else {
      scroll.scrollToTop({ duration: 800, smooth: 'easeInOutQuart' });
    }
  };

  const handleItemClick = (item) => {
    setActive(item.name);

    if (item.type === 'route') {
      navigate(item.path);
    } else if (item.type === 'scroll') {
      handleScroll(item.id);
    } else if (item.type === 'scrolltop') {
      handleScrollTop();
    }
  };

  return (
    <div className='w-full h-[50px] fixed top-0 z-50 font-[Inter]'>
      {/* Desktop Capsule Navbar */}
      <div className='hidden md:flex justify-center'>
        <div className='h-[60px] w-[650px] border border-[#c8c8c8] rounded-4xl flex items-center mt-5 backdrop-blur bg-gray-500/50'>
          <ul className='flex justify-evenly items-center w-full'>
            {menuItems.map((item) => (
              <li key={item.name} onClick={() => handleItemClick(item)}>
                {item.type === 'route' ? (
                  <RouterLink
                    to={item.path}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                      active === item.name
                        ? 'bg-white/10 text-[#BE6A26]'
                        : 'text-white hover:text-[13px] hover:bg-[#4f4e4e]'
                    }`}
                  >
                    {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                  </RouterLink>
                ) : (
                  <span
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                      active === item.name
                        ? 'bg-[#262424] text-[#BE6A26]'
                        : 'text-white hover:text-[13px] hover:bg-[#4f4e4e]'
                    }`}
                  >
                    {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Navbar Header */}
      <div className='md:hidden flex justify-between items-center px-5 h-full backdrop-blur bg-gray-600/40'>
        <RouterLink to='/'>
          <div className='w-[50px] h-[50px] cursor-pointer'>
            <img src={Logo} alt='Logo' className='w-full h-full object-contain' />
          </div>
        </RouterLink>
        <button
          className='text-white text-2xl'
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className='md:hidden absolute top-[80px] left-0 w-full bg-black border-t border-[#444]'>
          <ul className='flex flex-col items-center gap-4 py-4'>
            {menuItems.map((item) => (
              <li key={item.name} onClick={() => handleItemClick(item)}>
                {item.type === 'route' ? (
                  <RouterLink
                    to={item.path}
                    className={`px-4 py-2 rounded-full text-base font-semibold transition-all duration-200 ${
                      active === item.name
                        ? 'bg-[#262424] text-[#BE6A26]'
                        : 'text-white hover:bg-[#4f4e4e]'
                    }`}
                  >
                    {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                  </RouterLink>
                ) : (
                  <span
                    className={`px-4 py-2 rounded-full text-base font-semibold transition-all duration-200 ${
                      active === item.name
                        ? 'bg-[#262424] text-[#BE6A26]'
                        : 'text-white hover:bg-[#4f4e4e]'
                    }`}
                  >
                    {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
