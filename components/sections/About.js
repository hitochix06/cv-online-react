import styles from '../../styles/About.module.scss';
import Titles from '../Titles'
import Image from 'next/image';
import Avatar from '@/public/photos/avatar.jpg'
function About() {

    const aboutAchievements = [
        {
            icon: 'bi-hand-thumbs-up',
            number: 198,
            name: "Projects completed"
        },
        {
            icon: 'bi-cup-hot',
            number: 5670,
            name: "Cup of coffee"
        },
        {
            icon: 'bi-people',
            number: 427,
            name: "Satisfied clients"
        },
        {
            icon: 'bi-award',
            number: 35,
            name: "Nominees winner"
        },
    ]
    const aboutSkills = [
        {
            name: "HTML5 / CSS3 / Bootstrap",
            lvl: 25,
            bgColor: "rgb(108, 108, 229)"
        },
        {
            name: "Javascript",
            lvl: 75,
            bgColor: "rgb(249, 215, 76)"
        },
        {
            name: "React / Next.js",
            lvl: 50,
            bgColor: "#FF4C60"
        },
    ]

    return (
        <div id="about" className='container mt-section'>
            <Titles value="A propos"></Titles>
            <div className="row">
                <div className="col-lg-2 d-none d-lg-block">
                        <Image src={Avatar} width={156} height={156} className='rounded-circle' />
                    {/* <img src="https://jthemes.net/themes/wp/bolby/bolby5/wp-content/uploads/sites/5/2021/01/avatar-1-2.svg" className='w-100' alt="" /> */}
                </div>
                <div className="col-lg-10 ps-md-5 p-4">
                    <div className={`${styles.dialog} row bg-white gx-md-5 rounded-4 shadow p-4 position-relative`}>
                        <div className="col-md-6">
                            <p className="lh-lg">I am Bolby Doe, web developer from London, United Kingdom. I have rich experience in web site design and building and customization, also I am good at WordPress.</p>
                            <a target="_blank" href="/CV_Brice-Eliasse.pdf" className='btn btn btn-primary mt-2'>Download CV</a>
                        </div>
                        <div className="col-md-6">
                            <div className='d-flex flex-column justify-content-between h-100'>
                                {aboutSkills.map((skill, i) =>
                                    <div key={i}>
                                        <div className="d-flex align-items-center justify-content-between mt-4 mt-md-0">
                                            <strong>{skill.name}</strong>
                                            <span>{skill.lvl}%</span>
                                        </div>
                                        <div className={`${styles.progress} progress mt-3`} role="progressbar" aria-valuenow={skill.lvl} aria-valuemin="0" aria-valuemax="100">
                                            <div style={{ width: skill.lvl + "%", backgroundColor: skill.bgColor }} className={styles.progressBar}></div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row mt-5'>
                {aboutAchievements.map((achievement, i) =>
                    <div key={i} className="col-md-3">
                        <div className="d-flex ">
                            <i className={`bi fs-1 text-muted ${achievement.icon}`}></i>
                            <div className='ms-4 mt-2'>
                                <h3 className='m-0'>{achievement.number}</h3>
                                <span>{achievement.name}</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default About;
