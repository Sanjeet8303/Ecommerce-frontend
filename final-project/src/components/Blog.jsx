import React from 'react'

export default function Blog() {
  return (
    <div>
      <div className="blog-wrapper">

        {/* Top Bar */}
        <div className="bg-dark text-white text-center py-2 fw-bold">
          Get 15% off on your first order
        </div>

        {/* Hero Section */}
        <div className="position-relative text-center text-md-start hero-section">
          <img
            src="https://images.unsplash.com/photo-1501127122-f385ca6ddd9d?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Fashion Models"
            className="img-fluid w-100 hero-image"
          />

          {/* Text Overlay */}
          <div className="position-absolute top-50 start-50 translate-middle text-overlay">
            <h1 className="fw-bold display-4">Style, Tips & More</h1>
            <p className="fs-5">
              Welcome to The Velora Edit, your go-to destination for all things fashion.
            </p>
          </div>


        </div>
      </div>



      <div className="blog-wrapper">

        {/* Hero Section (already implemented above) */}
        {/* ... */}

        {/* Blog Cards Section */}
        <div className="container py-5">
          <div className="row g-4">
            {/* Card 1 */}
            <div className="col-md-4">
              <div className="card shadow-sm h-100 border-0 rounded-4">
                <img
                  src="https://images.unsplash.com/photo-1597737175203-3b86b744081a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHN0eWxlJTIwYWNjZXNvcmVpc3xlbnwwfHwwfHx8MA%3D%3D"
                  className="card-img-top rounded-top-4"
                  alt="Accessories"
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold">Top 5 Accessories That Elevate Any Look</h5>
                  <p className="text-muted mb-2">May 15, 2025 | 2 minutes of reading</p>
                  <p className="card-text">
                    1. Statement Earrings: The Instant Game-Changer. Nothing draws attention quite like
                    a pair of bold statement earrings. Whether you prefer […]
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-4">
              <div className="card shadow-sm h-100 border-0 rounded-4">
                <img
                  src="https://images.unsplash.com/photo-1743764179699-d3038d1a93e7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmFzaGlvbiUyMG1vZGVsJTIwbWl4JTIwbWF0Y2glMjBpbiUyMGdyb3VwfGVufDB8fDB8fHww"
                  className="card-img-top rounded-top-4"
                  alt="Fewer Pieces"
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold">
                    Mix, Match, Repeat: Building Outfits with Fewer Pieces
                  </h5>
                  <p className="text-muted mb-2">May 15, 2025 | 1 minute of reading</p>
                  <p className="card-text">
                    Make the most of what you have. Creating stylish outfits doesn’t require an
                    overflowing closet — it’s all about making smart choices.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-md-4">
              <div className="card shadow-sm h-100 border-0 rounded-4">
                <img
                  src="https://plus.unsplash.com/premium_photo-1706382233381-dfd2489fbbe7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFzaGlvbiUyMG1vZGVsJTIwa2lkc3xlbnwwfHwwfHx8MA%3D%3D"
                  className="card-img-top rounded-top-4"
                  alt="Velora Kids"
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold">
                    Velora Kids: Fashion Meets Functionality
                  </h5>
                  <p className="text-muted mb-2">May 15, 2025 | 1 minute of reading</p>
                  <p className="card-text">
                    Designed for play, styled for life. At Velora Kids, we believe children's clothing
                    should never make you choose between looking good and comfort.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* row 2 */}

      <div className="blog-wrapper">




        {/* Blog Cards Section */}
        <div className="container py-5">
          <div className="row g-4">
            {/* Card 1 */}
            <div className="col-md-4">
              <div className="card shadow-sm h-100 border-0 rounded-4">
                <img
                  src="https://media.istockphoto.com/id/2210519639/photo/couple-in-sunglasses-camping-on-rocky-field.webp?a=1&b=1&s=612x612&w=0&k=20&c=LC8HJMk8xepRuMtA9ea9_fa-K4Kstc5Dkxyg53nYXGA="
                  className="card-img-top rounded-top-4"
                  alt="Accessories"
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold">Our Favorite Summer Looks: Light, Breezy & Bold</h5>
                  <p className="text-muted mb-2">May 15, 2025 | 2 minutes of reading</p>
                  <p className="card-text">
                    Effortless Chic: The Power of Linen & Cotton When the temperature rises, comfort meets style in the form of lightweight
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-4">
              <div className="card shadow-sm h-100 border-0 rounded-4">
                <img
                  src="https://images.unsplash.com/photo-1697020004517-327105923c7d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZhc2hpb24lMjBtb2RlbCUyMGphY2tldCUyMHN0eWxpbmd8ZW58MHx8MHx8fDA%3D"
                  className="card-img-top rounded-top-4"
                  alt="Fewer Pieces"
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold">
                    How to Style One Jacket Three Ways
                  </h5>
                  <p className="text-muted mb-2">May 15, 2025 | 1 minute of reading</p>
                  <p className="card-text">
                    Look 1: Casual Day Out Whether you’re grabbing a coffee or heading to a weekend market, your go-to jacket can
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-md-4">
              <div className="card shadow-sm h-100 border-0 rounded-4">
                <img
                  src="https://plus.unsplash.com/premium_photo-1675186049222-0b5018db6ce9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D"
                  className="card-img-top rounded-top-4"
                  alt="Velora Kids"
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold">
                    5 Must-Have Staples for a Capsule Wardrobe
                  </h5>
                  <p className="text-muted mb-2">May 15, 2025 | 1 minute of reading</p>
                  <p className="card-text">
                    1. The Classic White Shirt A crisp white shirt is a timeless essential that effortlessly transitions from professional to casual.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}









    </div>
  )
}
