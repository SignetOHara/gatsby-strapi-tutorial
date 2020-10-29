import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

const contact = () => {
  return (
    <Layout>
      <SEO title="My contact page" description="My contact details" />
      <section className="contact-page">
        <article className="contact-form">
          <h3>get in touch</h3>
          <form action="https://formspree.io/f/mzbkgzgd" method="POST">
            <div className="form-group">
              <input
                type="text"
                placeholder="name"
                name="name"
                className="form-control"
              />
              <input
                type="email"
                name="email"
                placeholder="email"
                className="form-control"
              />
              <textarea
                name="message"
                rows="5"
                placeholder="message"
                className="form-control"
              />
            </div>
            <button type="submit" className="submit-btn btn">
              Send
            </button>
          </form>
        </article>
      </section>
    </Layout>
  );
};

export default contact;
