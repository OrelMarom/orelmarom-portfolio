function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4">
      <div
        className="font-bold text-xl"
        style={{ fontFamily: '"Rye", Helvetica, sans-serif', fontSize: '48px', fontWeight: 100, letterSpacing: '-9px' }}
      >
        OM
      </div>
      <nav className="space-x-4">
        <a href="#work" className="nav-link">Work</a>
        <a href="#about" className="nav-link">About</a>
        <a href="#contact" className="nav-link">Contact</a>
      </nav>
    </header>
  )
}

export default Header