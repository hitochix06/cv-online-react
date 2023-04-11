import styles from '../../styles/Services.module.scss';
import Titles from '../Titles'
import Image from 'next/image';
import uxui from '../../public/services/ux-ui.svg'
import conception from '../../public/services/conception-3d.svg'
import Card from 'react-animated-3d-card'

function Services() {

    const services = [
        {
            img: uxui,
            title: "UI/UX design",
            description: "L'UI/UX design est la conception de produits numériques conviviaux et esthétiques pour une expérience utilisateur optimale",
            bgColor: "rgb(108, 108, 229)",
            color: "white"
        },
        {
            img: uxui,
            title: "AdobeXD",
            description: "Adobe XD est un logiciel de conception d'interfaces utilisateur et d'expérience utilisateur. Il permet aux designers de créer des maquettes et des prototypes interactifs pour des applications mobiles et des sites web",
            bgColor: "#4c98f9",
            color: "white"
        },
        {
            img: conception,
            title: "Conception 3D",
            description: "La conception 3D crée des modèles numériques tridimensionnels réalistes à l'aide de logiciels spécialisés. Elle est utilisée dans de nombreuses industries pour prototyper rapidement des idées avant la production.",
            bgColor: "#FF4C60",
            color: "white"
        },
    ]

    return (
        
        <div id="skills" className='container mt-section'>
            <Titles value="Compétences" />
            <div className="row">
                {services.map((service, i) =>
                    <div key={i} className="col-md-4 mt-4 mt-md-0 text-center">
                        <Card
                            style={{
                                backgroundColor: service.bgColor,
                                color: service.color,
                                width: '100%',
                                height: '400px',
                                padding: '40px',
                                border: 'none',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                                cursor: 'pointer'
                            }}
                            onClick={() => console.log('Card clicked')}
                        >
                            <Image src={service.img} alt={service.title} />
                            <h2 className='fs-4 mt-4'>{service.title}</h2>
                            <p className='mt-3 mb-0'>{service.description}</p>
                        </Card>
                    </div>
                )}
            </div>
            <p className="text-center mt-5">Vous cherchez votre prochain alternant Développeur Web ? <a href="mailto:exemple@exemple.com">Contactez-moi</a> 👋</p>
        </div>
    )
}

export default Services;
