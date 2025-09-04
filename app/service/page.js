import React from 'react'
import service_img from "../images/service-img.jpg"
import Image from 'next/image'

export default function Service() {
  return (
    <section className="service_section layout_padding-bottom layout_padding2-top">
      <div className="container">
        <div className="heading_container">
          <h2>
            Ser<span>vi</span>ces
          </h2>
          <p>
            adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolore magn
          </p>
        </div>
        <div className="row">
          <div className="col-lg-6 ">
            <div className="img-container tab-content">
              <div className="img-box tab-pane fade show active" id="img1" role="tabpanel">
                <Image src={service_img} alt="" />
              </div>
              <div className="img-box tab-pane fade  " id="img2" role="tabpanel">
                <Image src={service_img} alt="" />
              </div>
              <div className="img-box tab-pane fade  " id="img3" role="tabpanel">
                <Image src={service_img} alt="" />
              </div>
              <div className="img-box tab-pane fade  " id="img4" role="tabpanel">
                <Image src={service_img} alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="detail-container nav nav-tabs" id="myTab" role="tablist">
              <div className="detail-box active" id="img1-tab" data-toggle="tab" href="#img1" role="tab" aria-selected="true">
                <h4>
                  Website <br />
                  design
                </h4>
              </div>
              <div className="detail-box" id="img2-tab" data-toggle="tab" href="#img2" role="tab" aria-selected="false">
                <h4>
                  Logo <br />
                  design
                </h4>
              </div>
              <div className="detail-box" id="img2-tab" data-toggle="tab" href="#img3" role="tab" aria-selected="false">
                <h4>
                  brochure <br />
                  design
                </h4>
              </div>
              <div className="detail-box" id="img2-tab" data-toggle="tab" href="#img4" role="tab" aria-selected="false">
                <h4>
                  visiting card <br />
                  design
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="btn-box">
          <a href="">
            Read More
          </a>
        </div>
      </div>
    </section>
  )
}
