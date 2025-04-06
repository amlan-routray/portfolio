const Contact = () => {
  const onContactFormSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    fetch(
      "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdi3IvZ8BEBDRZVj_RD65qhnvorRD46udZG3HKWPqZOO-s7PA/formResponse",
      {
        method: "POST",
        mode: "no-cors",
        body: formData,
      }
    ).then(() => {
      alert("🚀 Message received! We'll be in touch soon.");
      form.reset();
    });
  };
  return (
    <section id="contact">
      <h2>
        say hello<span>to connect</span>
      </h2>
      <p>
        Let’s connect! Reach out for collaborations, opportunities, or any
        inquiries.
      </p>
      <form onSubmit={onContactFormSubmit}>
        <h2>get in touch</h2>
        <input type="text" placeholder="name" name="entry.684948109" />
        <input type="email" placeholder="email" name="entry.141772362" />
        <input type="text" placeholder="message" name="entry.1016598731" />
        <input type="submit" value="send message" />
      </form>
      <div className="social">
        <a
          href="https://www.linkedin.com/in/amlanroutray/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit my LinkedIn page"
        >
          <img alt="linkedin link" src="linkedin.svg" />
        </a>
        <a
          href="https://www.instagram.com/amlan.jr/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit my Instagram page"
        >
          <img alt="instagram link" src="instagram.svg" />
        </a>
        <a
          href="https://x.com/amlan_tsx"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit my Twitter page"
        >
          <img alt="twitter link" src="twitter.svg" />
        </a>
        <a
          href="https://github.com/amlan-routray"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit my Github page"
        >
          <img alt="github link" src="github.svg" />
        </a>
      </div>
    </section>
  );
};

export default Contact;
