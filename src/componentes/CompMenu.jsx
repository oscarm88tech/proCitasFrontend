import React from 'react'

const CompMenu = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a
      className="navbar-brand"
      href="#"
    >
      Inicio
    </a>
    <button
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
      className="navbar-toggler"
      data-bs-target="#navbarSupportedContent"
      data-bs-toggle="collapse"
      type="button"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div
      className="collapse navbar-collapse"
      id="navbarSupportedContent"
    >
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a
            aria-current="page"
            className="nav-link active"
            href="/citas"
          >
            Citas
          </a>
          
        </li>
        <li className="nav-item">
          
          <a
            aria-current="page"
            className="nav-link active"
            href="/medico"
          >
            Medico
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            href="#"
          >
            Link
          </a>
        </li>
        <li className="nav-item dropdown">
          <a
            aria-expanded="false"
            className="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
            href="#"
            id="navbarDropdown"
            role="button"
          >
            Dropdown
          </a>
          <ul
            aria-labelledby="navbarDropdown"
            className="dropdown-menu"
          >
            <li>
              <a
                className="dropdown-item"
                href="#"
              >
                Action
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="#"
              >
                Another action
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a
                className="dropdown-item"
                href="#"
              >
                Something else here
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">
            Disabled
          </a>
        </li>
      </ul>
      <form className="d-flex">
        <input
          aria-label="Search"
          className="form-control me-2"
          placeholder="Search"
          type="search"
        />
        <button
          className="btn btn-outline-success"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default CompMenu
