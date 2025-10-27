import React from 'react'

export default function Faqs() {
  return (
    <div>
      <section className="py-5 bg-light-subtle text-center">
        <div className="container">
          <h2 className="fw-bold display-5">Frequently Asked Questions</h2>
          <p className="text-muted mt-2">
            Explore our most commonly asked questions below.
          </p>
        </div>
      </section>


      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              What is your return policy?
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              When will I get my refund?
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              ACan I exchange an item for a different size?
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>



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




      {/* FOOOTER */}




    </div>
  )
}
