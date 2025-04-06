import React from "react";
import { isLargeViewport } from "../utility";

const About = () => {
  const [nameSize, setNameSize] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      if (nameSize < 5) setNameSize((prev) => prev + 1);
    }, 400);
    if (nameSize === 5) clearInterval(interval);
    return () => clearInterval(interval);
  }, []);
  const NAME = "amlan";
  return (
    <section className={isLargeViewport() ? "" : "mobile"} id="about">
      <h1>
        hi there{isLargeViewport() ? <br />:', '}
        i'm
        <br />
        <span>{NAME.substring(0, nameSize)}</span>
      </h1>
      <div className="profile-photo-container">
        <div />
        <img alt="profile photo" src="profile-picture.png" />
      </div>
      <div className="description">
        <h2>about me</h2>
        <p>
          Experienced front-end React developer with a passion for crafting
          responsive and intuitive user interfaces. Proficient in modern web
          technologies and adept at collaborating with cross-functional teams to
          deliver exceptional user experiences.
        </p>
      </div>
    </section>
  );
};

export default About;
