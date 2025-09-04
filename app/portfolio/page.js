import React from 'react'
import p1 from "../images/p1.jpg"
import p2 from "../images/p2.jpg"
import p3 from "../images/p3.jpg"
import p4 from "../images/p4.jpg"
import Image from 'next/image'

export default function Portfolio() {
  return (
    <section className="portfolio_section layout_padding2-top">
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
              <a href="" className="btn-1">

              </a>
              <a href="" className="btn-2">

              </a>
            </div>
          </div>
          <div className="img-box b-2">
            <Image src={p2} alt="" />
            <div className="btn-box">
              <a href="" className="btn-1">

              </a>
              <a href="" className="btn-2">

              </a>
            </div>
          </div>
        </div>
        <div className="box-2">
          <div className="img-box b-3">
            <Image src={p3} alt="" />
            <div className="btn-box">
              <a href="" className="btn-1">

              </a>
              <a href="" className="btn-2">

              </a>
            </div>
          </div>
          <div className="img-box b-4">
            <Image src={p4} alt="" />
            <div className="btn-box">
              <a href="" className="btn-1">

              </a>
              <a href="" className="btn-2">

              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
