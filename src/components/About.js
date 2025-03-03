import React from "react";
import aboutMeJson from "../content.json";
import { Fade } from "react-awesome-reveal";
import ReactMarkdown from "react-markdown";





const AboutMe = () => {
  const aboutMe = aboutMeJson.about_me;

  const firstHalf = aboutMe.skills.slice(0, aboutMe.skills.length);
  

  return (
    <Fade triggerOnce={true}>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box">
                <h3 className="title-a" id="aboutme">
                  {aboutMe.section.title} <div className="line-mf"></div>
                </h3>
                <p className="subtitle-a">
                  <ReactMarkdown>{aboutMe.section.description}</ReactMarkdown>
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="row">
                <div className="col-md-6">
                  {aboutMe.bio.map((paragraph, index) => (
                    <Fade
                      delay={index * 100}
                      cascade={false}
                      triggerOnce={true}
                    >
                      <p class="about-me-desc" key={index}>
                        {paragraph}
                      </p>
                    </Fade>
                  ))}
                  <p className="about-me-desc">{aboutMe.skills_caption}</p>
                  
                  <div className="languages-list">
                    
                  <ul>
  {firstHalf.map((skill, index) => (
    <Fade
      delay={index * 200}
      cascade={false}
      triggerOnce={true}
    >
      <li key={index} style={{ fontSize: '20px' }}>
        {skill}
      </li><br />
    </Fade>
  ))}
</ul>
                    
                    
                  </div>
                  
                </div>
                <div className="col-md-6">
                  <Fade direction="up" triggerOnce={true}>
                    <a
                      href={aboutMe.headShotUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="col-6-img-a"
                    >
                      <img
                        src={aboutMe.headShotUrl}
                        alt=""
                        className="myportrait"
                      ></img>
                    </a>
                  </Fade>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
};

export default AboutMe;
