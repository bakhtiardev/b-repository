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
import cv from '../../assets/docs/resume-with-exp.pdf'
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
      <div>
        <div className="container about-page">
          <div className="text-zone">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={[
                  'S',
                  'k',
                  'i',
                  'l',
                  'l',
                  ' ',
                  's',
                  ' ',
                  '&',
                  ' ',
                  'E',
                  'x',
                  'p',
                  'e',
                  'r',
                  'i',
                  'e',
                  'n',
                  'c',
                  'e',
                ]}
                idx={15}
              />
            </h1>
            <p>
              Expert in front-end development including technologies like{' '}
              <mark class="tech-tag"> HTML5</mark>,
              <mark class="tech-tag"> CSS3</mark>,
              <mark class="tech-tag"> JavaScript</mark>,
              <mark class="tech-tag"> jQuery</mark>,
              <mark class="tech-tag"> Angular2</mark>,
              <mark class="tech-tag"> React</mark>,
              <mark class="tech-tag"> TypeScript</mark>,
              <mark class="tech-tag"> Jasmine</mark>,
              <mark class="tech-tag"> Bootstrap</mark>,
              <mark class="tech-tag"> Sass</mark>,
              <mark class="tech-tag"> Git</mark>, etc.
            </p>
            <p>
              I’m not a designer but I have a good sense of aesthetics, and
              experience in responsive, mobile-first web design. I put special
              effort into optimizing my code and providing the best user
              experience. I would love to give you any kind of support also
              after the project's completion. I guarantee a commitment during
              work on your project.
            </p>
            <p>
              Visit my{' '}
              <a
                className="tech-tag"
                href="https://www.linkedin.com/in/bakhtiarhussain"
              >
                LinkedIn{' '}
              </a>
              profile for more details. Also you can checkout my cv on this{' '}
              <a className="tech-tag" target="_blank" href={cv}>
                link
              </a>
              , or feel free to give a peek on some of my blog{' '}
              <a
                target="_blank"
                className="tech-tag"
                href="https://www.toptal.com/css/smacss-scalable-modular-architecture-css"
              >
                posts
              </a>
              .
            </p>
          </div>
          {/* <div className="text-cloud-up">
            <TextShpere />
          </div> */}
        </div>

        <div className="text-cloud">
          <TextShpere />
        </div>
      </div>
      <Loader type="line-scale" />
    </>
  )
}

export default Skill
