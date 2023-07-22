import { useEffect, useState } from 'react';
import { HiMenuAlt1 } from 'react-icons/hi';
import { BiSun, BiMoon } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const [theme, setTheme] = useState(() => {
    // pirority localstorage -> system

    if (localStorage.getItem('theme')) {
      return localStorage.getItem('theme');
    }

    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      return 'night';
    }

    return 'light';
  });

  function toggleDrawer() {
    setIsDrawerOpen(!isDrawerOpen);
  }

  function toggleTheme() {
    setTheme((prevTheme) => {
      return prevTheme === 'light' ? 'night' : 'light';
    })
  }

  useEffect(() => {
    document.querySelector('html').setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className='drawer mb-8'>
      {/* drawer toggle */}
      <input
        id='my-drawer-3'
        type='checkbox'
        className='drawer-toggle'
        checked={isDrawerOpen}
        onChange={toggleDrawer}
      />

      {/* navbar */}
      <div className='drawer-content navbar justify-between px-4 md:px-6 bg-base-200'>
        <Link to='/' className='text-3xl'>
          Movies
        </Link>

        <ul className='menu menu-horizontal hidden md:flex'>
          <li>
            <Link to='/' className='text-xl'>
              Watch List
            </Link>
          </li>

          <li>
            <Link to='/watched' className='text-xl'>
              Watched
            </Link>
          </li>
          <li>
            <Link to='/add' className='text-xl'>
              Add
            </Link>
          </li>
        </ul>

        <div>
          {/* swap */}
          <label
            className='swap swap-rotate btn btn-ghost btn-circle'
            onClick={toggleTheme}
          >
            <input
              type='checkbox'
              checked={theme === 'night'}
              onChange={toggleTheme}
            />
            <BiMoon className='swap-on' size={24} />
            <BiSun className='swap-off' size={24} />
          </label>
          {/* burger menu */}
          <div className='md:hidden'>
            <label htmlFor='my-drawer-3' className='btn btn-circle btn-ghost'>
              <HiMenuAlt1 size={24} />
            </label>
          </div>
        </div>
      </div>

      <div className='drawer-side md:hidden'>
        <label htmlFor='my-drawer-3' className='drawer-overlay'></label>
        <ul className='menu p-4 w-[60%] max-w-[20rem] h-full bg-base-200'>
          {/* Sidebar content here */}

          <li>
            <Link onClick={toggleDrawer} to='/' className='text-xl'>
              Watch List
            </Link>
          </li>
          <li>
            <Link onClick={toggleDrawer} to='/watched' className='text-xl'>
              Watched
            </Link>
          </li>
          <li>
            <Link onClick={toggleDrawer} to='/add' className='text-xl'>
              Add
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
