import React, { useState, useEffect } from "react";
import styles from "../../styles/About.module.scss";
import Titles from "../Titles";
import Image from "next/image";
import Avatar from "@/public/photos/moi.gif";
import { motion } from "framer-motion";

function About() {
  const aboutSkills = [
    {
      name: "HTML5 / CSS3 / Bootstrap 5",
      lvl: 50,
      bgColor: "rgb(108, 108, 229)",
    },
    {
      name: "JavaScript",
      lvl: 50,
      bgColor: "rgb(249, 215, 76)",
    },
    {
      name: "React / Next.js",
      lvl: 40,
      bgColor: "#FF4C60",
    },
    {
      name: "WordPress",
      lvl: 50,
      bgColor: "#4c94ff",
    },
    {
      name: "PHP",
      lvl: 40,
      bgColor: "#198754",
    },
    {
      name: "UX/UI Design",
      lvl: 60,
      bgColor: "#1b557d",
    },
  ];

  const [showSkills, setShowSkills] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting) {
          setShowSkills(true);
        }
      },
      { threshold: 0.2 }
    );

    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => {
      if (aboutSection) {
        observer.unobserve(aboutSection);
      }
    };
  }, []);

  function renderSkill(skill, index) {
    const [width, setWidth] = useState(0);
    
    useEffect(() => {
      if (showSkills) {
        let visualWidth;
        if (skill.name === "React / Next.js" || skill.name === "PHP") {
          visualWidth = 40;
        } else if (skill.name === "UX/UI Design") {
          visualWidth = 60;
        } else {
          visualWidth = skill.lvl;
        }
        setWidth(visualWidth);
      }
    }, [showSkills, skill.name, skill.lvl]);

    return (
      <motion.div 
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <div className="d-flex align-items-center justify-content-between mt-4 mt-md-1">
          <motion.strong
            whileHover={{ scale: 1.05, color: skill.bgColor }}
            transition={{ duration: 0.2 }}
          >
            {skill.name}
          </motion.strong>
        </div>
        <div className={`${styles.progress} progress mt-3`}>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${width}%` }}
            transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
            style={{ backgroundColor: skill.bgColor }}
            className={styles.progressBar}
          ></motion.div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      id="about"
      className={`container mt-section ${isVisible ? "fade-in" : ""}`}
    >
      <Titles value="A propos"></Titles>
      <div className="row">
        <div className="col-lg-2 d-none d-lg-block">
          <Image
            src={Avatar}
            width={156}
            height={156}
            className="rounded-circle"
          />
        </div>
        <div className="col-lg-10 ps-md-5 p-4">
          <div
            className={`${styles.dialog} row bg-white gx-md-5 rounded-4 shadow p-4 position-relative`}
          >
            <div className="col-md-6">
              <p className="lh-lg">
                Je suis Pachara, et ma passion pour la technologie et le design
                me pousse à suivre une formation en développement web et mobile.
                Je crois fermement que l'avenir de l'innovation réside dans la
                combinaison de la technologie et de la créativité.
              </p>
              <a
                target="_blank"
                href="/cv-philibert.pdf"
                className="btn btn btn-primary mt-2"
              >
                Télécharger CV
              </a>
            </div>
            <div className="col-md-6">
              <div className="d-flex flex-column justify-content-between h-100">
                {aboutSkills.map((skill, index) => renderSkill(skill, index))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
