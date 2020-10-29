import React from "react";
import Layout from "../components/Layout";
import { Link } from "gatsby";
import SEO from "../components/SEO";

const Error = () => {
  return (
    <Layout>
      <SEO title="404 page" description="There has been an error"/>
      <main className="error-page">
        <div className="error-container">
          <h1>
            Oh no, you've hit a{" "}
            <span style={{ fontStyle: "italic" }}>DEAD</span> end!
          </h1>
          <Link to="/" className="btn">
            Back to safety
          </Link>
        </div>
      </main>
    </Layout>
  );
};

export default Error;
