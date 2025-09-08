"use client";
import { Container, Row, Col, Button } from "react-bootstrap";
import Image from "next/image";
import { useState } from "react";
import { FaRegCopy } from "react-icons/fa";
import DataRendererObj from "./DataRenderer";

export function VideoComponent() {
    const mainUrl = process.env.NEXT_PUBLIC_API_URL || "";
    const [data, setData] = useState(null);

    const getVideo = () => {
        if (data) return;
        setData(`${mainUrl}/video/get/1`)
    };

    const copyText = async (text) => {
        if (!text) return;
        try {
            await navigator.clipboard.writeText(text);
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <section id="video" className="portfolio_section mt-5">
            <Container className="heading_container">
                <Row className="gap-3">
                    <Col sm={12}>
                        <h2 className="mb-3 text-center">
                            <span>{'{'}&nbsp;</span>Video<span>&nbsp;{'}'}</span>
                        </h2>
                        <p className="text-center">
                            Fetch sample video files from our API to use in your demos or projects.
                        </p>
                    </Col>
                    <Col sm={12} >
                        <div className="text-start mt-2">
                            <h3>Try it</h3>
                            <p className="mb-0">
                                Copy and run this snippet in your browser console or directly in your code to fetch and play a video file:
                            </p>
                        </div>
                    </Col>
                    <Col sm={12}>
                        <div className="shadow">
                            <div className="bg-dark rounded py-3 py-md-4 px-4 px-md-5 text-white text-start code position-relative overflow-hidden">
                                <FaRegCopy
                                    className="copy-icon"
                                    size={20}
                                    title="Copy"
                                    onClick={() =>
                                        copyText(
                                            `fetch("${mainUrl}/video/get/1").then(response => response.blob()).then(data => console.log(data))`
                                        )
                                    }
                                />
                                <span className="d-block">
                                    <span className="text-warning">fetch</span>("{mainUrl}/video/get/1")
                                </span>
                                <span className="d-block ms-5">
                                    .<span className="text-warning">then</span>(response =&gt; response.<span className="text-warning">blob</span>())
                                </span>
                                <span className="d-block ms-5">
                                    .<span className="text-warning">then</span>(data =&gt; console.<span className="text-warning">log</span>(data))
                                </span>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12}>
                        <Button variant="warning" className="text-white px-4" onClick={getVideo}>
                            Run Script
                        </Button>
                    </Col>

                    <Col sm={12}>
                        <div className="shadow bg-dark rounded p-4 text-white position-relative">
                            {data && (
                                <FaRegCopy
                                    className="copy-icon"
                                    size={20}
                                    title="Copy"
                                    onClick={() => copyText(`${mainUrl}/video/get/1`)}
                                />
                            )}
                            <DataRendererObj data={data} />
                        </div>
                        {data && (
                            <div className="text-start mt-3">
                                <p>🎥 Awesome! You successfully fetched video from the API! 🚀</p>
                            </div>
                        )}
                    </Col>
                    <Col sm={12}>
                        <div className="text-start">
                            <h3>When to use</h3>
                            <p>
                                Use our video API whenever you need fast and customizable placeholder video clips. Ideal for wireframes, mockups, frontend demos, or testing video players and responsive layouts without depending on real video content.                            </p>
                        </div>
                    </Col>
                    <Col sm={12}>
                        <h3>Resources</h3>
                        <Row>
                            <Col lg={4} md={6}>
                                {
                                    new Array(5).fill("").map((_, index) => {
                                        return <p key={index} className="d-flex justify-content-between">
                                            <span>GET</span>
                                            <span className="d-flex align-items-center gap-2">
                                                <a href={`${mainUrl}/video/get/${index + 1}`} target="_blank">/video/get/{index + 1}</a>
                                                <FaRegCopy
                                                    size={14}
                                                    style={{ cursor: "pointer" }}
                                                    title="Copy"
                                                    onClick={() => copyText(`${mainUrl}/video/get/${index + 1}`)}
                                                />
                                            </span>
                                            <span>(Video {index + 1}) 🎬</span>
                                        </p>
                                    })
                                }
                                {
                                    new Array(5).fill("").map((_, index) => {
                                        return <p key={index} className="d-flex justify-content-between">
                                            <span>GET</span>
                                            <span className="d-flex align-items-center gap-2">
                                                <a href={`${mainUrl}/video/get/${index + 1}/download`} target="_blank">/video/get/{index + 1}/download</a>
                                                <FaRegCopy
                                                    size={14}
                                                    style={{ cursor: "pointer" }}
                                                    title="Copy"
                                                    onClick={() => copyText(`${mainUrl}/video/get/${index + 1}/download`)}
                                                />
                                            </span>
                                            <span>(Download {index + 1}) 💾</span>
                                        </p>
                                    })
                                }
                            </Col>
                        </Row>
                    </Col>

                    <Col className="d-flex justify-content-center my-4">
                        <img src={"/images/line.png"} alt="line" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}