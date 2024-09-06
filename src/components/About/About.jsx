import React, { useState, useEffect } from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
import GaugeChart from "./GaugeChart";

const Counter = ({ end, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const endValue = parseInt(end);
    const duration = 4000; // Duration of the animation in milliseconds
    const incrementTime = Math.ceil(duration / endValue);

    const incrementCounter = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= endValue) {
        clearInterval(incrementCounter);
      }
    }, incrementTime);

    return () => clearInterval(incrementCounter);
  }, [end]);

  return (
    <div className={styles.statItem}>
      <div className={styles.statNumber}>
        {count}
        {end.endsWith("+") && "+"}
      </div>
      <div className={styles.statLabel}>{label}</div>
    </div>
  );
};
export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutDAImage.webp")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        {/* <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and optimised back-end systems
                and APIs
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I have designed multiple landing pages and have created design
                systems as well
              </p>
            </div>
          </li>
        </ul> */}
        <div className={styles.aboutcontent}>
          <p>
            ⚡️Data Analyst with Masters’ in Computer Science and progressive
            experience in analyzing and interpreting high volumes of data to
            unveil the hidden trends in Healthcare, Education, Automotive, and
            Banking sectors across the globe. I have an aptitude for critical
            thinking in complex situations and the ability to synthesize
            ambiguous data into concrete results.
            <br />
            <br />
            ⚡️I Strongly believe in demonstrating leadership to drive results
            in every feasible way. It is with this approach, I have always been
            the first one to step up in identifying issues, execute my ideas,
            communicate the impact of my strategy to the Management & team, and
            deliver the projects in time, with high standards to provide
            comprehensive solutions for the business environment.
            <br />
            <br />
            ⚡️My Experience as Data Analyst has taught me that the best way to
            lead, is to serve. Having achieved all that I have accomplished, I
            now reflect on my principles of “Thinking Big” and being “Curious”
            and apply my skills to perform prescriptive analysis and provide
            innovative recommendations to solve business challenges.
          </p>
          <br />
          <br />

          <h2 className={styles.guageTitle}>My Experience Metrics</h2>
          <div className={styles.guagelabel}>
            <GaugeChart value={3.5} label="Years of Experience" maxValue={5} />
            <GaugeChart value={4} label="Major Internships" maxValue={5} />
            <GaugeChart value={10} label="Technical Projects" maxValue={10} />
          </div>
        </div>
      </div>
    </section>
  );
};
