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
    const backgroundImg = "url('https://cdn.midjourney.com/b5744429-8ccd-4741-aac8-4df6766fca35/0_1.webp')";
    const style = {
        backgroundImage: backgroundImg,
        backgroundSize: 'cover',
        // backgroundPosition: 'center',
        // backgroundBlendMode: 'overlay',
    };

    const [text, setText] = useState(''); // état local pour stocker le texte animé

    useEffect(() => {
        const yourText = "Développeur Web en recherche d'alternance !"; // texte à animer
        let count = 0;
        // ajouter un caractère à chaque intervalle
        const interval = setInterval(() => {
            setText(yourText.slice(0, count));
            count++;
        }, 100);
        // nettoyer l'interval
        return () => clearInterval(interval);
    }, []);


    return (

        <div style={style} className="vh-100 bg-dark d-flex align-items-center justify-content-center">
            <div className="text-white text-center">
                {/* <Image src={Avatar} width={110} height={110} className='rounded-circle object-fit-cover' /> */}
                <h1 className="mt-4">Pachara Philibert</h1>
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
