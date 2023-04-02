import styles from '../../styles/Services.module.scss';
import Titles from '../Titles'
import Image from 'next/image';
import uxui from '../../public/services/ux-ui.svg'  
import development from '../../public/services/development.svg'  
import photography from '../../public/services/photography.svg'  

function Services() {

    const services = [
        {
            img:uxui,
            title:"UI/UX design",
            description:"Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.",
            bgColor:"rgb(108, 108, 229)",
            color:"white"
        },
        {
            img:development,
            title:"UI/UX design",
            description:"Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.",
            bgColor:"rgb(249, 215, 76)",
            color:"black"
        },
        {
            img:photography,
            title:"UI/UX design",
            description:"Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.",
            bgColor:"#FF4C60",
            color:"white"
        },
    ]

    return (
        <div id="skills" className='container mt-section'>
            <Titles value="Compétences" />
            <div className="row">
                {services.map((service,i) => 
                    <div key={i} className="col-md-4 mt-4 mt-md-0">
                        <div style={{backgroundColor:service.bgColor}} className={`rounded-5 shadow text-center px-4 py-5 text-${service.color}`}>
                            <Image src={service.img} alt={service.title} />
                            <h2 className='fs-4 mt-4'>{service.title}</h2>
                            <p className='mt-3 mb-0'>{service.description}</p>
                        </div>
                    </div>
                    )}
            </div>
            <p className="text-center mt-5">Vous cherchez votre prochain alternant Développeur Web ? <a href="mailto:exemple@exemple.com">Contactez-moi</a> 👋</p>
        </div>
    )
}

export default Services;
