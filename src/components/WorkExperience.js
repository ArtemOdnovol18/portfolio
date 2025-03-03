import React, { useState } from "react";
import contentData from "../content.json";
import { Fade } from "react-awesome-reveal";
import ReactMarkdown from "react-markdown";



const WorkExperience = () => {
  const { experience } = contentData;
  const experienceItems = experience.experience_items;

  const [activeJobIndex, setActiveJobIndex] = useState(0);

  const handleTabClick = (index) => {
    setActiveJobIndex(index);
  };

  return (
    <Fade triggerOnce={true}>
      <section className="Experience-section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a" id="experience">
                  {experience.section.title}
                  <div className="line-mf"></div>
                </h3>
                <p className="subtitle-a">
                  <ReactMarkdown>
                    {experience.section.description}
                  </ReactMarkdown>
                </p>
              </div>
            </div>
          </div>

          <div className="col-sm-12">
            <div className="wrapper">
              <Fade triggerOnce={true}>
                <ul className="indicator">
                  {experienceItems.map((job, index) => (
                    <li
                      key={index}
                      className={index === activeJobIndex ? "active" : ""}
                      onClick={() => handleTabClick(index)}
                      data-target={job.organization.split(" ").join("-")}
                    >
                      {job.organization}
                    </li>
                  ))}
                </ul>
              </Fade>
              <div className="content">
                <h1>
                  {experienceItems[activeJobIndex].title} @{" "}
                  {experienceItems[activeJobIndex].organization}
                </h1>
                <h4>
                  {experienceItems[activeJobIndex].start_date} -{" "}
                  {experienceItems[activeJobIndex].end_date}
                </h4>
                <Fade damping={0.1} triggerOnce={true}>
                  <ul>
                    {experienceItems[activeJobIndex].description.map(
                      (paragraph, paraIndex) => (
                        <li className="active" key={paraIndex}>
                          {paragraph}
                        </li>
                      )
                    )}
                  </ul>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
};

export default WorkExperience;
