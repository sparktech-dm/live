import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { scroller, animateScroll as scroll } from 'react-scroll';
import Logo from '/spark_tech_logo.webp';

const Navbar = () => {
  const [active, setActive] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setMenuOpen(false);
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
      handleScroll();
      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      if (path.startsWith('/projects')) setActive('projects');
      else if (path.startsWith('/services')) setActive('services');
      else if (path.startsWith('/blogs')) setActive('blogs');
      else if (path.startsWith('/about')) setActive('about');
    }
  }, [location.pathname]);

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
    { name: 'Home', type: 'route', path: '/' },
    { name: 'services', type: 'route', path: '/services' },
    { name: 'about', type: 'route', path: '/about' },
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
    if (item.type === 'route') navigate(item.path);
    else if (item.type === 'scroll') handleScroll(item.id);
    else if (item.type === 'scrolltop') handleScrollTop();
  };

  return (
    <div className='w-full fixed top-0 z-50 font-[Inter] backdrop-blur-md bg-[#7A85C1]/20 shadow-md'>
      {/* 🔹 Desktop Navbar */}
      <div className="hidden md:flex w-full h-[100px] items-center justify-between px-10 lg:px-20 xl:px-40 2xl:px-60">
        
        {/* Logo - Enlarged */}
        <div onClick={() => handleItemClick(menuItems[0])} className="cursor-pointer flex-shrink-0">
          <img src={menuItems[0].image} alt="Logo" className="h-[75px] w-auto object-contain" />
        </div>

        {/* Menu Items - Slightly larger text */}
        <ul className="flex gap-15 items-center flex-1 justify-center">
          {menuItems.slice(1, -1).map((item) => (
            <li key={item.name} onClick={() => handleItemClick(item)}>
              <RouterLink
                to={item.path}
                className={`text-white text-base font-medium transition duration-300 hover:text-[#00ffae] ${
                  active === item.name ? 'text-[#00ffae] border-b-2 border-[#00ffae] pb-1' : ''
                }`}
              >
                {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
              </RouterLink>
            </li>
          ))}
        </ul>

        {/* Glowing CTA - Bigger */}
        <div className="relative flex justify-center items-center">
          <div className="absolute w-44 h-44 rounded-full bg-gradient-to-r from-[#f0c417]/40 via-[#f0c417]/20 to-transparent 
                        blur-3xl animate-ping-slow"></div>

          <button
            onClick={() => navigate("/contact")}
            className="relative z-10 text-white text-lg font-semibold px-10 py-4 rounded-full 
                      border-2 border-[#f0c417] bg-gradient-to-r from-[#f0c417]/30 to-transparent
                      shadow-[0_0_25px_rgba(240,196,23,0.7)] 
                      transition duration-300 hover:scale-110 hover:shadow-[0_0_50px_rgba(240,196,23,1)] 
                      animate-heartbeat"
          >
            Get in touch
          </button>
        </div>
      </div>

      {/* 🔹 Mobile Navbar */}
      <div className='md:hidden flex justify-between items-center px-5 h-[90px] backdrop-blur bg-gray-600/40'>
        <RouterLink to='/' onClick={handleScrollTop}>
          <div className='w-[60px] h-[60px] cursor-pointer'>
            <img src={Logo} alt='Logo' className='w-full h-full object-contain' />
          </div>
        </RouterLink>
        <button
          className='text-white text-3xl'
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Dropdown */}
      {menuOpen && (
        <div className='md:hidden absolute top-[90px] left-0 w-full bg-black border-t border-[#444]'>
          <ul className='flex flex-col items-center gap-4 py-4'>
            {menuItems.map((item) => (
              <li key={item.name} onClick={() => handleItemClick(item)}>
                <RouterLink
                  to={item.path}
                  className={`px-5 py-3 rounded-full text-lg font-semibold transition-all duration-200 ${
                    active === item.name
                      ? 'bg-[#262424] text-[#f0c417]'
                      : 'text-white hover:bg-[#4f4e4e]'
                  }`}
                >
                  {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                </RouterLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
