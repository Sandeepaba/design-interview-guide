import { useEffect, useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import "./Navbar.css";

const chapters = [
  "Chapter 1",
  "Chapter 2",
  "Chapter 3",
  "Chapter 4",
  "Chapter 5",
  "Chapter 6",
  "Chapter 7",
  "Chapter 8",
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(true);

  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const current = window.scrollY;

      setShow(current < lastScroll || current < 100);

      lastScroll = current;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToChapter = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setOpen(false);
  };

  return (
    <>
      <nav className={`navbar ${show ? "" : "hide"}`}>
        <button className="menu-btn" onClick={() => setOpen(true)}>
          <HiOutlineMenuAlt3 />
        </button>

        <div className="nav-links">
          {chapters.map((chapter, index) => (
            <button
              key={index}
              onClick={() => scrollToChapter(`chapter${index + 1}`)}
            >
              {chapter}
            </button>
          ))}
        </div>
      </nav>

      <div className={`mobile-menu ${open ? "active" : ""}`}>
        <button className="close-btn" onClick={() => setOpen(false)}>
          <RxCross2 />
        </button>

        {chapters.map((chapter, index) => (
          <button
            key={index}
            onClick={() => scrollToChapter(`chapter${index + 1}`)}
          >
            {chapter}
          </button>
        ))}
      </div>
    </>
  );
}