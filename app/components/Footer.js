import Link from 'next/link'
import React from 'react'
import { MdOutlineEmail } from "react-icons/md";


export default function Footer() {
  return (
    <footer>
      <section className="info_section  layout_padding2-top m-0">
        <div className="info_container ">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h6>
                  ABOUT US
                </h6>
                <p>
                  We built this platform to make developers’ lives easier. Instantly fetch sample text, images, audio, or video — no hassle, no hunting for resources. Focus on coding, prototyping, and creating — we handle the placeholders.
                </p>
              </div>
              <div className="col-md-6 col-lg-3">
                <h6>
                  CONTACT US
                </h6>
                <div className="info_link-box">
                  <Link className='d-flex align-items-center gap-2' href="mailto:info@helpcontent.net" style={{ textDecoration: "none" }} >
                    <MdOutlineEmail size={24} color='#fff' />
                    <span>info@helpcontent.net</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" footer_section">
          <div className="container">
            <p>
              &copy; <span id="displayYear"></span> All Rights Reserved By &nbsp;
              <Link href="/">Helpcontent</Link>
            </p>
          </div>
        </div>
      </section>
    </footer>
  )
}
