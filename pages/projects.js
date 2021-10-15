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

            <Thumbnail ThumbnailTitle="Resume" ThumbnailDescription="The first project I finished for this portfolio is this interactive Resume website itself. Click on the image or title above to open the source code on GitHub in a new tab." src="/previews/resume_preview.jpg" imgHref="https://github.com/wtbrown145/resume/" titleHref="https://github.com/wtbrown145/resume/" />
            <Thumbnail ThumbnailTitle="Components" ThumbnailDescription="This is an ongoing collection of components that I've utilized as-is or modified to create the other projects featured here. Click on the image or title above to be taken to the source code on GitHub in a new tab." src="/previews/components_preview.jpg" imgHref="https://github.com/wtbrown145/components/" titleHref="https://github.com/wtbrown145/components/" />
          </Viewport>
        </main>
      </div>
    )
}