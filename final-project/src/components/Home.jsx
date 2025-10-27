import React from 'react'

export default function Home() {
  return (
    <>

      <div className='hero-section'>
        <img src="https://img.freepik.com/premium-photo/womens-fashion-bright-pastel-clothes-hanger-white-top-view_408798-1599.jpg" alt="" className='hero-image' />
        <div className='hero-text'>
          <h1>Timeless Fashion for the <br /> Modern Wardrobe</h1>
          <p>Discover timeless fashion for Men, Women, and Kids – crafted for comfort, designed for confidence.</p>
          <button className='hero-btn'>Explore The collection</button>
        </div>
      </div>
      {/* SECOND DIV */}
      <div className='d-flex align-items-center justify-content-between mx-5 my-3'>
        <div className="d-flex flex-column align-items-start">
          <h1>New Arrivals</h1>
          <p>Be the first to wear something trendy</p>
        </div>
        <div>
          <button className='btn btn-outline-dark fw-bold px-4 py-2 custom-hover-red'>SEE WHAT'S NEW</button>
        </div>
      </div>
      {/* image part three */}

      <div className="container my-5">
        <div className="d-flex flex-wrap justify-content-around gap-4">

          {/* Card 1 */}
          <div className="card shadow-lg border-0 rounded-4 p-0" style={{ width: "18rem" }}>
            <img
              src="https://plus.unsplash.com/premium_photo-1667520043080-53dcca77e2aa?w=600&auto=format&fit=crop&q=60"
              className="card-img-top rounded-top-4"
              alt="Flowline Dress"
              style={{ height: "300px", objectFit: "cover" }}
            />
            <div className="card-body text-center">
              <h5 className="card-title fw-bold">Flowline Dress</h5>
              <p className="card-text text-muted">Men</p>
              <h4 className="text-primary">$200 - $300</h4>
              <div className="d-flex justify-content-center gap-2 mt-3">
                <button className="btn btn-success px-4">M</button>
                <button className="btn btn-dark px-4">L</button>
                <button className="btn btn-light px-4 border">XL</button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card shadow-lg border-0 rounded-4 p-0" style={{ width: "18rem" }}>
            <img
              src="https://plus.unsplash.com/premium_photo-1697695568160-ab895da7610b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZhc2hpb24lMjBtb2RlbCUyMHBvbG9zJTIwbWVufGVufDB8fDB8fHww"
              className="card-img-top rounded-top-4"
              alt="Essential Polos"
              style={{ height: "300px", objectFit: "cover" }}
            />
            <div className="card-body text-center">
              <h5 className="card-title fw-bold">Essential Polos</h5>
              <p className="card-text text-muted">Women</p>
              <h4 className="text-primary">$200 - $300</h4>
              <div className="d-flex justify-content-center gap-2 mt-3">
                <button className="btn btn-success px-4">M</button>
                <button className="btn btn-dark px-4">L</button>
                <button className="btn btn-light px-4 border">XL</button>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card shadow-lg border-0 rounded-4 p-0" style={{ width: "18rem" }}>
            <img
              src="https://i.pinimg.com/736x/4c/b2/2b/4cb22bffedc447d22783bbf4ec5d66ab.jpg"
              className="card-img-top rounded-top-4"
              alt="T-shirt"
              style={{ height: "300px", objectFit: "cover" }}
            />
            <div className="card-body text-center">
              <h5 className="card-title fw-bold">T-shirt</h5>
              <p className="card-text text-muted">Boys</p>
              <h4 className="text-primary">$200 - $300</h4>
              <div className="d-flex justify-content-center gap-2 mt-3">
                <button className="btn btn-success px-4">M</button>
                <button className="btn btn-dark px-4">L</button>
                <button className="btn btn-light px-4 border">XL</button>
              </div>
            </div>
          </div>

        </div>
      </div>


      {/* SECTION 4 */}

      <div className="py-5" style={{ backgroundColor: '#fceef2' }}>
        <div className="text-center mb-5">
          <h2 className="fw-bold">Our Categories</h2>
          <p className="text-muted">
            Explore a wide range of styles, handpicked to suit every taste and need.
          </p>
        </div>

        <div className="container">
          <div className="row justify-content-center gy-5">

            {/* Mens Wear */}
            <div className="col-md-6 d-flex justify-content-center " >
              <div className="position-relative border shadow" style={{ width: '90%', borderRadius: '20px' }}>
                <img
                  src="https://static.vecteezy.com/system/resources/previews/039/190/252/non_2x/ai-generated-young-male-fashion-model-on-a-single-colored-background-photo.jpg"
                  alt="Mens Wear"
                  className="img-fluid"
                  style={{ objectFit: 'cover', borderRadius: '20px', height: '100%' }}
                />
                <div
                  className="position-absolute start-50 bg-white text-center p-3 shadow"
                  style={{
                    bottom: '-30px',
                    transform: 'translateX(-50%)',
                    width: '80%',
                    borderRadius: '20px',
                  }}
                >
                  <h5 className="fw-bold mb-1">Mens Wear</h5>
                  <a href="/mens" className="text-danger text-decoration-none fw-semibold">Shop Now</a>
                </div>
              </div>
            </div>

            {/* Womens Wear */}
            <div className="col-md-6 d-flex justify-content-center">
              <div className="position-relative border shadow" style={{ width: '90%', borderRadius: '20px' }}>
                <img
                  src="https://images.unsplash.com/photo-1619785292559-a15caa28bde6?w=600&auto=format&fit=crop&q=60"
                  alt="Womens Wear"
                  className="img-fluid"
                  style={{ objectFit: 'cover', borderRadius: '20px', height: '100%' }}
                />
                <div
                  className="position-absolute start-50 bg-white text-center p-3 shadow"
                  style={{
                    bottom: '-30px',
                    transform: 'translateX(-50%)',
                    width: '80%',
                    borderRadius: '20px',
                  }}
                >
                  <h5 className="fw-bold mb-1">Womens Wear</h5>
                  <a href="/womens" className="text-danger text-decoration-none fw-semibold">Shop Now</a>
                </div>
              </div>
            </div>

            {/* Kids Wear */}
            <div className="col-md-6 d-flex justify-content-center">
              <div className="position-relative border shadow" style={{ width: '90%', borderRadius: '20px' }}>
                <img
                  src="https://www.shutterstock.com/image-photo/fashion-concept-stylish-children-on-600nw-2453400939.jpg"
                  alt="Kids Wear"
                  className="img-fluid"
                  style={{ objectFit: 'cover', borderRadius: '20px', height: '100%', width: '100%' }}
                />
                <div
                  className="position-absolute start-50 bg-white text-center p-3 shadow"
                  style={{
                    bottom: '-30px',
                    transform: 'translateX(-50%)',
                    width: '80%',
                    borderRadius: '20px',
                  }}
                >
                  <h5 className="fw-bold mb-1">Kids Wear</h5>
                  <a href="/kids" className="text-danger text-decoration-none fw-semibold">Shop Now</a>
                </div>
              </div>
            </div>

            {/* Accessories */}
            <div className="col-md-6 d-flex justify-content-center">
              <div className="position-relative border shadow" style={{ width: '90%', borderRadius: '20px' }}>
                <img
                  src="https://img.freepik.com/free-photo/top-view-accessoires-travel-with-women-clothing-concept-white-mobilephone-watch-bag-hat-map-camera-necklace-trousers-sunglasses-white-wood-table_1921-106.jpg"
                  alt="Accessories"
                  className="img-fluid"
                  style={{ objectFit: 'cover', borderRadius: '20px', height: '100%' }}
                />
                <div
                  className="position-absolute start-50 bg-white text-center p-3 shadow"
                  style={{
                    bottom: '-30px',
                    transform: 'translateX(-50%)',
                    width: '80%',
                    borderRadius: '20px',
                  }}
                >
                  <h5 className="fw-bold mb-1">Accessories</h5>
                  <a href="/accessories" className="text-danger text-decoration-none fw-semibold">Shop Now</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* SECTION 5 */}

      <div className="center text-center py-5">
        <h1 id="h1">Best Sellers</h1>
        <p>
          From cult-favorite jackets to must-have dresses –
          <br />
          These are our customer faves.
        </p>

        <div className="container mt-5">
          <div className="row justify-content-center">
            {/* Card 1 */}
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <img
                  src="https://plus.unsplash.com/premium_photo-1667520043080-53dcca77e2aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFzaGlvbiUyMG1vZGVsfGVufDB8fDB8fHww
"
                  className="card-img-top"
                  alt="Flowline Dresses"
                />
                <div className="card-body">
                  <h5 className="card-title">Flowline Dresses</h5>
                  <p className="card-text">Women</p>
                  <p className="fw-bold">₹200.00 – ₹250.00</p>

                  <div className="mb-2">
                    <button className="btn btn-outline-secondary btn-sm me-1">M</button>
                    <button className="btn btn-outline-secondary btn-sm me-1">L</button>
                    <button className="btn btn-outline-secondary btn-sm">XL</button>
                  </div>

                  <div>
                    <span
                      className="rounded-circle d-inline-block me-2"
                      style={{
                        width: '20px',
                        height: '20px',
                        backgroundColor: '#800080',
                        border: '1px solid #ccc',
                      }}
                    ></span>
                    <span
                      className="rounded-circle d-inline-block me-2"
                      style={{
                        width: '20px',
                        height: '20px',
                        backgroundColor: '#2e8b57',
                        border: '1px solid #ccc',
                      }}
                    ></span>
                    <span
                      className="rounded-circle d-inline-block"
                      style={{
                        width: '20px',
                        height: '20px',
                        backgroundColor: '#808000',
                        border: '1px solid #ccc',
                      }}
                    ></span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="position-relative">
                  {/* <span className="badge bg-danger position-absolute top-0 start-0 m-2">
                    Sale!
                  </span> */}
                  <img
                    src="https://images.unsplash.com/photo-1613915617430-8ab0fd7c6baf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmFzaGlvbiUyMG1vZGVsfGVufDB8fDB8fHww"
                    className="card-img-top"
                    alt="Dot Skirt"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Dot Skirt</h5>
                  <p className="card-text">Women</p>
                  <p className="fw-bold">₹100.00 – ₹110.00</p>

                  <div className="mb-2">
                    <button className="btn btn-outline-secondary btn-sm me-1">M</button>
                    <button className="btn btn-outline-secondary btn-sm me-1">L</button>
                    <button className="btn btn-outline-secondary btn-sm">XL</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="position-relative">
                  {/* <span className="badge bg-danger position-absolute top-0 start-0 m-2">
                    Sale!
                  </span> */}
                  <img
                    src="https://images.unsplash.com/photo-1741605078152-bb5483549c8d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2xvdGhpbmclMjBtb2RlbCUyMGZvcm1hbCUyMHNoaXJ0cyUyMGZlbWFsZXxlbnwwfHwwfHx8MA%3D%3D"
                    className="card-img-top"
                    alt="Formal Shirt"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Formal Shirt</h5>
                  <p className="card-text">Women</p>
                  <p className="fw-bold">₹140.00</p>

                  <div className="mb-2">
                    <button className="btn btn-outline-secondary btn-sm me-1">S</button>
                    <button className="btn btn-outline-secondary btn-sm me-1">M</button>
                    <button className="btn btn-outline-secondary btn-sm">L</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* part 6 hero banner */}

      {/* Countdown Banner Section Start */}
      <div
        className="d-flex justify-content-center align-items-center text-white"
        id="countdown-banner"
        style={{
          backgroundImage: "url('https://www.shutterstock.com/image-photo/side-view-young-smiling-happy-260nw-2326622259.jpg')",
          height: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <div
          className="text-center"
          style={{
            backgroundColor: "rgba(0,0,0,0.5)",
            padding: "30px",
            borderRadius: "10px",
            height: "100%",
            width: "100%"
          }}
        >
          <h1 className="fw-bold mb-3">Hurry Up! Get Up to 50% Off</h1>
          <p className="mb-4">Step into summer with sun-ready styles at can't-miss prices.</p>

          {/* Countdown Timer */}
          <div className="d-flex justify-content-center gap-3 mb-4" id="countdown-timer">
            <div className="bg-white text-dark text-center p-3 rounded">
              <h3 id="days">00</h3>
              <small>DAY</small>
            </div>
            <div className="bg-white text-dark text-center p-3 rounded">
              <h3 id="hours">00</h3>
              <small>HOURS</small>
            </div>
            <div className="bg-white text-dark text-center p-3 rounded">
              <h3 id="minutes">00</h3>
              <small>MINS</small>
            </div>
            <div className="bg-white text-dark text-center p-3 rounded">
              <h3 id="seconds">00</h3>
              <small>SEC</small>
            </div>
          </div>

          {/* Button */}
          <button className="btn btn-danger px-4 py-2 fw-bold" onClick={() => {
            const section = document.getElementById("home");
            if (section) section.scrollIntoView({ behavior: "smooth" });
          }}>
            SHOP THE SUMMER SALE
          </button>
        </div>
      </div>
      {/* Countdown Banner Section End */}


      {/* Testimonials Section Start */}
      {/* Testimonials Section Start */}
      <div className="container my-5 py-5" id="testimonials-section">
        <h2 className="text-center fw-bold mb-2 display-5">What Our <br />Shoppers Say</h2>
        <p className="text-center mb-5 text-muted fs-5">Store that nails fashion and comfort.</p>

        <div className="row justify-content-center g-4">
          {/* Card 1 */}
          <div className="col-md-4">
            <div className="p-4 rounded-4 shadow-sm border border-0 bg-light-subtle h-100 transition-all hover-shadow" style={{ transition: 'all 0.3s ease-in-out' }}>
              <div className="fs-2 text-danger mb-3">❝</div>
              <p className="text-dark mb-4">
                “Velora has completely transformed how I shop for clothes. Every piece feels thoughtfully designed and incredibly comfortable — from their polos to their jackets. It’s rare to find a brand that gets the fit, style, and quality right every single time.”
              </p>
              <div className="d-flex align-items-center mt-auto">
                <img
                  src="https://randomuser.me/api/portraits/women/65.jpg"
                  alt="Jessica"
                  className="rounded-circle me-3 border border-2 border-white shadow"
                  width="55"
                  height="55"
                />
                <div className="fw-semibold">Jessica M., <span className="text-muted">San Diego</span></div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-4">
            <div className="p-4 rounded-4 shadow-sm border border-0 bg-light-subtle h-100 transition-all hover-shadow" style={{ transition: 'all 0.3s ease-in-out' }}>
              <div className="fs-2 text-danger mb-3">❝</div>
              <p className="text-dark mb-4">
                “I’m always looking for clean, versatile styles I can wear to work or on the weekends — and Velora delivers. I picked up a few items from their Men’s collection and was blown away by the craftsmanship. The trousers, especially, have become my go-to.”
              </p>
              <div className="d-flex align-items-center mt-auto">
                <img
                  src="https://randomuser.me/api/portraits/men/56.jpg"
                  alt="Darren"
                  className="rounded-circle me-3 border border-2 border-white shadow"
                  width="55"
                  height="55"
                />
                <div className="fw-semibold">Darren L., <span className="text-muted">New York</span></div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-4">
            <div className="p-4 rounded-4 shadow-sm border border-0 bg-light-subtle h-100 transition-all hover-shadow" style={{ transition: 'all 0.3s ease-in-out' }}>
              <div className="fs-2 text-danger mb-3">❝</div>
              <p className="text-dark mb-4">
                “Shopping for myself and my daughter usually means bouncing between stores, but Velora made it easy. I loved the quality of the dresses I ordered, and my daughter adored her Mini Mode pieces. Stylish, comfortable, and built to last — we’re both fans for life!”
              </p>
              <div className="d-flex align-items-center mt-auto">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Michelle"
                  className="rounded-circle me-3 border border-2 border-white shadow"
                  width="55"
                  height="55"
                />
                <div className="fw-semibold">Michelle T., <span className="text-muted">Chicago</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonials Section End */}

      {/* ✅ Start: How It Works Section */}
      <div className="container-fluid py-5" style={{ backgroundColor: "#fceeee" }}>
        <div className="container">
          <h2 className="text-center fw-bold mb-2 display-5">How It Works</h2>
          <p className="text-center mb-5 text-muted fs-5">Just Pick, Pack and Ship</p>

          <div className="row bg-white shadow-sm rounded-4 p-4 g-4">
            {/* Step 1 */}
            <div className="col-md-4 d-flex">
              <div className="me-3">
                <div className="border border-danger rounded-circle d-flex justify-content-center align-items-center" style={{ width: "60px", height: "60px" }}>
                  <i className="bi bi-bag text-danger fs-4"></i>
                </div>
              </div>
              <div>
                <h5 className="fw-bold">Shop Styles</h5>
                <p className="text-muted">Browse our curated collections for Men, Women, Kids & Accessories.</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="col-md-4 d-flex border-start border-end">
              <div className="me-3 ps-3">
                <div className="border border-danger rounded-circle d-flex justify-content-center align-items-center" style={{ width: "60px", height: "60px" }}>
                  <i className="bi bi-clock text-danger fs-4"></i>
                </div>
              </div>
              <div>
                <h5 className="fw-bold">Pick Your Fit</h5>
                <p className="text-muted">Find your perfect size with our detailed fit guides and style notes for every piece.</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="col-md-4 d-flex">
              <div className="me-3">
                <div className="border border-danger rounded-circle d-flex justify-content-center align-items-center" style={{ width: "60px", height: "60px" }}>
                  <i className="bi bi-clipboard-check text-danger fs-4"></i>
                </div>
              </div>
              <div>
                <h5 className="fw-bold">Checkout Fast</h5>
                <p className="text-muted">Enjoy a quick and secure checkout experience with flexible payment options.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ✅ End: How It Works Section */}


      {/* ✅ Start: 10% Off Promo Section */}
      <div className="container py-5 " >
        <div className="text-center mb-4">
          <h2 className="fw-bold">Get 10% Off on Your First Order</h2>
          <p className="text-muted fs-5">
            Plus exclusive access to product drops, style tips, and insider deals.
          </p>
        </div>

        <div className="d-flex justify-content-center mb-5">
          <input
            type="email"
            className="form-control me-2"
            placeholder="ENTER YOUR EMAIL *"
            style={{ maxWidth: '400px' }}
          />
          <button className="btn btn-danger">SUBSCRIBE</button>
        </div>

        <div className="row text-center g-4 justify-content-center mb-4 " id='images' >
          {/* Replace src with your actual image paths */}

          <div className="col-6 col-sm-3">
            <img
              src="https://images.unsplash.com/photo-1611042553484-d61f84d22784?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZhc2hpb24lMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D"
              className="img-fluid rounded-4"
              alt="Fashion 1"
              style={{ height: '250px', objectFit: 'cover', width: '100%' }}
            />
          </div>
          <div className="col-6 col-sm-3">
            <img
              src="https://media.istockphoto.com/id/2149636751/photo/portrait-of-her-she-nice-well-dressed-attractive-lovely-luxury-pretty-cheerful-girl-isolated.jpg?s=612x612&w=0&k=20&c=iusUoSi2qW0-fEZQGsADgkaioemCTBsITeud4uzu5WY="
              className="img-fluid rounded-4"
              alt="Fashion 2"
              style={{ height: '250px', objectFit: 'cover', width: '100%' }}
            />
          </div>
          <div className="col-6 col-sm-3">
            <img
              src="https://media.istockphoto.com/id/973481674/photo/stylish-man-posing-on-grey-background.jpg?s=612x612&w=0&k=20&c=zn4YXiU1RX4-DHz8XNSSB3PoEKBxpfeFtRTESWX6OWQ="
              className="img-fluid rounded-4"
              alt="Fashion 3"
              style={{ height: '250px', objectFit: 'cover', width: '100%' }}
            />
          </div>
          <div className="col-6 col-sm-3">
            <img
              src="https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="img-fluid rounded-4"
              alt="Fashion 4"
              style={{ height: '250px', objectFit: 'cover', width: '100%' }}
            />
          </div>
        </div>

        <div className="text-center mt-4">
          <i className="bi bi-instagram text-danger fs-4 me-2"></i>
          <span className="fw-bold">Follow us</span> <span className="text-muted">@Sanjeet</span>
        </div>
      </div>
      {/* ✅ End: 10% Off Promo Section */}


      {/* === FEATURES SECTION START === */}
      <div className="py-5" style={{ backgroundColor: '#fff5f6' }}>
        <div className="container" id='comp'>
          <div className="row">

            {/* Feature 1 */}
            <div className="col-sm-3">

              <img src="https://cdn-icons-png.flaticon.com/512/1048/1048310.png" alt="Free Delivery" width="50" height="50" className="mb-3" />
              <h6 className="fw-bold">Free Standard Delivery</h6>
              <p className="text-muted mb-0">On all Orders Over $100</p>

            </div>

            {/* Feature 2 */}
            <div className="col-sm-3">

              <img src="https://cdn-icons-png.flaticon.com/512/6598/6598513.png" alt="Quick Delivery" width="50" height="50" className="mb-3" />
              <h6 className="fw-bold">Quick Delivery</h6>
              <p className="text-muted mb-0">Delivery within 3 Days across US</p>

            </div>

            {/* Feature 3 */}
            <div className="col-sm-3">
              <div>
                <img src="https://cdn-icons-png.flaticon.com/512/2331/2331970.png" alt="Secure Payments" width="50" height="50" className="mb-3" />
                <h6 className="fw-bold">Secure Payments</h6>
                <p className="text-muted mb-0">Secure Payment Methods</p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="col-sm-3">
              <div>
                <img src="https://cdn-icons-png.flaticon.com/512/11061/11061778.png" alt="Customer Service" width="50" height="50" className="mb-3" />
                <h6 className="fw-bold">Top Rated Customer Service</h6>
                <p className="text-muted mb-0">Quick Responses &amp; Solutions</p>
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* === FEATURES SECTION END === */}

      {/* 
      FOOTER */}












    </ >
  )



}

// 👉 Countdown Timer Script (Pure JS inside useEffect nahi hai)
setInterval(() => {
  const target = new Date("2025-08-01T00:00:00").getTime(); // 🔁 Change date as needed
  const now = new Date().getTime();
  const diff = target - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("days").textContent = days.toString().padStart(2, "0");
  document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
  document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
  document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
}, 1000);