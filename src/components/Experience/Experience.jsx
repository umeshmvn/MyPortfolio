import React, { useState, useEffect, useRef } from "react";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const getSkillWidth = (title) => {
    if (title === "Python") {
      return "100%";
    } else if (title === "Tableau") return "97%";
    else if (title === "MYSQL") return "94%";
    else if (title === "AZURE") return "91%";
    else if (title === "PySpark") return "88%";
    else if (title === "JIRA") return "85%";
    else if (title === "PowerBI") return "82%";
    else if (title === "Hadoop") return "79%";
    else if (title === "R") return "76%";
    else if (title === "Java") return "73%";
    else if (title === "NumPy") return "70%";
    else if (title === "OpenCV") return "67%";
    else if (title === "Scala") return "64%";
    else if (title === "Git") return "61%";
  };

  return (
    <>
      <section className={styles.container} id="experience">
        <h2 className={styles.title}>Experience</h2>
        <div className={styles.content}>
          <ul className={styles.history}>
            {history.map((historyItem, id) => {
              return (
                <li key={id} className={styles.historyItem}>
                  <div className={styles.historyItemDetails}>
                    <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                    <div className={styles.timelineDot}></div>
                    <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                    <ul>
                      {historyItem.experiences.map((experience, id) => (
                        <li key={id}>{experience}</li>
                      ))}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className={styles.container} id="skills" ref={ref}>
        <h2 className={styles.title}>Skills</h2>
        <div className={styles.skillsContainer}>
          {skills.map((skill, id) => (
            <div key={id} className={styles.skillBar}>
              <div className={styles.skillImageContainer}>
                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
              </div>
              <div className={styles.skillBarContent}>
                <p>{skill.title}</p>
                <div
                  className={`${styles.skillLevel} ${
                    visible ? styles.animate : ""
                  }`}
                  style={{ width: getSkillWidth(skill.title) }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Experience;
