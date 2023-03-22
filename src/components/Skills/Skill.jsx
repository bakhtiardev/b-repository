import React from 'react'
import { useEffect, useState } from 'react'
import {
    faAngular,
    faNode,
    faGitAlt,
    faPython,
    faJsSquare,
    faCss3,
    faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Skill.scss'
import TextShpere from './TextSphere'


const Skill = () => {
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
                            strArray={['S', 'k', 'i', 'l', 'l', ' ', 's', ' ', '&', ' ', 'E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        Expert in front-end development including technologies like<span class="tech-tag"> HTML5</span>,

                        <span class="tech-tag">CSS3</span>,
                        <span class="tech-tag">JavaScript</span>,
                        <span class="tech-tag">jQuery</span>,
                        <span class="tech-tag">Angular2</span>,
                        <span class="tech-tag">React</span>,
                        <span class="tech-tag">TypeScript</span>,
                        <span class="tech-tag">Jasmine</span>,
                        <span class="tech-tag">Bootstrap</span>,
                        <span class="tech-tag">Sass</span>,
                        <span class="tech-tag">Git</span>, etc.
                    </p>
                    <p >
                        I'm quiet confident, naturally curious, and perpetually working on
                        improving my chops one design problem at a time.
                    </p>
                    <p>
                        If I need to define myself in one sentence that would be a family
                        person, father of a beautiful daughter, a sports fanatic,
                        photography enthusiast, and tech-obsessed!!!
                    </p>
                </div>

            </div>

            <div className="text-cloud">
                <TextShpere />
            </div>
            <Loader type="line-scale" />

        </>
    )
}

export default Skill