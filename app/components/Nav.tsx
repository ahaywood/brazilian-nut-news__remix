const Nav = () => {
  return (
    <nav className="top-bar sticky-bar fixed left-0 right-0 top-0 z-50 flex w-full items-center justify-between bg-cinder px-6 py-3 shadow-md">
      {/* left side */}
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/latest">Latest</a>
        </li>
          <li>
            <a href="/submit">Submit a Link</a>
          </li>
      </ul>

      {/* right side */}
      <ul>
        <li>
          <a href="/signup">Sign Up</a>
        </li>
        <li>
          <a href="/login" className="button">
            Login
          </a>
        </li>
        <li>
          <button>Logout</button>
        </li>
        <li>
          <a
            href="#"
            className="button"
          >
            My Profile
          </a>
        </li>
      </ul>
    </nav>
  )
}

export { Nav }
