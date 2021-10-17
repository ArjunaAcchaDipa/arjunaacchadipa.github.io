import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"
import scrollTo from "gatsby-plugin-smoothscroll"

const Header = () => {
  return (
    <div className="section" id="home">
      <div className="container">
        <div className="header-wrapper">
          <Fade bottom>
            <h1>
              Hi, I'm {data.name}{" "}
              <span role="img" aria-label="Emoji">
                👋
              </span>
            </h1>
          </Fade>
          <Fade bottom cascade>
            <div className="heading-wrapper">
              <h1>
                {data.headerTagline[0]
                  ? data.headerTagline[0]
                  : "Cyber Security"}
              </h1>
              <h1>
                {" "}
                {data.headerTagline[1]
                  ? data.headerTagline[1]
                  : "Undergraduate"}
              </h1>
              <h1>
                {" "}
                {data.headerTagline[2]
                  ? data.headerTagline[2]
                  : "Student"}
              </h1>
            </div>
          </Fade>
          <Fade bottom>
            <p>{data.headerParagraph}</p>
          </Fade>
          <Fade bottom>
            <a
              // href={`mailto:${
              //   data.contactEmail ? data.contactEmail : "arjuna.dipa@binus.ac.id"
              // }`}
              onClick={() => scrollTo("#contact")}
              className="primary-btn"
            >
              Connect With Me
            </a>
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default Header
