const Skills = () => {
  return (
    <section
      id="skills"
      className="skills"
    >
      <h2>
        skills<span>good at</span>
      </h2>
      <p>
        With 5+ years of web development expertise, I specialize in React,
        TypeScript, JEST, Sass, and HTML. I craft dynamic and responsive web
        applications using React, ensuring code quality and maintainability with
        TypeScript. My experience with JEST guarantees reliable testing. Plus,
        my design sensibility shines through with Sass and HTML, creating
        visually captivating and accessible user interfaces.
      </p>
      <div className="skill-box">
        <div className="skill-card">
          <div className="skill-highlighter">
            <img alt="react js logo" src="react.svg" />
            <h3>react JS</h3>
          </div>
          <div>
            <h4>5+</h4>
            <p>years of experience</p>
          </div>
        </div>
        <div className="skill-card">
          <div className="skill-highlighter">
            <img alt="typescript logo" src="typescript.svg" />
            <h3>typescript</h3>
          </div>
          <div>
            <h4>99%</h4>
            <p>type-safe code</p>
          </div>
        </div>
        <div className="skill-card">
          <div className="skill-highlighter">
            <img alt="sass logo" src="sass.svg" />
            <h3>sass</h3>
          </div>
          <div>
            <h4>3</h4>
            <p>clients served worldwide</p>
          </div>
        </div>
        <div className="skill-card">
          <div className="skill-highlighter">
            <img alt="jest logo" src="jest.svg" />
            <h3>jest</h3>
          </div>
          <div>
            <h4>50+</h4>
            <p>features tested</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
