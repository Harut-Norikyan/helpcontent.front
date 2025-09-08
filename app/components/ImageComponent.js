"use client";
import { Container, Row, Col, Button } from "react-bootstrap";
import DataRendererObj from "./DataRenderer";
import { useState } from "react";
import { FaRegCopy } from "react-icons/fa";


export default function ImageComponent() {

    const mainUrl = process.env.NEXT_PUBLIC_API_URL || "";
    const [data, setData] = useState(null);

    const getImage = () => {
        if (data) {
            return false;
        }
        setData(`${mainUrl}/image/100/100`)
    }

    const copyText = async (text) => {
        if (!text) return false;
        try {
            await navigator.clipboard.writeText(text);
        } catch (error) {
            console.error(error.message);
        }
    }

    return <section id="image" className="portfolio_section mt-5">
        <Container className="heading_container">
            <Row>
                <Col sm={12}>
                    <Row className="gap-3">
                        <Col sm={12}>
                            <h2 className="mb-3 text-center">
                                <span>{'{'}&nbsp;</span>Image<span>&nbsp;{'}'}</span>
                            </h2>
                            <p className="text-center">
                                Our API allows you to easily generate placeholder images of any size.
                                This is perfect for front-end development, UI/UX testing, prototyping,
                                or when you need quick sample visuals without manually creating images.
                            </p>
                        </Col>
                        <Col sm={12} >
                            <div className="text-start mt-2">
                                <h3>Try it</h3>
                                <p className="mb-0">
                                    Copy and run this snippet in your browser console or directly in your code to fetch an image:
                                </p>
                            </div>
                        </Col>
                        <Col sm={12}>
                            <div>
                                <div className="shadow">
                                    <div className="bg-dark rounded py-3 py-md-4 px-4 px-md-5 text-white text-start code position-relative overflow-hidden">
                                        <FaRegCopy
                                            className="copy-icon"
                                            size={20}
                                            title="Copy"
                                            onClick={() =>
                                                copyText(`fetch("${mainUrl}/image/100/100").then(response => response.blob()).then(data => console.log(data))`)
                                            }
                                        />
                                        <span className="d-block">
                                            <span className="text-warning">fetch</span>("{mainUrl}/image/100/100")
                                        </span>
                                        <span className="d-block ms-5">
                                            .<span className="text-warning">then</span>(response =&gt; response.<span className="text-warning">blob</span>())
                                        </span>
                                        <span className="d-block ms-5">
                                            .<span className="text-warning">then</span>(data =&gt; console.<span className="text-warning">log</span>(data))
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <Button
                                variant="warning"
                                className="text-white px-4"
                                onClick={getImage}
                            >
                                Run Script
                            </Button>
                        </Col>
                        <Col sm={12}>
                            <div>
                                <div className="shadow">
                                    <div className="bg-dark rounded py-3 py-md-4 px-4 px-md-5 text-white text-start code position-relative overflow-hidden">
                                        {
                                            data ?
                                                <FaRegCopy
                                                    className="copy-icon"
                                                    size={20}
                                                    title="Copy"
                                                    onClick={() => copyText(`${mainUrl}/image/100/100`)}
                                                />
                                                : null
                                        }
                                        <DataRendererObj data={data} />
                                    </div>
                                </div>
                                {
                                    data ?
                                        <div className="text-start mt-3">
                                            <p>🎉 Success! You just retrieved a placeholder image from our API. 🚀</p>
                                        </div>
                                        : null
                                }
                            </div>
                        </Col>

                        <Col sm={12}>
                            <div className="text-start">
                                <h3>When to use</h3>
                                <p>
                                    Use our image API whenever you need fast and customizable placeholder images.
                                    It’s ideal for wireframes, mockups, frontend demos, or testing responsive layouts
                                    without depending on real image assets.
                                </p>
                            </div>
                        </Col>

                        <Col sm={12}>
                            <div className="text-start">
                                <h3>Resources</h3>
                                <p>
                                    Below are some ready-to-use image endpoints you can explore:
                                </p>
                                <Row>
                                    <Col lg={5} md={6}>
                                        <p className="d-flex justify-content-between">
                                            <span>GET</span>
                                            <span className="d-flex align-items-center gap-2">
                                                <a href={`${mainUrl}/image/250/250`} target="_blank">/image/250/250</a>
                                                <FaRegCopy
                                                    size={14}
                                                    className="mt-1"
                                                    style={{ cursor: "pointer" }}
                                                    color="#222222"
                                                    title="Copy"
                                                    onClick={() => copyText(`${mainUrl}/image/250/250`)}
                                                />
                                            </span>
                                            <span>(Square image 250x250) ✨</span>
                                        </p>
                                        <p className="d-flex justify-content-between">
                                            <span>GET</span>
                                            <span className="d-flex align-items-center gap-2">
                                                <a href={`${mainUrl}/image/200/400`} target="_blank">/image/200/400</a>
                                                <FaRegCopy
                                                    size={14}
                                                    className="mt-1"
                                                    style={{ cursor: "pointer" }}
                                                    color="#222222"
                                                    title="Copy"
                                                    onClick={() => copyText(`${mainUrl}/image/200/400`)}
                                                />
                                            </span>
                                            <span>(Portrait image 200x400) 🚀</span>
                                        </p>
                                        <p className="d-flex justify-content-between">
                                            <span>GET</span>
                                            <span className="d-flex align-items-center gap-2">
                                                <a href={`${mainUrl}/image/1000/500`} target="_blank">/image/1000/500</a>
                                                <FaRegCopy
                                                    size={14}
                                                    className="mt-1"
                                                    style={{ cursor: "pointer" }}
                                                    color="#222222"
                                                    title="Copy"
                                                    onClick={() => copyText(`${mainUrl}/image/1000/500`)}
                                                />
                                            </span>
                                            <span>(Wide image 1000x500) 🎉</span>
                                        </p>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col>
                            <div className="d-flex justify-content-center">
                                <img src={"/images/line.png"} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </section>
}
