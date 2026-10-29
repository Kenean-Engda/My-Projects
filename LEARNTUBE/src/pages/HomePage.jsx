import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  const topics = [
    {
      title: "HTML",
      description: "Master web structure and semantic markup.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3Kr9mCLSejBy4-_aO2tZrlsRtQ6vgbcmQpiMeUr07JA&s=10",
    },
    {
      title: "CSS",
      description: "Style modern layouts with Flexbox and Grid.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWHpLTiPq0E7Ho9tyLWyimAHinlG-oE2x0sY4HSy8_0Q&s=10",
    },
    {
      title: "JavaScript",
      description: "Learn core logic, ES6 syntax, and DOM manipulation.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJUFZIpJVOfbAc4JEm70fKPaZFVAWH1xVi3cbIHYxGGA&s=10",
    },
    {
      title: "React",
      description: "Build dynamic UI applications with components.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdPrbR7P9EIt-EDwm678WscDlSKdEvSJSAhg2YyhD28g&s=10",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % topics.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [topics.length]);

  return (
    <main>
      <header className="header-sec">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9HwMX_FX2idNZMZZOeQIbvil1YyDitxEhOa26pRm-Zg&s=10"
          alt="LearnTube Header"
          className="image"
        />
        <div className="the-div">
          <h1 className="title">LearnTube - Learn without limits</h1>
          <p className="parag">
            The ultimate distraction-free platform designed to help you master
            modern web development.
          </p>
        </div>
      </header>

      <section className="sec">
        <div className="the-div">
          <h2 className="parag">
            <strong>Featured Topics</strong>
          </h2>
          <p className="parag"> Start with core web engineering tracks</p>
        </div>

        <div className="slider">
          <img
            src={topics[currentIndex].img}
            alt={topics[currentIndex].title}
            className="slider-image"
          />

          <div className="slider-dots">
            {topics.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`slider-dot ${idx === currentIndex ? "slider-dot-active" : ""}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <h2 className="title">Start Your Web Development Journey Today</h2>
        <p className="the div">
          Take the first step toward mastering HTML, CSS, JavaScript, and React.
        </p>
        <Link to="/catalog" className="btn-main">
          Start Now
        </Link>
      </section>
    </main>
  );
}
