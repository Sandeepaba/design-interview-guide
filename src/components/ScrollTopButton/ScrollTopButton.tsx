import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./ScrollTopButton.css";

export default function ScrollTopButton() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setShow(window.scrollY > 500);
        });
    }, []);

    return (
        <button
            className={`top-btn ${show ? "show" : ""}`}
            onClick={() =>
                window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                })
            }
        >
            <FaArrowUp />
        </button>
    );
}