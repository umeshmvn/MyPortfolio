import React, { useEffect, useRef, useState } from "react";
import styles from "./Hero.module.css";
import "font-awesome/css/font-awesome.min.css";
import Typed from "typed.js";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  const typedRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    const options = {
      strings: ["Python Developer", "Data Engineer", "Data Analyst"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);
  // Define an array of image paths
  const images = [
    "hero/web_dev_bg.png",
    "hero/heroImage.jpg",
    "hero/dataAnalyst2.jpg",
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000); // Change image every 1 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h3 className={styles.title}>
          <p style={{ display: "inline" }}>Hi, I'm</p>
          <h3
            className={styles.nameContainer}
            style={{ display: "inline", marginLeft: "5px" }}
          >
            Venkata Munagala
          </h3>
          <br />
          <h4 className={styles.roles}>
            <span ref={typedRef}></span>
          </h4>
        </h3>
        <br />
        <p className={styles.description}>
          Experienced in developing efficient,scalable Python applications &
          leveraging over <br />
          3 years in business strategy & analytics across Solar,Financial
          Services,Automotive, <br />
          Healthcare industries. Proficient in Business Intelligence, Data
          Mining,Forecasting, <br />
          SAP ERP systems, with a strong skill set in managing data pipelines
          and optimizing workflows for impactful insights.
        </p>
        {/* <div className={styles.iconContainer}>
          
          <i className="fa fa-google" id="gmail"></i>
          <i className="fa fa-linkedin" id="linkedin"></i>
          <i className="fa fa-github-square" id="github"></i>
          <i className="fa fa-file" id="resume"></i>
        </div> */}
        <div className={styles.iconContainer}>
          <a
            href="mailto:umeshmvn99@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
          >
            <i className="fa fa-google" id="gmail"></i>
          </a>
          <a
            href="https://linkedin.com/in/venkatamunagalaumesh/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <i className="fa fa-linkedin" id="linkedin"></i>
          </a>
          <a
            href="https://github.com/umeshmvn"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <i className="fa fa-github-square" id="github"></i>
          </a>
          <a
            href="https://drive.google.com/file/d/1kSNzWgxprxwfgqOlTqRQ9ezry2LUuXDf/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Resume"
          >
            <i className="fa fa-file" id="resume"></i>
          </a>
        </div>
      </div>
      {/* Render multiple images */}
      <div className={styles.imagesContainer}>
        <img
          src={getImageUrl(images[currentImageIndex])}
          alt={`Hero image ${currentImageIndex + 1}`}
          className={styles.heroImg}
        />
      </div>
      {/* <img
        src={getImageUrl("hero/web_dev_bg.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      /> */}
      {/* <video
        src={getImageUrl("hero/Hero.mp4")}
        className={styles.heroVideo}
        autoPlay
        loop
        muted
        playsInline
      /> */}

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
