import React from 'react'

export default function ContactUs() {
  return (
    <section className="contact_section layout_padding-bottom layout_padding2-top">
      <div className="container px-0">
        <div className="heading_container">
          <h2 className="">
            Con<span>ta</span>ct Us
          </h2>
        </div>

      </div>
      <div className="container container-bg">
        <div className="row">
          <div className="col-lg-8 col-md-7 px-0">
            <div className="map_container">
              <div className="map-responsive">
                <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France" width="600" height="300" frameBorder="0" style={{ border: "0", width: "100%", height: "100%" }} allowFullScreen></iframe>
              </div>
            </div>
          </div>
          <div className="col-md-5 col-lg-4 px-0">
            <form action="">
              <div>
                <input type="text" placeholder="Name" />
              </div>
              <div>
                <input type="email" placeholder="Email" />
              </div>
              <div>
                <input type="text" placeholder="Phone" />
              </div>
              <div>
                <input type="text" className="message-box" placeholder="Message" />
              </div>
              <div className="d-flex ">
                <button>
                  SEND
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
