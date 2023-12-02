import React from 'react'
import '../assets/styles/About.css'
import cata from '../assets/images/foto.png'
import fran from '../assets/images/fran.jpg'

function About() {
    return (
        <>
        <h1 className='title'>Sobre Nosotros</h1>
        <h2 className='equipo'>IIC2513Games</h2>
            <p className='introduction'>Somos un grupo de 3 tres estudiantes de ingeniería y nos encontramos creando este 
                juego para el curso "Tecnologías y aplicaciones web"
            </p>
            <div className='structure'>
            <section className='substructure'>
            <p className='mision'>
                Nuestra misión
            </p>
            <p className='paragraph'>
                Como equipo, queremos que las personas puedan divertirse de
                una forma rápida y simple, sin la necesidad de
                tener que descargar el juego. Además, buscamos otorgarles un momento de felicidad a las personas,
                recordando los juegos de mesa de la infancia, pero con mejoras que permiten al usuario 
                vivir una experiencia más completa.
            </p>

            </section>
        <div className="creadores">

            <div className='creador'>
            <img src={cata} className='photos'></img>
            <div><p className='paragraph'>Catalina Padilla </p>
            <p className='paragraph'>Estudiante de Ingeniería civil</p>
            </div>
            </div>

        <div className="creador">
        <img src='https://res.cloudinary.com/darhaqq0v/image/upload/v1696114444/3ff0fc83-56d8-4309-8e2b-412a282f8582_pvy7ma.jpg' className='photos'></img>
        <div><p className='paragraph'>Nicolás Fernández </p>
        <p className='paragraph'>Estudiante de Ingeniería civil</p>
        </div>
        </div>

        <div className="creador">
        <img src={fran} className='photos'></img>
        <div><p className='paragraph'>Francisca Díaz </p>
        <p className='paragraph'>Estudiante de Ingeniería civil</p>
        </div>
        </div>

        </div>
        </div>
        <div className='divfoot'>
        <footer>IIC2513Games</footer>
        </div>
        </>
    )
}
export default About