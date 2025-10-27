import React from 'react'

export default function Footer() {
  return (
    <>
      <div className="footer-section text-white pt-5 pb-3">
        <div className="container">
          <div className="row gy-4">

            {/* Brand Column */}
            <div className="col-md-3">
              <div className="mb-2 d-flex align-items-center gap-2">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGvQHbmrL1LUyjF08sKQ5JKeX3EaUtdy7_1g&s" alt="Logo" width="30" />
                <h5 className="m-0 fw-bold">VELORA</h5>
              </div>
              <p>Classic looks for Men, Women & Kids.</p>
              <div className="d-flex gap-3 mt-3">
                <i className="bi bi-instagram fs-5"></i>
                <i className="bi bi-facebook fs-5"></i>
                <i className="bi bi-linkedin fs-5"></i>
                <i className="bi bi-twitter-x fs-5"></i>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-md-2">
              <h6 className="fw-bold mb-3">Quick Links</h6>
              <ul className="list-unstyled">
                <li><a href="#" className="footer-link text-danger">Home</a></li>
                <li><a href="#" className="footer-link">Shop</a></li>
                <li><a href="#" className="footer-link">About</a></li>
                <li><a href="#" className="footer-link ">Contact</a></li>
              </ul>
            </div>

            {/* Shop */}
            <div className="col-md-2">
              <h6 className="fw-bold mb-3">Shop</h6>
              <ul className="list-unstyled">
                <li><a href="#" className="footer-link">Mens Wear</a></li>
                <li><a href="#" className="footer-link">Womens Wear</a></li>
                <li><a href="#" className="footer-link">Kids Wear</a></li>
                <li><a href="#" className="footer-link">Accessories</a></li>
              </ul>
            </div>

            {/* Help */}
            <div className="col-md-2">
              <h6 className="fw-bold mb-3">Help</h6>
              <ul className="list-unstyled">
                <li><a href="#" className="footer-link">FAQ’s</a></li>
                <li><a href="#" className="footer-link">Return Policy</a></li>
                <li><a href="#" className="footer-link">Order Status</a></li>
                <li><a href="#" className="footer-link">Shipping & Delivery</a></li>
              </ul>
            </div>

            {/* My Profile */}
            <div className="col-md-3">
              <h6 className="fw-bold mb-3">My Profile</h6>
              <ul className="list-unstyled">
                <li><a href="#" className="footer-link">My Account</a></li>
                <li><a href="#" className="footer-link">Track Order</a></li>
                <li><a href="#" className="footer-link">My Cart</a></li>
                <li><a href="#" className="footer-link">Order History</a></li>
              </ul>
            </div>
          </div>

          <hr className="mt-5 mb-3 border-light" />

          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
            <p className="mb-0">&copy; 2025 Clothing Store All rights reserved</p>
            <div className="d-flex gap-2 mt-3 mt-md-0">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQntZEg1Wu9nzK4RtZAgnUMSu5WUSo4RP1ykA&s" alt="paypal" height="30" />
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3F98L74qln9EYu3sJQKZCK0maYNvlR9p0zw&s" alt="visa" height="30" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="mastercard" height="30" />
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsMQfyuiUrLNvEAzv3ULjTJRrB3SOQiRKC0g&s" alt="discover" height="30" />
              <img src="https://www.logo.wine/a/logo/American_Express/American_Express-Logo.wine.svg" alt="amex" height="30" />
            </div>
          </div>
        </div>
      </div>


    </>
  )
}
