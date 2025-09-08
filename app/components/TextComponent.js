"use client";
import { Container, Row, Col, Button } from "react-bootstrap";
import DataRendererObj from "./DataRenderer";
import { useState } from "react";
import { FaRegCopy } from "react-icons/fa";

export default function TextComponent() {
    const mainUrl = process.env.NEXT_PUBLIC_API_URL || "";
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState(null);

    const getText = () => {
        if (data || isLoading) return;
        setIsLoading(true);
        fetch(`${mainUrl}/text/10`)
            .then(response => response.text())
            .then(text => setData(text))
            .finally(() => setIsLoading(false));
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
        <section id="text" className="portfolio_section mt-5">
            <Container className="heading_container">
                <Row>
                    <Col sm={12}>
                        <Row className="gap-3">
                            <Col sm={12}>
                                <h2 className="mb-3 text-center">
                                    <span>{'{'}&nbsp;</span>Text<span>&nbsp;{'}'}</span>
                                </h2>
                                <p className="text-center">
                                    This endpoint allows you to fetch sample text data directly from our API.
                                    It’s useful for testing, debugging, and quickly getting placeholder content
                                    for your applications or tutorials.
                                </p>
                            </Col>

                            {/* Try it */}
                            <Col sm={12}>
                                <div className="text-start mt-2">
                                    <h3>Try it</h3>
                                    <p className="mb-0">
                                        Run this snippet in your browser console or directly inside your app:
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
                                                    `fetch("${mainUrl}/text/10").then(response => response.text()).then(data => console.log(data))`
                                                )
                                            }
                                        />
                                        <span className="d-block">
                                            <span className="text-warning">fetch</span>("{mainUrl}/text/10")
                                        </span>
                                        <span className="d-block ms-5">
                                            .<span className="text-warning">then</span>(response =&gt; response.<span className="text-warning">text</span>())
                                        </span>
                                        <span className="d-block ms-5">
                                            .<span className="text-warning">then</span>(data =&gt; console.<span className="text-warning">log</span>(data))
                                        </span>
                                    </div>
                                </div>
                            </Col>

                            <Col>
                                <Button
                                    variant="warning"
                                    className="text-white px-4"
                                    onClick={getText}
                                >
                                    Run Script
                                </Button>
                            </Col>

                            {/* Output */}
                            <Col sm={12}>
                                <div className="shadow">
                                    <div className="bg-dark rounded py-3 py-md-4 px-4 px-md-5 text-white text-start code position-relative overflow-hidden">
                                        {data ? (
                                            <FaRegCopy
                                                className="copy-icon"
                                                size={20}
                                                title="Copy"
                                                onClick={() => copyText(data)}
                                            />
                                        ) : null}
                                        <DataRendererObj data={data} />
                                    </div>
                                </div>
                                {data ? (
                                    <div className="text-start mt-3">
                                        <p>🎉 Great! You successfully fetched text from the API.</p>
                                    </div>
                                ) : null}
                            </Col>

                            {/* When to use */}
                            <Col sm={12}>
                                <div className="text-start">
                                    <h3>When to use</h3>
                                    <p>
                                        Use this API whenever you need placeholder text for your projects:
                                    </p>
                                    <ul>
                                        <li>Creating demo websites or apps</li>
                                        <li>Testing your frontend layouts</li>
                                        <li>Writing tutorials or guides</li>
                                        <li>Quickly checking API integration</li>
                                    </ul>
                                </div>
                            </Col>

                            {/* Resources */}
                            <Col sm={12}>
                                <div className="text-start">
                                    <h3>Resources</h3>
                                    <p>
                                        Example endpoints you can explore:
                                    </p>
                                    <Row>
                                        <Col lg={4} md={6}>
                                            <p className="d-flex justify-content-between">
                                                <span>GET</span>
                                                <span className="d-flex align-items-center gap-2">
                                                    <a href={`${mainUrl}/text/10`} target="_blank">/text/10</a>
                                                    <FaRegCopy
                                                        size={14}
                                                        className="mt-1"
                                                        style={{ cursor: "pointer" }}
                                                        color="#222222"
                                                        title="Copy"
                                                        onClick={() => copyText(`${mainUrl}/text/10`)}
                                                    />
                                                </span>
                                                <span>(10 words) ✅</span>
                                            </p>
                                            <p className="d-flex justify-content-between">
                                                <span>GET</span>
                                                <span className="d-flex align-items-center gap-2">
                                                    <a href={`${mainUrl}/text/100`} target="_blank">/text/100</a>
                                                    <FaRegCopy
                                                        size={14}
                                                        className="mt-1"
                                                        style={{ cursor: "pointer" }}
                                                        color="#222222"
                                                        title="Copy"
                                                        onClick={() => copyText(`${mainUrl}/text/100`)}
                                                    />
                                                </span>
                                                <span>(100 words) 📝</span>
                                            </p>
                                            <p className="d-flex justify-content-between">
                                                <span>GET</span>
                                                <span className="d-flex align-items-center gap-2">
                                                    <a href={`${mainUrl}/text/1000`} target="_blank">/text/1000</a>
                                                    <FaRegCopy
                                                        size={14}
                                                        className="mt-1"
                                                        style={{ cursor: "pointer" }}
                                                        color="#222222"
                                                        title="Copy"
                                                        onClick={() => copyText(`${mainUrl}/text/1000`)}
                                                    />
                                                </span>
                                                <span>(1000 words) 🔗</span>
                                            </p>
                                            <p className="d-flex justify-content-between">
                                                <span>GET</span>
                                                <span className="d-flex align-items-center gap-2">
                                                    <a href={`${mainUrl}/text/10000`} target="_blank">/text/10000</a>
                                                    <FaRegCopy
                                                        size={14}
                                                        className="mt-1"
                                                        style={{ cursor: "pointer" }}
                                                        color="#222222"
                                                        title="Copy"
                                                        onClick={() => copyText(`${mainUrl}/text/10000`)}
                                                    />
                                                </span>
                                                <span>(10000 words) 📌</span>
                                            </p>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>

                            {/* Line image */}
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
    );
}
