import Link from 'next/link'
import React from 'react'

export default function About() {
  return (
    <section className="agency_section layout_padding2-top">
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
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
