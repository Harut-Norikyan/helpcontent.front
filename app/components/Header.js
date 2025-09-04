"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function Header() {
  const pathname = usePathname();


  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  useEffect(() => {
    scrollTop();
  }, [pathname])

  return (
    <header className="header_section">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg custom_nav-container pt-3">
          <Link className="navbar-brand" href="/">
            {/* <Image src={logo} alt="logo" width={100} height={50} /> */}

            <div className="heading_container">
              <h2>
                <span>Help</span>
                Content
              </h2>
            </div>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="d-flex ml-auto flex-column flex-lg-row align-items-center">
              <ul className="navbar-nav">
                <li className={`nav-item ${pathname === "/" ? "active" : ""}`}>
                  <Link className="nav-link" href="/">Home</Link>
                </li>
                <li className={`nav-item ${pathname === "/about" ? "active" : ""}`}>
                  <Link className="nav-link" href="/about">About</Link>
                </li>
                <li className={`nav-item ${pathname === "/service" ? "active" : ""}`}>
                  <Link className="nav-link" href="/service">Services</Link>
                </li>
                <li className={`nav-item ${pathname === "/portfolio" ? "active" : ""}`}>
                  <Link className="nav-link" href="/portfolio">Portfolio</Link>
                </li>
                <li className={`nav-item ${pathname === "/contact" ? "active" : ""}`}>
                  <Link className="nav-link" href="/contact">Contact Us</Link>
                </li>
              </ul>

              <form className="form-inline my-2 my-lg-0 ml-0 ml-lg-4 mb-3 mb-lg-0">
                <button className="btn my-2 my-sm-0 nav_search-btn" type="submit"></button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
