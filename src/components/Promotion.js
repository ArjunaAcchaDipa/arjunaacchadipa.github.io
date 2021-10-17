import React from "react"
import Fade from "react-reveal/Fade"

const Promotion = () => {
  return (
    <div className="section">
      <div className="container" id="promotion">
        <div className="promotion-container">
          <Fade bottom cascade>
            <h1>Organizational Experience</h1>
          </Fade>
          <section id="resume" class="resume">
            <div class="container" data-aos="fade-up">
              <div class="row">
                <div class="col-lg-6">
                  <h2 class="resume-title">BINUS Square Student Committee</h2>
                  <div class="resume-item">
                    <h4>Manager of Culture Division BSSC 11th Presidency</h4>
                    <h5>Oct 2020 - Oct 2021</h5>
                    <ul>
                      <li>Manage and guide Culture division of 8 staffs.</li>
                      <li>Making events together to increase boarders' knowledge about the culture around the world.</li>
                      <li>Provide the materials needed by the staff.</li>
                    </ul>
                  </div>
                  <div class="resume-item">
                    <h4>Staff of Culture Division BSSC 10th Presidency</h4>
                    <h5>Oct 2019 - Oct 2020</h5>
                    <ul>
                      <li>Connecting between foreign and local borders to interact with each other.</li>
                      <li>Informing Indonesian culture abroad and vice versa.</li>
                    </ul>
                  </div>
                </div>
                <div class="col-lg-6">
                  <h3 class="resume-title">Cyber Security Community</h3>
                  <div class="resume-item">
                    <h4>Staff of Education Division</h4>
                    <h5>Mar 2021 - Present</h5>
                    <ul>
                      <li>Making article about cyber and post it in Student Club &amp; Activity Center website.</li>
                      <li>Making Instagram post about cyber geeks (cyber tools).</li>
                      <li>Making YouTube videos about cyber</li>
                      <li>Handle the Cyber Class event</li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Promotion
