import React from "react";

import styles from "./Education.module.css";
import { getImageUrl } from "../../utils";

export const Education = () => {
  return (
    <section className={styles.container} id="education">
      <h2 className={styles.title}>Education</h2>
      <div className={styles.content}>
        <div className={styles.timelineItems}>
          <div className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>
            <div className={styles.timelineDate}>2023-2024</div>
            <div className={styles.timelineContent}>
              <h3>Master of Science in Computer Science</h3>
              <h3>University of Central Florida</h3>
              <p>
                Coursework : Data Analytics, Machine Learning, Computer Vision,
                Data Science, Artificial Intelligence, Business
                Analytics,Database Management, Algorithms.
              </p>
            </div>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>
            <div className={styles.timelineDate}>2018-2022</div>
            <div className={styles.timelineContent}>
              <h3>Bachelors in Electronics & Communications Engineering</h3>
              <h3>Jawaharlal Nehru Technological University</h3>
              <p>
                Coursework :Data Analysis, signal processing, system design,
                data analytics, data engineering, Python, advanced data
                technologies.
              </p>
            </div>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>
            <div className={styles.timelineDate}>2022</div>
            <div className={styles.timelineContent}>
              <h3>Microsoft Azure Certification</h3>
              <h3>Certificate Id: I383-8781</h3>
              <p>
                Azure Virtual Machines (VMs), Storage Accounts, Azure Networking
                (VNet, VPN), Azure Active Directory (Azure AD), Azure App
                Services, Azure Security (Security Center, Key Vault)
              </p>
            </div>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>
            <div className={styles.timelineDate}>2021</div>
            <div className={styles.timelineContent}>
              <h3>Data Science Issued by: Johns Hopkins University</h3>
              <h3>Certificate Id: SXUTQW7Q2L94</h3>
              <p>
                R Programming, Python, Data Wrangling (dplyr, tidyr), Data
                Visualization (ggplot2, Matplotlib), Statistical Inference,
                Machine Learning (caret, scikit-learn)
              </p>
            </div>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>
            <div className={styles.timelineDate}>2021</div>
            <div className={styles.timelineContent}>
              <h3>
                Neural Networks and Deep Learning Issued by deeplearning.ai
              </h3>
              <h3>Certificate Id: MHDV725LZ3R7</h3>
              <p>
                Python, TensorFlow, Keras, NumPy, Matplotlib,Optimization
                Algorithms (Gradient Descent, Adam), Activation Functions (ReLU,
                Sigmoid)
              </p>
            </div>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>
            <div className={styles.timelineDate}>2019</div>
            <div className={styles.timelineContent}>
              <h3>Python Programming Issued by: Indian Servers</h3>
              <p>
                Python Core (Syntax, Data Structures, Control Flow),
                Object-Oriented Programming (OOP), Python Libraries (Pandas,
                NumPy, Matplotlib), Web Development (Flask, Django), Database
                Integration (SQL, SQLite, PostgreSQL), APIs and Web Services
                (REST, JSON)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
