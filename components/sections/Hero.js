import styles from '../../styles/Hero.module.scss';
import Lottie from "react-lottie";
import animationData from "../../public/lotties/8167-simple-scroll-down-icon.json";
import ThreeDButtons from '../ThreeDButtons';
import React, { useState, useEffect } from 'react';

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
    },
};


function Hero() {
    const style = {
        backgroundImage: "url('https://cdn.midjourney.com/b5744429-8ccd-4741-aac8-4df6766fca35/0_1.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    const [text, setText] = useState('');

    useEffect(() => {
        const phrases = ["Développeur Web", "Frontend Developer", "React Expert"];
        let phraseIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        const type = () => {
            const currentPhrase = phrases[phraseIndex];

            if (isDeleting) {
                setText(currentPhrase.substring(0, charIndex - 1));
                charIndex--;
            } else {
                setText(currentPhrase.substring(0, charIndex + 1));
                charIndex++;
            }

            if (!isDeleting && charIndex === currentPhrase.length) {
                setTimeout(() => isDeleting = true, 1500);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
            }

            const typingSpeed = isDeleting ? 50 : 150;
            setTimeout(type, typingSpeed);
        };

        type();
    }, []);

    return (
        <div style={style} className={`${styles.heroContainer} vh-100 bg-dark d-flex align-items-center justify-content-center`}>
            <div className={`${styles.content} text-white text-center`}>
                <h1 className={`${styles.title} mt-4`}>Pachara Philibert</h1>
                <div className={styles.animatedParagraph}>
                    <h5>{text}</h5>
                    <q>l'imagination est plus importante que le savoir</q><br></br>
                    <small>Albert Einstein</small>
                </div>
                <div className="d-flex justify-content-center gap-4 fs-4">
                    <a target="_blank" href="https://www.linkedin.com/in/pachara-philibert/" className="text-white">
                        <i className="bi bi-linkedin"></i>
                    </a>
                    <a target="_blank" href="https://github.com/hitochix06" className="text-white">
                        <i className="bi bi-github"></i>
                    </a>
                    <a target="_blank" href="/cv-philibert.pdf" className="text-white">
                        <i className="bi bi-file-earmark-person-fill"></i>
                    </a>
                </div>
                <div className="mt-4">
                    <a href="#contact">
                        <ThreeDButtons text="Me contacter"></ThreeDButtons>
                    </a>
                </div>
            </div>
            <a href="#" className={styles.lottieSection}>
                <small className="text-white">Scroll vers le bas</small>
                <Lottie options={defaultOptions} height={40} width={40} />
            </a>
        </div>
    );
}

export default Hero;
