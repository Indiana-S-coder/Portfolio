import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGithub, faHtml5, faJsSquare, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
          setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
      }, [])

    return (
        <>
    <div className="container about-page">
      <div className="text-zone">
        <h1>
            <AnimatedLetters
            letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
              />
        </h1>
        <p>
            I'm very ambitious front-end developer looking for a role in established IT company with the opportunity to work with the latest technologies on challanging and diverse projects.
        </p>
        <p>
            I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.
        </p>

      </div>

      <div className="stage-cube-cont">
        <div className="cubespinner">
            <div className="face1">
                <FontAwesomeIcon icon={faHtml5} color='#f06526' />
            </div>
            <div className="face2">
                <FontAwesomeIcon icon={faCss3} color='#28a4d9' />
            </div>
            <div className="face3">
                <FontAwesomeIcon icon={faReact} color='#5ed4f4' />
            </div>
            <div className="face4">
                <FontAwesomeIcon icon={faJsSquare} color='#efd81d' />
            </div>
            <div className="face5">
                <FontAwesomeIcon icon={faGithub} color='#ec4e28' />
            </div>
            <div className="face6">
                <FontAwesomeIcon icon={faNodeJs} color='#DD0031' />
            </div>
        </div>
      </div>
    </div>
    <Loader type='pacman'/>
    </>
    )
}

export default About