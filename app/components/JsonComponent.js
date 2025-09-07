"use client";
import { Container, Row, Col, Button } from "react-bootstrap";
import line from "./../images/line.png"
import Image from "next/image";
import DataRendererObj from "./DataRenderer";
import { useState } from "react";
import { FaRegCopy } from "react-icons/fa";

export default function JsonComponent() {

    const mainUrl = process.env.NEXT_PUBLIC_API_URL || "";
    const [isLoading, setIsLoading] = useState(false);
    const [todo, setTtodo] = useState(null);

    const getPost = () => {
        if (todo || isLoading) {
            return false;
        }
        setIsLoading(true);
        fetch(`${mainUrl}/todos/1`)
            .then(response => response.json())
            .then(json => setTtodo(json)).finally(() => {
                setIsLoading(false);
            })
    }

    const copyText = async (text) => {
        if (!text) return false;
        try {
            await navigator.clipboard.writeText(text);
        } catch (error) {
            console.error(error.message);
        }
    }

    return <section id="json" className="portfolio_section">
        <Container className="heading_container">
            <Row>
                <Col sm={12}>
                    <Row className="gap-3">
                        <Col sm={12}>
                            <h2 className="mb-3 text-center">
                                <span>{"{"}&nbsp;</span>JSON<span>&nbsp;{"}"}</span>
                            </h2>
                            <p className="text-center">
                                JSON (JavaScript Object Notation) is the most widely used format for exchanging data between clients and servers. With our API, you can instantly fetch structured JSON data such as users, todos, or posts — perfect for testing applications, building prototypes, or showcasing API-driven workflows.
                            </p>
                        </Col>
                        <Col sm={12} >
                            <div className="text-start mt-2">
                                <h3>Try it</h3>
                                <p className="mb-0">Run this snippet directly in your browser console or inside any project to see how the API responds:</p>
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
                                                copyText(`fetch("${mainUrl}/todos/1").then(response => response.json()).then(data => console.log(data))`)
                                            }
                                        />
                                        <span className="d-block">
                                            <span className="text-warning">fetch</span>("{mainUrl}/todos/1")
                                        </span>
                                        <span className="d-block ms-5">
                                            .<span className="text-warning">then</span>(response =&gt; response.<span className="text-warning">json</span>())
                                        </span>
                                        <span className="d-block ms-5">
                                            .<span className="text-warning">then</span>(data =&gt; console.<span className="text-warning">log</span>(data))
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <Button variant="warning" className="text-white px-4" onClick={getPost}>
                                Run Script
                            </Button>
                        </Col>
                        <Col sm={12}>
                            <div>
                                <div className="shadow">
                                    <div className="bg-dark rounded py-3 py-md-4 px-4 px-md-5 text-white text-start code position-relative  overflow-hidden">
                                        {
                                            todo ?
                                                <FaRegCopy
                                                    className="copy-icon"
                                                    size={20}
                                                    title="Copy"
                                                    onClick={() => copyText(JSON.stringify(todo))}
                                                />
                                                : null
                                        }
                                        <DataRendererObj data={todo} />
                                    </div>
                                </div>
                                {
                                    todo ?
                                        <div className="text-start mt-3">
                                            <p>🎉 Great job! You’ve successfully fetched structured JSON data from the API! 🚀</p>
                                        </div>
                                        : null
                                }
                            </div>
                        </Col>

                        <Col sm={12}>
                            <div className="text-start">
                                <h3>When to use</h3>
                                <p>
                                    Use this endpoint whenever you need mock JSON data for testing, tutorials, or sample projects. It’s especially useful for demonstrating how APIs work, creating frontend prototypes, or simulating real-world data in a safe environment.
                                </p>
                            </div>
                        </Col>

                        <Col sm={12}>
                            <div className="text-start">
                                <h3>Resources</h3>
                                <p>
                                    Below are some example endpoints you can explore and integrate into your projects:
                                </p>
                                <Row>
                                    <Col lg={4} md={6}>
                                        <p className="d-flex justify-content-between">
                                            <span>GET</span>
                                            <span className="d-flex align-items-center gap-2">
                                                <a href={`${mainUrl}/users`} target="_blank">/users</a>
                                                <FaRegCopy
                                                    size={14}
                                                    className="mt-1"
                                                    style={{ cursor: "pointer" }}
                                                    color="#222222"
                                                    title="Copy"
                                                    onClick={() => copyText(`${mainUrl}/users`)}
                                                />
                                            </span>
                                            <span>(10 users) 👤</span>
                                        </p>
                                        <p className="d-flex justify-content-between">
                                            <span>GET</span>
                                            <span className="d-flex align-items-center gap-2">
                                                <a href={`${mainUrl}/users/1`} target="_blank">/users/1</a>
                                                <FaRegCopy
                                                    size={14}
                                                    className="mt-1"
                                                    style={{ cursor: "pointer" }}
                                                    color="#222222"
                                                    title="Copy"
                                                    onClick={() => copyText(`${mainUrl}/users/1`)}
                                                />
                                            </span>
                                            <span>(1 user) ✅</span>
                                        </p>
                                        <p className="d-flex justify-content-between">
                                            <span>GET</span>
                                            <span className="d-flex align-items-center gap-2">
                                                <a href={`${mainUrl}/todos`} target="_blank">/todos</a>
                                                <FaRegCopy
                                                    size={14}
                                                    className="mt-1"
                                                    style={{ cursor: "pointer" }}
                                                    color="#222222"
                                                    title="Copy"
                                                    onClick={() => copyText(`${mainUrl}/todos`)}
                                                />
                                            </span>
                                            <span>(20 todos) 📝</span>
                                        </p>
                                        <p className="d-flex justify-content-between">
                                            <span>GET</span>
                                            <span className="d-flex align-items-center gap-2">
                                                <a href={`${mainUrl}/todos/1`} target="_blank">/todos/1</a>
                                                <FaRegCopy
                                                    size={14}
                                                    className="mt-1"
                                                    style={{ cursor: "pointer" }}
                                                    color="#222222"
                                                    title="Copy"
                                                    onClick={() => copyText(`${mainUrl}/todos/1`)}
                                                />
                                            </span>
                                            <span>(1 todo) 📄</span>
                                        </p>
                                        <p className="d-flex justify-content-between">
                                            <span>GET</span>
                                            <span className="d-flex align-items-center gap-2">
                                                <a href={`${mainUrl}/posts`} target="_blank">/posts</a>
                                                <FaRegCopy
                                                    size={14}
                                                    className="mt-1"
                                                    style={{ cursor: "pointer" }}
                                                    color="#222222"
                                                    title="Copy"
                                                    onClick={() => copyText(`${mainUrl}/posts`)}
                                                />
                                            </span>
                                            <span>(20 posts) 📌</span>
                                        </p>
                                        <p className="d-flex justify-content-between">
                                            <span>GET</span>
                                            <span className="d-flex align-items-center gap-2">
                                                <a href={`${mainUrl}/posts/1`} target="_blank">/posts/1</a>
                                                <FaRegCopy
                                                    size={14}
                                                    className="mt-1"
                                                    style={{ cursor: "pointer" }}
                                                    color="#222222"
                                                    title="Copy"
                                                    onClick={() => copyText(`${mainUrl}/posts/1`)}
                                                />
                                            </span>
                                            <span>(1 post) 🔗</span>
                                        </p>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col>
                            <div className="d-flex justify-content-center">
                                <Image src={line} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </section>
}
