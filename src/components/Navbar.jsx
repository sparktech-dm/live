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

  // Set active section based on scroll or pathname
  useEffect(() => {
    const path = location.pathname;

    if (path === '/') {
      const handleScroll = () => {
        const sections = ['home','services', 'contact',];
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
      handleScroll();

      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      if (path === '/about') setActive('about');
      else if (path.startsWith('/projects')) setActive('projects');
      else if (path.startsWith('/blogs')) setActive('blogs');
      else if (path.startsWith('/services')) setActive('services');
    }
  }, [location.pathname]);

  // Handle delayed scroll after redirect from other pages
  useEffect(() => {
    if (location.pathname === '/' && location.state?.scrollTo) {
      scroller.scrollTo(location.state.scrollTo, {
        duration: 800,
        smooth: 'easeInOutQuart',
      });
      navigate(location.pathname, { replace: true, state: {} });
    }

    if (location.pathname === '/' && location.state?.scrollToTop) {
      scroll.scrollToTop({ duration: 800, smooth: 'easeInOutQuart' });
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location, navigate]);

  const baseMenuItems = [
    { name: 'logo', type: 'scrolltop', image: Logo },
    { name: 'services', type: 'route', path: '/services' },
    { name: 'projects', type: 'route', path: '/projects' },
    { name: 'about', type: 'route', path: '/about' },
    { name: 'blogs', type: 'route', path: '/blogs' },
  ];

  const menuItems = [...baseMenuItems, { name: 'contact', type: 'scroll', id: 'contact' }];

  const handleScroll = (id) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: id } });
    } else {
      scroller.scrollTo(id, {
        duration: 800,
        smooth: 'easeInOutQuart',
      });
    }
  };

  const handleScrollTop = () => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollToTop: true } });
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
      {/* Desktop Capsule Navbar */}
<div className="hidden md:flex justify-center">
  <div className="h-[80px] w-[100%] max-w-[1700px] mx-auto px-6 flex items-center justify-between backdrop-blur-md bg-[#7A85C1]/20 shadow-md">

    {/* Left: Logo */}
    <div onClick={() => handleItemClick(menuItems[0])} className="cursor-pointer ml-60">
      <img
        src={menuItems[0].image}
        alt="Logo"
        className="h-[60px] w-auto object-contain"
      />
    </div>

    {/* Center: Links */}
    <ul className="flex gap-10 items-center">
      {menuItems.slice(1, -1).map((item) => (
        <li key={item.name} onClick={() => handleItemClick(item)}>
          {item.type === 'route' ? (
            <RouterLink
              to={item.path}
              className={`text-white text-sm font-medium transition duration-200 hover:text-[#00ffae] ${
                active === item.name ? 'text-[#00ffae]' : ''
              }`}
            >
              {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
            </RouterLink>
          ) : (
            <span
              className={`text-white text-xl md:font-medium transition duration-200 hover:text-[#00ffae] ${
                active === item.name ? 'text-[#00ffae]' : ''
              }`}
            >
              {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
            </span>
          )}
        </li>
      ))}
    </ul>

    {/* Right: CTA Button */}
    <button
      onClick={() => navigate("/contact")}
      className="text-white text-sm font-semibold px-6 py-2 rounded-full border border-green-400 hover:bg-green-400/10 transition duration-200 mr-50">
      Get in touch
    </button>
  </div>
</div>

      {/* Mobile Navbar Header */}
      <div className='md:hidden flex justify-between items-center px-5 h-full backdrop-blur bg-gray-600/40'>
        <RouterLink to='/' onClick={handleScrollTop}>
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
                        ? 'bg-[#262424] text-[#f0c417]'
                        : 'text-white hover:bg-[#4f4e4e]'
                    }`}
                  >
                    {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                  </RouterLink>
                ) : item.type === 'scrolltop' && item.image ? (
                  <div className='w-[40px] h-[40px] cursor-pointer'>
                    <img
                      src={item.image}
                      alt='Logo'
                      className='w-full h-full object-contain'
                    />
                  </div>
                ) : (
                  <span
                    className={`px-4 py-2 rounded-full text-base font-semibold transition-all duration-200 ${
                      active === item.name
                        ? 'bg-[#262424] text-[#f0c417]'
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
