import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navigation from '../components/navigation'
import Viewport from '../components/viewport'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>William T. Brown - About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Navigation />
        <Viewport>
          <h1>William T. Brown - Web Developer</h1>
          <h2>About Me</h2>
          <p>
            As a well-established IT leader with a passion for programming, design, and development, I am an ideal candidate for your opening. Having progressed through a series of roles over more than three years, I am excited to apply my skills to produce immediate results as a valuable member of the team.
          </p>

          <p>
            Throughout my career, I have made it my priority to utilize current technologies and new techniques to develop elegant, creative technical solutions across all project phases. Comfortable in collaborative and independently-driven roles, I am a forward-thinking leader with refined analytical and critical thinking skills, and I can adapt and revise my strategies to meet evolving priorities, shifting needs, and emergent issues. 
          </p>

          <p>
            Furthermore, I would bring the following strengths to your team:
          </p>
          <ul className={styles.listContainer}>
            <li className={styles.listItem}>Stack Maintenance &amp; Development</li>
            <li className={styles.listItem}>Data Research &amp; Analysis</li>
            <li className={styles.listItem}>Tools &amp; Script Development</li>
          </ul>

          <p>
            Learning and growing are two of my biggest passions, both in my professional and personal life.
            I am a curious, hard-working, self-driven individual who would love to put these traits to work for you.
            <br />
            I encourage you to click through my resume and peruse some of my projects, and thank you for taking the time.
          </p>
        </Viewport>
      </main>
    </div>
  )
}
