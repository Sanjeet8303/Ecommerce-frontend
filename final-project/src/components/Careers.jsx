import React from 'react'

export default function Careers() {
  return (
    <div>
      <div className="careers-section">
        {/* Top Banner */}
        <div className="bg-light-pink text-center py-5">
          <h2 className="fw-bold mb-3">Careers at Velora</h2>
          <p className="text-muted mb-0">
            At Velora, you’ll find purpose in your work, passion in your teammates, and growth in every step.
          </p>
        </div>

        {/* Main Content */}
        <div className="container my-5">
          <div className="row align-items-center">
            {/* Image */}
            <div className="col-md-6 mb-4 mb-md-0">
              <img
                src="https://media.istockphoto.com/id/1023612090/photo/interior-of-clothing-store.webp?a=1&b=1&s=612x612&w=0&k=20&c=Jx5RTzlY8m0_41wDG2lCi0kaIcHcw7ncVUrydH1gmgw="
                alt="Career at Velora"
                className="img-fluid rounded-4"
              />
            </div>

            {/* Text Content */}
            <div className="col-md-6">
              <h3 className="fw-bold mb-3">Grow Your Career with Us</h3>
              <p className="text-muted">
                Whether you’re helping a customer find their perfect fit or designing our next best-selling piece,
                your work matters here. We value creativity, collaboration, and people who bring fresh ideas to the table.
              </p>

              {/* Bullet Grid */}
              <div className="row mb-4">
                <div className="col-6 mb-2">
                  <i className="bi bi-check-circle-fill text-danger me-2"></i> Fun
                </div>
                <div className="col-6 mb-2">
                  <i className="bi bi-check-circle-fill text-danger me-2"></i> Flexibility
                </div>
                <div className="col-6 mb-2">
                  <i className="bi bi-check-circle-fill text-danger me-2"></i> ESPOS
                </div>
                <div className="col-6 mb-2">
                  <i className="bi bi-check-circle-fill text-danger me-2"></i> Growth
                </div>
              </div>

              {/* CTA Button */}
              <button className="btn btn-danger rounded-pill px-4 py-2 fw-semibold">
                VIEW OPEN POSITIONS
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* part2 */}

      <div className="life-at-velora-section bg-light-pink py-5">
        <div className="container text-center">
          {/* Heading */}
          <h2 className="fw-bold mb-3">Life at Velora</h2>
          <p className="text-muted mb-5">
            Get a behind-the-scenes look at what it’s like to work at Velora. From collaborative design sessions to
            launch-day celebrations, we believe in doing great work — and enjoying the journey along the way.
          </p>

          {/* Image Grid */}
          <div className="row g-4 justify-content-center">
            {/* Large Left Image */}
            <div className="col-md-6">
              <div className="img-box">
                <img
                  src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D"
                  alt="Team working"
                  className="img-fluid rounded-4"
                />
              </div>
            </div>

            {/* 3 Smaller Images on Right */}
            <div className="col-md-6">
              <div className="row g-4">
                <div className="col-6">
                  <div className="img-box">
                    <img
                      src="https://images.unsplash.com/photo-1627577279497-4b24bf1021b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZhc2hpb24lMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D"


                      alt="Collaboration"
                      className="img-fluid rounded-4"
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div className="img-box">
                    <img
                      src="https://images.unsplash.com/photo-1613915617430-8ab0fd7c6baf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZmFzaGlvbiUyMG1vZGVsfGVufDB8fDB8fHww"
                      alt="Celebration"
                      className="img-fluid rounded-4"
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="img-box">
                    <img
                      src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZhc2hpb24lMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D"
                      alt="Design in progress"
                      className="img-fluid rounded-4"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* part 3 */}

      <div className="perks-benefits-section py-5 text-center">
        <div className="container">
          <h2 className="fw-bold mb-2">Perks & Benefits</h2>
          <p className="text-muted mb-5">Where Great Work Meets Great Rewards</p>

          <div className="row g-4 justify-content-center">
            {[
              {
                title: "Employee Discounts",
                desc: "Enjoy exclusive discounts & more on Velora styles.",
              },
              {
                title: "Flexible Work",
                desc: "Choose remote, hybrid, or in-office roles that suit your lifestyle.",
              },
              {
                title: "Career Growth",
                desc: "Learn, grow, and thrive with clear paths to advancement.",
              },
              {
                title: "Wellness Support",
                desc: "Prioritize well-being with access to wellness tools.",
              },
            ].map((item, i) => (
              <div className="col-6 col-md-3" key={i}>
                <div className="benefit-box p-3">
                  <div className="icon-circle mb-3 mx-auto">
                    <i className="bi bi-check2 text-white fs-4"></i>
                  </div>
                  <h6 className="fw-bold">{item.title}</h6>
                  <p className="text-muted small">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


      <section className="py-5 bg-light-subtle">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-6">
              <h2 className="fw-bold">Ready to Join Us?</h2>
              <p className="text-muted">Let’s Make Something Great Together</p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 offset-md-6">
              {[
                { title: "Graphic Designer – Apparel", location: "Remote or NYC" },
                { title: "Customer Experience Associate", location: "Full-Time, Remote" },
                { title: "Warehouse Coordinator", location: "Los Angeles" },
                { title: "Social Media Manager", location: "Full-Time, Hybrid" },
              ].map((job, index) => (
                <div className="d-flex justify-content-between border-bottom py-3" key={index}>
                  <div>
                    <h6 className="fw-bold mb-1">{job.title}</h6>
                    <p className="text-muted mb-0">{job.location}</p>
                  </div>
                  <div className="text-danger fs-5">
                    <i className="bi bi-arrow-right"></i>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="row mt-5 text-center">
            <div className="col">
              <h5 className="fw-bold">Don’t see the right role?</h5>
              <p className="text-danger border-bottom border-danger d-inline-block">
                EMAIL US AT JOBS@VELORA.COM
              </p>
            </div>
          </div>
        </div>
      </section>








    </div>
  )
}

