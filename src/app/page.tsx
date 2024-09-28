// pages/index.js
import Head from 'next/head'
import Link from 'next/link'
import styles from './styles/page.module.css'
import Projects from './components/Projects'
import About from './components/About'

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
        {/* -- About -- */}
        <section id="about" className={styles.about}>
         <About />
        </section>

        {/* -- Projects -- */}
        <section id="projects" className={styles.projects}>
          <Projects />
        </section>

        {/* -- Skills -- */}
        <section id="skills" className={styles.skills}>
          <h2>Skills</h2>
          {/* כאן יבוא קוד לרשימת הכישורים */}
        </section>

        {/* -- CV -- */}
        <section id="cv" className={styles.cv}>
          <h2>CV</h2>
          <a href="/cv.pdf" download>Download cv</a>
        </section>

        {/* -- Contact -- */}
        <section id="contact" className={styles.contact}>
          <h2>Contact</h2>
          {/* כאן יבואו קישורים לרשתות חברתיות */}
        </section>
      </main>

      {/* -- Footer -- */}
      <footer className={styles.footer}>
        <p>©{new Date().getFullYear()} Eliyahu Yishai</p>
      </footer>
    </div>
  )
}