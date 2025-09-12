"use client"
import React, { useState, useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";

const ScrollTop = () => {
	const [visible, setVisible] = useState(false);

	const onVisible = () => {
		const scrolled = document.documentElement.scrollTop;
		if (scrolled > 200) setVisible(true);
		else if (scrolled <= 300) setVisible(false);
	};

	const onScroll = () => {
		if (typeof window === "object") {
			window.scrollTo({ top: 0, behavior: "smooth" });
		}
	};

	useEffect(() => {
		if (typeof window === "object") {
			window.addEventListener("scroll", onVisible);
		}
		return () => {
			window.removeEventListener("scroll", onVisible);
		};
	}, []);

	return (
		<>
			{visible && (
				<div className="scroll-top" onClick={onScroll}>
					<IoIosArrowUp color="#fff" size={30} />
				</div>
			)}
		</>
	);
};

export default ScrollTop;
