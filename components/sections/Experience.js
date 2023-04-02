import styles from '../../styles/Experience.module.scss';
import Titles from '../Titles'
import Image from 'next/image';

function Experience() {

    const experiences = [
        {
            yearStart: 2019,
            yearEnd: null,
            title: "Academic Degree",
            organization: "SupdewebDev",
            description: "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.",
            type: "study" // study / job
        },
        {
            yearStart: 2013,
            yearEnd: 2017,
            title: "Nice's University",
            organization: "",
            description: "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.",
            type: "study" // study / job
        },
        {
            yearStart: 2009,
            yearEnd: 2013,
            title: "HETIC",
            organization: "",
            description: "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.",
            type: "study" // study / job
        },
        {
            yearStart: 2019,
            yearEnd: null,
            title: "Web Design",
            organization: "Apple",
            description: "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.",
            type: "job" // study / job
        },
        {
            yearStart: 2013,
            yearEnd: 2017,
            title: "Front-End Developer",
            organization: "Tesla",
            description: "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.",
            type: "job" // study / job
        },
        {
            yearStart: 2009,
            yearEnd: 2013,
            title: "Back-End Developer",
            organization: "Google",
            description: "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.",
            type: "job" // study / job
        },
    ]

    return (
        <div id="experiences" className='container mt-section'>
            <Titles value="Expériences" />
            <div className="row mt-5">
                <div className="col-md-6 ">
                    <div className='rounded-4 ps-4 pe-5 py-4 bg-white shadow'>
                        <div className='border-start border-danger'>
                            <div className='d-flex flex-column gap-5'>
                                {experiences.slice(0, experiences.length / 2).map((experience, i) =>
                                    <Competence key={i} experience={experience} />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className='rounded-4 ps-4 pe-5 py-4 bg-white shadow mt-4 mt-md-0'>
                    <div className='border-start border-danger'>
                        <div className='d-flex flex-column gap-5'>
                            {experiences.slice(experiences.length / 2, experiences.length).map((experience, i) =>
                                <Competence key={i} experience={experience} />
                            )}
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Competence({ experience }) {
    return (
        <div className={`ps-5 position-relative ${styles.competence}`}>
            {experience.type === "study" ? <span className={styles.studyIcon}>
                <i className={`${styles.icon} text-danger bi bi-mortarboard`}></i>
            </span> : ""}

            <small className='text-muted d-block'>{experience.yearStart} - {experience.yearEnd === null ? "Present" : experience.yearEnd}</small>
            <h3 className='mt-2 fs-5 d-inline-block'>{experience.title}</h3> - <small>{experience.organization}</small>
            <p className='m-0'>{experience.description}</p>
        </div>
    )
}

export default Experience;
