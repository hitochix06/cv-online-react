import { useState, useEffect } from 'react';
import styles from '../styles/Navbar.module.scss';

function Navbar() {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            const isScrollingDown = prevScrollPos < currentScrollPos;
            const isScrolledPastThreshold = currentScrollPos > 100;

            setVisible(!isScrollingDown || !isScrolledPastThreshold);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);

    return (
        <nav className={`${styles.navbar} navbar navbar-expand-lg position-fixed w-100 z-3 ${visible ? styles.visible : styles.hidden}`}>
            <div className="container">
                <a className={`${styles['navbar-brand']} navbar-brand`} href="#">Philibert</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className={`${styles['navbar-nav']} navbar-nav ms-auto`}>
                        <a className={`${styles['nav-link']} nav-link ps-4`} href="#about">A propos</a>
                        <a className={`${styles['nav-link']} nav-link ps-4`} href="#works">Projets</a>
                        <a className={`${styles['nav-link']} nav-link ps-4`} href="#skills">Compétences</a>
                        <a className={`${styles['nav-link']} nav-link ps-4`} href="#experiences">Parcours</a>
                        <a className={`${styles['nav-link']} nav-link ps-4`} href="#contact">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
