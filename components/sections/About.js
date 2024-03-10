import React, { useState, useEffect } from 'react';
import styles from '../../styles/About.module.scss';
import Titles from '../Titles';
import Image from 'next/image';
import Avatar from '@/public/photos/moi.gif';

function About() {
    const aboutSkills = [
        {
            name: 'HTML5 / CSS3 / Bootstrap 5',
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
        {
            name: 'PHP',
            lvl: 40,
            bgColor: '#198754',
        },
        {
            name: 'UX/UI Design',
            lvl: 60,
            bgColor: '#1b557d',
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
                // Détermine la largeur de la barre de progression en fonction du nom de la compétence
                let visualWidth;
                if (skill.name === 'React / Next.js' || skill.name === 'PHP') {
                    visualWidth = 40; // Pour React/Next.js et PHP, affiche visuellement 40%
                } else if (skill.name === 'UX/UI Design') {
                    visualWidth = 60; // Pour UX/UI Design, affiche visuellement 60%
                } else {
                    visualWidth = skill.lvl; // Pour les autres compétences, utilise la valeur de lvl
                }
                setWidth(visualWidth);
            }
        }, [showSkills, skill.name, skill.lvl]);
        return (
            <div key={index}>
                <div className="d-flex align-items-center justify-content-between mt-4 mt-md-1">
                    <strong>{skill.name}</strong>
                    {/* Suppression de l'affichage du pourcentage ici */}
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
                            <p className="lh-lg">Je suis Pachara, et ma passion pour la technologie et le design me pousse à suivre une formation en développement web et mobile. Je crois fermement que l'avenir de l'innovation réside dans la combinaison de la technologie et de la créativité.</p>
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
