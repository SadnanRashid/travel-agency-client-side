import React from "react";

export default function Blogs() {
  return (
    <div className="font-light fw-bold">
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Difference between SQL and NoSQL?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              When it comes to choosing a database the biggest decisions is
              picking a relational (SQL) or non-relational (NoSQL) data
              structure. SQL has been around for over 40 years, so it is
              recognizable, documented, and widely-used. The dynamic schemata of
              NoSQL databases allow representation of alternative structures,
              often alongside each other, encouraging greater flexibility. When
              it comes to choosing a database the biggest decisions is picking a
              relational (SQL) or non-relational (NoSQL) data structure. NoSQL
              databases need not stick to this format. At a high level, SQL and
              NoSQL comply with separate rules for resolving transactions.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              What is JWT, and how does it work?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              JSON Web Token (JWT) is an open standard (RFC 7519) for securely
              transmitting information between parties as JSON object. It is
              compact, readable and digitally signed using a private key/ or a
              public key pair. <br /> JWTs differ from other web tokens in that
              they contain a set of claims. Claims are used to transmit
              information between two parties. A JWT is a string made up of
              three parts, separated by dots (.), and serialized using base64.{" "}
              <br /> Once decoded, you will get two JSON strings: <br /> The
              header and the payload. <br /> The signature.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              What is the difference between javascript and NodeJS?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              JavaScript is a client-side scripting language that is
              lightweight, cross-platform, and interpreted. Node.js, on the
              other hand, is a V8-based server-side programming language. <br />
              Javascript can only be run in the browsers. We can run Javascript
              outside the browser with the help of NodeJS. <br />
              JS is basically used on the client-side. Node is mostly used on
              the server-side.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              How does NodeJS handle multiple requests at the same time?
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Node.Js does use threads behind the scenes to perform I/O
              operations. Incoming requests will go on a queue and be processed
              sequentially in the main loop. A interrupt handler, poll point in
              the loop, or a separate thread will accept incoming requests and
              append them to the queue as they arrive. <br /> The main loop will
              accept requests as they arrive and spawn a child thread to deal
              with it. This way NodeJS handles multiple request at a same time.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
