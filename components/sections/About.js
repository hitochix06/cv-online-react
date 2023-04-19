import React, { useState, useEffect } from 'react';
import styles from '../../styles/About.module.scss';
import Titles from '../Titles';
import Image from 'next/image';
import Avatar from '@/public/photos/moi.gif';

function About() {
    const aboutSkills = [
        {
            name: 'HTML5 / CSS3 / Bootstrap',
            lvl: 50,
            bgColor: 'rgb(108, 108, 229)',
        },
        {
            name: 'JavaScript',
            lvl: 50,
            bgColor: 'rgb(249, 215, 76)',
        },
        {
            name: 'React / Next.js',
            lvl: 40,
            bgColor: '#FF4C60',
        },
        {
            name: 'WordPress',
            lvl: 50,
            bgColor: '#4c94ff',
        },
    ];

    // J'utilise useEffect pour montrer les compétences lorsque la page est chargée
    const [showSkills, setShowSkills] = useState(false);
    useEffect(() => {
        setShowSkills(true);
    }, []);

    function renderSkill(skill, index) {
        const [width, setWidth] = useState(0);
        useEffect(() => {
            if (showSkills) {
                setWidth(skill.lvl);
            }
        }, [showSkills]);
        // J'utilise le style inline pour changer la largeur de la barre de progression
        return (
            <div key={index}>
                <div className="d-flex align-items-center justify-content-between mt-4 mt-md-0">
                    <strong>{skill.name}</strong>
                    <span>{width}%</span>
                </div>
                <div className={`${styles.progress} progress mt-3`} role="progressbar" aria-valuenow={width} aria-valuemin="0" aria-valuemax="100">
                    <div style={{ width: `${width}%`, backgroundColor: skill.bgColor }} className={styles.progressBar}></div>
                </div>
            </div>
        );
    }

    return (
        <div id="about" className="container mt-section">
            <Titles value="A propos"></Titles>
            <div className="row">
                <div className="col-lg-2 d-none d-lg-block">
                    <Image src={Avatar} width={156} height={156} className="rounded-circle" />
                </div>
                <div className="col-lg-10 ps-md-5 p-4">
                    <div className={`${styles.dialog} row bg-white gx-md-5 rounded-4 shadow p-4 position-relative`}>
                        <div className="col-md-6">
                            <p className="lh-lg">Pachara, passionné de technologie et de design, <br></br>suit actuellement une formation pour devenir développeur web. Il est convaincu que l’avenir de l’innovation repose sur la capacité à allier technologie et créativité.</p>
                            <a target="_blank" href="/cv-philibert.pdf" className="btn btn btn-primary mt-2">Télécharger CV</a>
                        </div>
                        <div className="col-md-6">
                            <div className="d-flex flex-column justify-content-between h-100">
                                {aboutSkills.map((skill, index) => renderSkill(skill, index))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
