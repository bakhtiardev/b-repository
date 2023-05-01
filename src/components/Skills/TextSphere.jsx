import React, { useEffect } from 'react'
import './TextSphereStyle.scss'

// Importing TagCloud package
import TagCloud from 'TagCloud'

const TextShpere = () => {
  // Animation settings for Text Cloud
  useEffect(() => {
    return () => {
      const container = '.tagcloud'
      const texts = [
        'HTML',
        'CSS',
        'SASS',
        'JavaScript',
        'Typescript',
        '.NET',
        '.NET Core',
        'Google Cloud',
        'React',
        'Pandas',
        'MySQL',
        'MongoDb',
        'Docker',
        'Next',
        'NodeJS',
        'React Native',
        'Python',
        'ES6',
        'GIT',
        'GITHUB',
      ]

      const options = {
        radius: 360,
        maxSpeed: 'fast',
        initSpeed: 'fast',
        keep: true,
      }

      TagCloud(container, texts, options)
    }
  }, [])

  return (
    <>
      <div className="text-shpere">
        <span className="tagcloud"></span>
      </div>
    </>
  )
}

export default TextShpere
