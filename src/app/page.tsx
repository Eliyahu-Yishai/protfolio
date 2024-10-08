// pages/index.js
import Head from 'next/head'
import Link from 'next/link'
import styles from './styles/page.module.css'
import Projects from './components/Projects'
import About from './components/About'
import SkillsContainer from './components/SkillsContainer'
import Contact from './components/Contact'
import CVDownload from './components/CVDownload'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Eliyahu Yishai - portfolio</title>
        <meta name="description" content="The portfolio's eliyahu yishai - software engineering " />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className={styles.nav}>
        <Link href="#about">About</Link>
        <Link href="#projects">Projects</Link>
        <Link href="#skills">Skills</Link>
        <Link href="#cv">Cv</Link>
        <Link href="#contact">Contact</Link>
      </nav>

      <main className={styles.main}>
        <section id="about" className={styles.about}>
         <About />
        </section>

        <div className={styles.dividerContainer}>
          <div className={styles.divider}> </div>
        </div>
        <section id="projects" className={styles.projects}>
          <Projects />
        </section>

        <section id="skills" className={styles.skills}>
          <SkillsContainer/>
        </section>

       <section id="cv" className={styles.cv}>
          <CVDownload/>
        </section>
      </main>

      <footer className={styles.footer}>
        <section id="contact" className={styles.contact}>
          <Contact/>
        </section>

        <p>©{new Date().getFullYear()} Eliyahu Yishai</p>
      </footer>
    </div>
  )
}