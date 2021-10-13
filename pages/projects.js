import Head from 'next/head'
import styles from '../styles/Projects.module.css'
import Navigation from '../components/navigation'
import Viewport from '../components/viewport'
import Thumbnail from '../components/thumbnail'

export default function Projects(){
    return (
      <div className={styles.container}>
        <Head>
          <title>William T. Brown - Projects</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main className={styles.main}>
          <Navigation />
          <Viewport>
            <h1>Projects</h1>

            <p>All projects are currently In Progress, but will be posted here once finished.</p>
          </Viewport>
        </main>
      </div>
    )
}