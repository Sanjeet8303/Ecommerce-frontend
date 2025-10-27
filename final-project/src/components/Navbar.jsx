import React from 'react'
import { Link, useNavigate } from 'react-router-dom'



export default function Navbar() {


  return (
    <div  >
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* Left side items */}
              <li>
                <img
                  src="https://i.fbcd.co/products/resized/resized-750-500/f4d29f38210950bb706ae2cc6bb4af11b8c030f2fe4460b27715dfe12b529241.jpg"
                  alt=""
                  height={60}
                  width={150}
                />
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/shop">Shop</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blog">Blog</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/careers">Careers</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/faqs">FAQ's</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contacts">Contact</Link>
              </li>
            </ul>

            <ul className="navbar-nav ms-auto d-flex flex-row gap-4">
              {/* Right-aligned icons */}
              <li>
                <i
                  className="fa-regular fa-circle-user"
                  id="user-icon"
                  role="button"
                  data-bs-toggle="modal"
                  data-bs-target="#loginModal"
                ></i>
              </li>
              <li>
                <i className="fa-solid fa-cart-shopping" id="cart-icon"></i>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Login Modal */}
      <div
        className="modal fade"
        id="loginModal"
        tabIndex="-1"
        aria-labelledby="loginModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content p-3">
            <div className="modal-header">
              <h5 className="modal-title" id="loginModalLabel">Login</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Username or Email</label>
                  <input type="text" className="form-control" id="username" placeholder="Enter username or email" />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control" id="password" placeholder="Enter password" />
                </div>
                <button type="submit" className="btn btn-primary w-100">Login</button>
                <div className="mt-2 text-center">
                  <a href="#" className="text-decoration-none">Forgot your password?</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>


      {/* //yha tak ayega */}

    </div>
  )
}


