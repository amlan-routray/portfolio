import React from "react";

const Features = () => {
  const carouselRef = React.useRef(null);
  const [scrollPosition, setScrollPosition] = React.useState({
    isAtStart: true,
    isAtEnd: false,
  });

  React.useEffect(() => {
    const carousel = carouselRef.current;

    const handleScroll = () => {
      if (carousel) {
        const { scrollLeft, scrollWidth, clientWidth } = carousel;
        const isAtStart = scrollLeft === 0;
        const isAtEnd = scrollLeft + clientWidth >= scrollWidth - 1; //subtracting 1 to account for tiny rounding errors

        setScrollPosition({ isAtStart, isAtEnd });
      }
    };

    if (carousel) {
      carousel.addEventListener("scroll", handleScroll);
      handleScroll(); // Initial check on mount

      return () => {
        carousel.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  const scrollBy = (amount) => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    scrollBy(480);
  };

  const scrollLeft = () => {
    scrollBy(-480);
  };

  return (
    <section id="features" className="features">
      <h2>
        features<span>delivered</span>
      </h2>
      <p>
        Explore a collection of features I’ve built while working with
        industry-leading clients like Postnord, Sainsbury’s, and Victoria’s
        Secret. From scalable e-commerce solutions to high-performance web
        applications, this section highlights key functionalities, seamless user
        experiences, and impactful designs that I’ve contributed to.
      </p>
      <div className="carousel-container">
        <div className="carousel" ref={carouselRef}>
          <img
            alt="Showcase Picture Victoria's Secret"
            src="victoriassecret-showcase-0.jpeg"
          />
          <img
            alt="Showcase Picture Victoria's Secret"
            src="victoriassecret-showcase-1.jpeg"
          />
          <img
            alt="Showcase Picture Sainsburys"
            src="sainsburys-showcase-0.jpeg"
          />
          <img
            alt="Showcase Picture Sainsburys"
            src="sainsburys-showcase-1.jpeg"
          />
          <img
            alt="Showcase Picture Sainsburys"
            src="sainsburys-showcase-2.jpeg"
          />
          <img alt="Showcase Picture Postnord" src="postnord-showcase-0.jpeg" />
        </div>
        {!scrollPosition.isAtStart && (
          <button className="left-arrow" onClick={scrollLeft}>{`<`}</button>
        )}
        {!scrollPosition.isAtEnd && (
          <button className="right-arrow" onClick={scrollRight}>{`>`}</button>
        )}
      </div>
    </section>
  );
};

export default Features;
