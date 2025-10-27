import React from 'react'



export default function Contacts() {
  return (
    <div>
      <div className="contact-page">
        {/* Top Banner */}
        <div className="discount-banner text-center py-2 bg-dark text-light">
          Get 15% off on your first order
        </div>

        {/* Contact Us Section */}
        <div className="container text-center contact-content ">
          <h1 className="fw-bold display-5">Contact Us</h1>
          <p className="lead">
            Have a question about your order, sizing, shipping, or just want to say hello?
            Our team at Velora is always happy to hear from you.
          </p>
        </div>
      </div>

      {/* // contacts part 2  */}
      <div className="contact-section py-5">
        <div className="container">
          <div className="row justify-content-center">
            {/* Left Contact Form */}
            <div className="col-lg-5 contact-card me-lg-4 mb-4 mb-lg-0">
              <h5 className="fw-bold mb-4">Send Us Message</h5>
              <form>
                <div className="mb-3">
                  <input type="text" className="form-control" placeholder="Name *" />
                </div>
                <div className="mb-3">
                  <input type="email" className="form-control" placeholder="Email *" />
                </div>
                <div className="mb-3">
                  <textarea className="form-control" rows="4" placeholder="Comment *"></textarea>
                </div>
                <div className="form-check mb-3">
                  <input className="form-check-input" type="checkbox" id="saveInfo" />
                  <label className="form-check-label" htmlFor="saveInfo">
                    Save my name, email and website in this browser
                  </label>
                </div>
                <button type="submit" className="btn btn-danger px-4">SEND</button>
              </form>
            </div>

            {/* Right Info Card */}
            <div className="col-lg-5 contact-card">
              <div className="mb-4 d-flex align-items-start">
                <div className="icon-box me-3">
                  <i className="fas fa-envelope text-danger fs-5"></i>
                </div>
                <div>
                  <h6 className="fw-bold mb-1">Email</h6>
                  <p className="mb-0">contact@info.com</p>
                </div>
              </div>

              <div className="mb-4 d-flex align-items-start">
                <div className="icon-box me-3">
                  <i className="fas fa-phone-alt text-danger fs-5"></i>
                </div>
                <div>
                  <h6 className="fw-bold mb-1">Phone</h6>
                  <p className="mb-0">929-242-6868</p>
                </div>
              </div>

              <div className="mb-4 d-flex align-items-start">
                <div className="icon-box me-3">
                  <i className="fas fa-map-marker-alt text-danger fs-5"></i>
                </div>
                <div>
                  <h6 className="fw-bold mb-1">Address</h6>
                  <p className="mb-0">123 Fifth Avenue, New York, NY 10160</p>
                </div>
              </div>

              <div className="d-flex align-items-start">
                <div className="icon-box me-3">
                  <i className="fas fa-heart text-danger fs-5"></i>
                </div>
                <div>
                  <h6 className="fw-bold mb-2">Follow Us</h6>
                  <div className="d-flex gap-3 fs-5">
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-linkedin-in"></i>
                    <i className="fab fa-twitter"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* part 3 */}

      <div className="py-5 support-section">
        <div className="container">
          <h2 className="text-center fw-bold mb-2">Explore Our Support Topics</h2>
          <p className="text-center text-muted mb-5">
            From returns and shipping to sizing and payments, we’ve got answers to all your most common questions.
          </p>

          <div className="row g-4">
            {/* Card 1 */}
            <div className="col-md-6 col-lg-4">
              <div className="support-card">
                <h6 className="fw-bold mb-3">Returns & Exchanges</h6>
                <p><a href="#">Returns & Exchanges</a></p>
                <p><a href="#">How to Start a Return</a></p>
                <p><a href="#">Check Return Status</a></p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-6 col-lg-4">
              <div className="support-card">
                <h6 className="fw-bold mb-3">Ordering & Payment</h6>
                <p><a href="#">Modify or Cancel an Order</a></p>
                <p><a href="#">Pre-order Items</a></p>
                <p><a href="#">Payment Methods</a></p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-md-6 col-lg-4">
              <div className="support-card">
                <h6 className="fw-bold mb-3">Shipping & Delivery</h6>
                <p><a href="#">Shipping Options & Costs</a></p>
                <p><a href="#">Estimated Delivery Times</a></p>
                <p><a href="#">Track Your Order</a></p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="col-md-6 col-lg-4">
              <div className="support-card">
                <h6 className="fw-bold mb-3">Product Information</h6>
                <p><a href="#">Materials & Fabrics</a></p>
                <p><a href="#">Care Instructions</a></p>
                <p><a href="#">Availability & Restocks</a></p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="col-md-6 col-lg-4">
              <div className="support-card">
                <h6 className="fw-bold mb-3">Account & Privacy</h6>
                <p><a href="#">Create or Manage Your Account</a></p>
                <p><a href="#">Password Reset Help</a></p>
                <p><a href="#">Privacy Policy</a></p>
              </div>
            </div>

            {/* Card 6 */}
            <div className="col-md-6 col-lg-4">
              <div className="support-card">
                <h6 className="fw-bold mb-3">Sizing & Fit</h6>
                <p><a href="#">Size Guide</a></p>
                <p><a href="#">Fit Tips & Recommendations</a></p>
                <p><a href="#">Product Measurements</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* part4 */}





    </div>


  )
}
