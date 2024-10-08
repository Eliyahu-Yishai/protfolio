import React from 'react'
import { Linkedin, Github, Mail } from 'lucide-react'
import styles from '../styles/Contact.module.css'

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
         <h1>Contact me</h1>
      </div>
      <div className={styles.linksContainer}>
        <a 
          href="https://www.linkedin.com/in/eliyahu-yishai/" 
          target="_blank" 
          rel="noopener noreferrer"
          className={`${styles.link} ${styles.linkedin}`}
        >
          <Linkedin size={24} />
        </a>
        <a 
          href="mailto:eliyahuyishai23@gmail.com"
          className={`${styles.link} ${styles.email}`}
        >
          <Mail size={24} />
        </a>
        <a 
          href="https://github.com/Eliyahu-Yishai" 
          target="_blank" 
          rel="noopener noreferrer"
          className={`${styles.link} ${styles.github}`}
        >
          <Github size={24} />
        </a>
      </div>
    </div>
  )
}

export default Contact