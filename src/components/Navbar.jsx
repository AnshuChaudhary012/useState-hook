import { useState } from 'react'
import { NavbarIcon } from './common/svgs.jsx'
function Navbar({ brandName, links }) {
  const [open, setOpen] = useState(false)
  return (
    <nav
      aria-label="Main navigation"
      className="relative flex w-full flex-wrap items-center justify-between rounded-none bg-slate-900 px-5 py-4 text-white"
    >
      <a className="text-lg font-semibold" href="#home">
        {brandName}
      </a>
      <button
        aria-controls="primary-navigation"
        aria-expanded={open}
        aria-label={open ? 'Close menu' : 'Open menu'}
        className="relative z-30 grid size-10 cursor-pointer place-items-center rounded-lg hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:hidden"
        onClick={() => setOpen((open) => !open)}
        type="button"
      >
        <NavbarIcon name={open ? 'close' : 'menu'} />
      </button>
      <ul
        className={`fixed right-0 top-0 z-20 flex h-screen w-1/2 flex-col gap-1 bg-slate-900 px-4 pt-20 shadow-xl transition-transform duration-300 ease-in-out md:static md:z-auto md:h-auto md:w-auto md:translate-x-0 md:flex-row md:items-center md:gap-5 md:bg-transparent md:p-0 md:shadow-none ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
        id="primary-navigation"
      >
        {links.map((link) => (
          <li key={link.id}>
            <a
              className="relative block rounded-md px-3 py-2 text-sm text-slate-200 after:absolute after:bottom-1 after:left-3 after:right-3 after:h-0.5 after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-200 hover:bg-slate-800 hover:text-white hover:after:scale-x-100 focus-visible:after:scale-x-100 md:px-0 md:py-1 md:hover:bg-transparent md:after:left-0 md:after:right-0"
              href={link.href}
              onClick={() => setOpen(false)} >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
