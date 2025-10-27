import React from 'react'

export default function About() {
  return (
    <>
      <div className="about-hero-section position-relative">
        <div className="bg-dark text-white text-center py-2 fw-bold">
          Get 15% off on your first order
        </div>
        {/* Overlay */}
        <div className="overlay"></div>

        {/* Content */}
        <div className="container h-100 d-flex flex-column justify-content-center align-items-center text-white text-center">
          <h1 className="fw-bold display-4">Style That Moves With You</h1>
          <p className="fs-5 mt-2">
            Born from a passion for timeless design and everyday comfort
          </p>
        </div>

        {/* 
      cards section */}



      </div>

      <div className="py-5 bg-white">
        <div className="container text-center">

          {/* Heading */}
          <h2 className="fw-bold mb-2">What Makes Velora Stand Out</h2>
          <p className="text-muted mb-5">
            Style, Comfort & More – Here’s Why You’ll Love Us
          </p>

          {/* Feature Cards */}
          <div className="row g-4">
            {/* Card 1 */}
            <div className="col-md-3">
              <div className="feature-card">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/892/892458.png"
                  alt="Premium Quality"
                  style={{ width: '48px', marginBottom: '12px' }}
                />
                <h6 className="fw-bold">Premium Quality</h6>
                <p className="text-muted small">
                  Crafted with care using soft, durable fabrics designed to last and feel amazing.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-3">
              <div className="feature-card">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/2965/2965567.png"
                  alt="Timeless Style"
                  style={{ width: '48px', marginBottom: '12px' }}
                />
                <h6 className="fw-bold">Timeless Style</h6>
                <p className="text-muted small">
                  Clean silhouettes and versatile pieces you can wear season after season.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-md-3">
              <div className="feature-card">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/2231/2231395.png"
                  alt="In-House Design"
                  style={{ width: '48px', marginBottom: '12px' }}
                />
                <h6 className="fw-bold">In-House Design</h6>
                <p className="text-muted small">
                  Every detail is imagined by our in-house design team to bring you standout staples.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="col-md-3">
              <div className="feature-card">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/1098/1098970.png"
                  alt="For Every Body"
                  style={{ width: '48px', marginBottom: '12px' }}
                />
                <h6 className="fw-bold">For Every Body</h6>
                <p className="text-muted small">
                  Inclusive fits and sizes designed to flatter all shapes, ages, and styles.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* part 3 */}

      <div className="about-section py-5 bg-light-pink">
        <div className="container position-relative">
          <div className="row align-items-center">
            {/* Image Left Side */}
            <div className="col-lg-6">
              <img
                src="https://images.unsplash.com/photo-1520694478166-daaaaec95b69?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aHVtYW58ZW58MHx8MHx8fDA%3D" // Replace with actual image path
                alt="Group of people"
                className="img-fluid rounded-3 shadow-sm"
              />
            </div>

            {/* Text Card Right Side */}
            <div className="col-lg-6">
              <div className="bg-white p-4 rounded-4 shadow-sm about-card-content mt-4 mt-lg-0">
                <div className="text-center">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3585/3585049.png"
                    alt="Tape Icon"
                    className="about-icon mb-3"
                  />
                  <h3 className="fw-bold mb-3">More Than Just Clothing</h3>
                  <p className="text-muted mb-3">
                    At Velora, we believe fashion should feel as good as it looks. Born from a passion for timeless design and everyday comfort, our mission is simple: to create versatile, high-quality clothing that empowers confidence — for everyone, every day.
                  </p>
                  <p className="text-muted mb-0">
                    Whether you're dressing up for a moment or down for the everyday, our collections are made to move with you, evolve with your lifestyle, and elevate your wardrobe — effortlessly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* part4 */}


      <div className="purpose-section py-5">
        <div className="container text-center">
          {/* Section Title */}
          <h2 className="fw-bold mb-3">Our Purpose, Your Style</h2>
          <p className="text-muted mb-5">
            At Velora, everything we create starts with you — your lifestyle, your confidence, <br />
            and your need for fashion that truly fits.
          </p>

          {/* Cards Row */}
          <div className="row justify-content-center">
            {/* Mission Card */}
            <div className="col-md-6 col-lg-5 mb-4">
              <div className="p-4 h-100 rounded-4 border card-box">
                <div className="text-center mb-3">
                  <div className="icon-circle bg-danger text-white mb-3 mx-auto">
                    <i className="bi bi-eye-fill fs-4"></i>
                  </div>
                  <h5 className="fw-bold mb-3">Our Mission</h5>
                  <p className="text-muted mb-0">
                    To create timeless, high-quality fashion that blends comfort with confidence.
                    We’re here to empower individuals of all ages and body types with clothing that fits
                    seamlessly into real life — versatile, inclusive, and made to be lived in.
                    We design with purpose, craft with care, and always put people first.
                  </p>
                </div>
              </div>
            </div>

            {/* Vision Card */}
            <div className="col-md-6 col-lg-5 mb-4">
              <div className="p-4 h-100 rounded-4 border card-box">
                <div className="text-center mb-3">
                  <div className="icon-circle bg-danger text-white mb-3 mx-auto">
                    <i className="bi bi-bullseye fs-4"></i>
                  </div>
                  <h5 className="fw-bold mb-3">Our Vision</h5>
                  <p className="text-muted mb-0">
                    To become a trusted, global fashion destination that redefines modern essentials.
                    We envision a world where style is accessible, self-expression is celebrated,
                    and fashion feels effortless for everyone — from city streets to family weekends.
                    At Velora, we aim to lead with creativity, integrity, and a deep understanding.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>









    </>


  )
}
