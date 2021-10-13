import Head from 'next/head'
import styles from '../styles/Contact.module.css'
import Navigation from '../components/navigation'
import Viewport from '../components/viewport'
import {CopyToClipboard} from 'react-copy-to-clipboard'

export default function Projects(){
    return (
      <div className={styles.container}>
        <Head>
          <title>William T. Brown - Contact</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main className={styles.main}>
          <Navigation />
          <Viewport>
              <h2>Contact</h2>
              <br />
              <p>
                I look forward to discussing my background and your needs in detail, as I am confident that my unique experience will be of great use in meeting your immediate and future objectives. Please contact me at your earliest convenience to schedule an interview; until then, thank you for your consideration.
                <br />
                <br />
                Feel free to reach out through any platforms below:
                <br />
                <br />
                <br />
                <br />
                <CopyToClipboard text={"browntucker145@gmail.com"}>
                  <span className={styles.copySpan} title="Click to copy the text to a clipboard.">browntucker145@gmail.com</span>
                </CopyToClipboard>
                <br />
                <br />
                <a href="https://www.linkedin.com/in/william-brown-884805142/" target="_blank" title="Click to be taken to my LinkedIn page in a new tab.">
                  LinkedIn
                </a>
                <br />
                <br />
                <a href="https://github.com/wtbrown145" target="_blank" title="Click to be taken to my GitHub projects repository page in a new tab.">
                  GitHub
                </a>
              </p>
          </Viewport>
        </main>
      </div>
    )
}