import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import location from "../images/location.png"
import call from "../images/call.png"
import mail from "../images/mail.png"
import twitter from "../images/twitter.png"
import linkedin from "../images/linkedin.png"
import youtube from "../images/youtube.png"
import fb from "../images/fb.png"

export default function Footer() {
  return (
    <section className="info_section  layout_padding2-top">
      <div className="social_container">
        <div className="social_box">
          <a href="">
            <img src="../images/fb.png" alt="" />
            <Image src={fb} alt="" />
          </a>
          <a href="">
            {/* <img src="images/twitter.png" alt=""> */}
            <Image src={twitter} alt="" />
          </a>
          <a href="">
            {/* <img src="images/linkedin.png" alt=""> */}
            <Image src={linkedin} alt="" />
          </a>
          <a href="">
            {/* <img src="images/youtube.png" alt=""> */}
            <Image src={youtube} alt="" />
          </a>
        </div>
      </div>
      <div className="info_container ">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-3">
              <h6>
                ABOUT US
              </h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet,
              </p>
            </div>
            <div className="col-md-6 col-lg-3">
              <h6>
                Instagram
              </h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipi
                scing elit, sed doLorem ipsum dolor sit
              </p>
            </div>
            <div className="col-md-6 col-lg-3">
              <h6>
                NEED HELP
              </h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet,
              </p>
            </div>
            <div className="col-md-6 col-lg-3">
              <h6>
                CONTACT US
              </h6>
              <div className="info_link-box">
                <Link href="#">
                  <Image src={location} alt="" />
                  <span> Yerevan </span>
                </Link>
                <Link href="tel:+37493023002">
                  <Image src={call} alt="Phone" />
                  <span>+374 93 02 30 02</span>
                </Link>
                <Link href="mailto:info@helpcontent.net" >
                  <Image src={mail} alt="" />
                  <span>info@helpcontent.net</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className=" footer_section">
        <div className="container">
          <p>
            &copy; <span id="displayYear"></span> All Rights Reserved By &nbsp;
            <Link href="/">Helpcontent</Link>
          </p>
        </div>
      </section>

    </section>
  )
}
