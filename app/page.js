import Image from "next/image";
import slider_img from "./images/slider-img.jpg"
import service_img from "./images/service-img.jpg"
import line from "./images/line.png"
import p1 from "./images/p1.jpg"
import p2 from "./images/p2.jpg"
import p3 from "./images/p3.jpg"
import p4 from "./images/p4.jpg"
import l1 from "./images/l1.jpg"
import l2 from "./images/l2.jpg"
import l3 from "./images/l3.jpg"
import l4 from "./images/l4.jpg"
import l5 from "./images/l5.jpg"
import l6 from "./images/l6.jpg"
import quote from "./images/quote.png"
import client from "./images/client.jpg"
import Link from "next/link";

export default function Home() {

  return (
    <div>
      <section className="slider_section">
        <div className="slider_container">
          <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active">
                01
              </li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1">
                02
              </li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2">
                03
              </li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 px-0">
                      <div className="img-box">
                        <Image src={slider_img} alt="" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="detail-box">
                        <h1>
                          Design
                          <br />
                          Agency
                        </h1>
                        <p>
                          There are many variations of passages of Lorem Ipsum available, but the
                        </p>
                        <Link href="#">
                          Contact Us
                        </ Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 px-0">
                      <div className="img-box">
                        <Image src={slider_img} alt="" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="detail-box">
                        <h1>
                          Design
                          <br />
                          Agency
                        </h1>
                        <p>
                          There are many variations of passages of Lorem Ipsum available, but the
                        </p>
                        <Link href="#">
                          Contact Us
                        </ Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 px-0">
                      <div className="img-box">
                        <Image src={slider_img} alt="" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="detail-box">
                        <h1>
                          Design
                          <br />
                          Agency
                        </h1>
                        <p>
                          There are many variations of passages of Lorem Ipsum available, but the
                        </p>
                        <Link href="#">
                          Contact Us
                        </ Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel_btn-box">
              <Link className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="sr-only">Previous</span>
              </ Link>
              <Image src={line} alt="" />
              <Link className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="sr-only">Next</span>
              </ Link>
            </div>
          </div>
        </div>
      </section>

      <section className="service_section layout_padding">
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
            <Link href="#">
              Read More
            </ Link>
          </div>
        </div>
      </section>

      <section className="portfolio_section">
        <div className="heading_container">
          <h2>
            Por<span>tf</span>olio
          </h2>
          <p>
            adipiscingelit,sed do eiusmod tempor incididunt ut labore et dolore magn
          </p>
        </div>
        <div className="portfolio_container layout_padding">
          <div className="box-1">
            <div className="img-box b-1">
              <Image src={p1} alt="" />
              <div className="btn-box">
                <Link href="#" className="btn-1">

                </ Link>
                <Link href="#" className="btn-2">

                </ Link>
              </div>
            </div>
            <div className="img-box b-2">
              <Image src={p2} alt="" />
              <div className="btn-box">
                <Link href="#" className="btn-1">

                </ Link>
                <Link href="#" className="btn-2">

                </ Link>
              </div>
            </div>
          </div>
          <div className="box-2">
            <div className="img-box b-3">
              <Image src={p3} alt="" />
              <div className="btn-box">
                <Link href="#" className="btn-1">

                </ Link>
                <Link href="#" className="btn-2">

                </ Link>
              </div>
            </div>
            <div className="img-box b-4">
              <Image src={p4} alt="" />
              <div className="btn-box">
                <Link href="#" className="btn-1">

                </ Link>
                <Link href="#" className="btn-2">

                </ Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="logo_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h2>
              A N<span>EW</span> Logo <br />
              FOR YOUR COMPANY
            </h2>
            <p>
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magn
            </p>
          </div>
        </div>
        <div className="logo_container layout_padding">
          <div className="carousel-wrap">
            <div className="owl-carousel d-flex">
              <div className="item">
                <div className="box  b1">
                  <div className="img-box">
                    <Image src={l1} alt="" />
                  </div>
                  <div className="detail-box">
                    <h4>
                      Logo
                    </h4>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="box b2">
                  <div className="img-box">
                    <Image src={l2} alt="" />
                  </div>
                  <div className="detail-box">
                    <h4>
                      Logo
                    </h4>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="box  b1">
                  <div className="img-box">
                    <Image src={l3} alt="" />
                  </div>
                  <div className="detail-box">
                    <h4>
                      Logo
                    </h4>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="box b2">
                  <div className="img-box">
                    <Image src={l4} alt="" />
                  </div>
                  <div className="detail-box">
                    <h4>
                      Logo
                    </h4>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="box  b1">
                  <div className="img-box">
                    <Image src={l5} alt="" />
                  </div>
                  <div className="detail-box">
                    <h4>
                      Logo
                    </h4>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="box b2">
                  <div className="img-box">
                    <Image src={l6} alt="" />
                  </div>
                  <div className="detail-box">
                    <h4>
                      Logo
                    </h4>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="box  b1">
                  <div className="img-box">
                    <Image src={l3} alt="" />
                  </div>
                  <div className="detail-box">
                    <h4>
                      Logo
                    </h4>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="box b2">
                  <div className="img-box">
                    <Image src={l4} alt="" />
                  </div>
                  <div className="detail-box">
                    <h4>
                      Logo
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="started_section layout_padding-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="detail-box">
                <div className="heading_container">
                  <h2>
                    Lets <span>Get</span> Started <br />
                    Your Project
                  </h2>
                  <p>
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magn
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 offset-md-1">
              <div className="btn-box">
                <Link href="#">
                  Let’s talk
                </ Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="agency_section layout_padding-bottom">
        <div className="agency_container ">
          <div className="box ">
            <div className="detail-box">
              <div className="heading_container">
                <h2>
                  About <span>Design</span> Agency
                </h2>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
              </p>
              <Link href="#">
                Read More
              </ Link>
            </div>
          </div>
        </div>
      </section>

      <section className="contact_section layout_padding">
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
                  <iframe src="https:www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France" width="600" height="300" frameBorder="0" style={{ border: "0", width: "100%", height: "100%" }} allowFullScreen></iframe>
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

      <section className="client_section layout_padding-bottom">
        <div className="container">
          <div className="heading_container">
            <h2>
              What <span>says</span> our clients
            </h2>
          </div>
          <div className="box">
            <div className="client_id">
              <div className="name">
                <h4>
                  Sandy <br />
                  Nor
                </h4>
              </div>
              <div className="img-box">
                <Image src={client} alt="" />
              </div>
            </div>
            <div className="detail-box">
              <p>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem
              </p>
              <Image src={quote} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div >
  )
}
