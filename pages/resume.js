import Head from 'next/head'
import styles from '../styles/Resume.module.css'
import Navigation from '../components/navigation'
import Viewport from '../components/viewport'

export default function Resume() {
    return (
      <div className={styles.container}>
        <Head>
          <title>William T. Brown - Resume</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main className={styles.main}>
          <Navigation />
          <Viewport>
            <h1>Resume</h1>
            <h2>Programmer Profile</h2> 
            <b><i>Technically sophisticated professional with expertise in developing and delivering best-in-class applications, while ensuring optimal functionality and compliance with user requirements.</i></b>
            <hr style={{width: "100%"}}/>
            <p>
                Demonstrated success collaborating with multiple development teams and management to analyze and determine software features for ensuring optimal user experience and satisfaction. 
                Proficient in creating and implementing C++ and C# scripts as well as deliver application development projects within timeline. 
                Adept at conducting in-depth data research/analysis and eliminating technical issues for streamlining processes. 
                Instrumental in converting technical requirements into understandable language for non-technical users. 
                Exceptional communication, problem solving, and analytical skills with keen focus on remaining at forefront of rapidly evolving technology.
                <br />
                <br />
                <i>
                    Stack Maintenance &amp; Development / Project Management / Data Structures &amp; Algorithms / Programming 
                    Team Collaboration &amp; Leadership / Troubleshooting &amp; Error Mitigation / Data Research &amp; Analysis 
                    Tools &amp; Script Development / Applications Development &amp; Deployment   
                </i>
            </p>

            <hr style={{width: "100%"}}/>

            <h2>Technical Proficiences</h2>
            <p>
                <b><i>Tools:</i></b> VisualStudio Code, TortoiseGit, Git for Windows, SourceTree, Fiddler, GitHub, UltraCompare
                <br />
                <b><i>Languages:</i></b> JavaScript, C#, HTML, XSL, XML, CSS, JSON, jQuery, React.js, Next.js
            </p>
            
            <hr style={{width: "100%"}}/>

            <h2>Professional Experience</h2>
            <div><p style={{float: "left"}}><b>Application Developer I, II, &amp; III</b> (3/2018 – Present)</p><p style={{float: "right"}}>ARGO Data Resource Corp., Richardson, TX</p></div>
            <p>
              <i>Technical Scope:</i> JavaScript, C#, HTML, XSL, XML, CSS, JSON, jQuery
              <br />
              Conduct overall stack maintenance and development in multiple languages. Design, develop, and maintain automation tools for evaluations, debugging, and upgradation purposes. 	
              Led full application upgrade and deployment project from IE to Chrome and Edge. 
              Identified and resolved applications defects (10-20 average defects/sprint) on daily basis in close collaboration with product managers, QA, and developers. 
              Develop and maintain multitude of automation scripts for analyzing logs and generating spreadsheets for enabling more efficient debugging/visualization of defect data. 
              Devise C# scripts for evaluation of JavaScript, HTML, and XSL code base as well as convert it from IE Quirks standards to current Chrome and Edge HTML 5 standards. 
              Participated in daily triage meetings to scrutinize validity of defects; foster relationships with development team leads/managers, QA team leads, and managers.
              <br />
              <br />
              <b><i>Key Achievements:</i></b>
            </p>
            <ul className={styles.listContainer}>
              <li className={styles.listItem}>Developed, deployed solutions to application issues in accordance with latest regulations and customer requirements; served as subject matter expert (SME) for current browser framework and MVC pattern.</li> 
              <li className={styles.listItem}>Diminished database table creation by 10% via continuous process improvements.</li>
              <li className={styles.listItem}>Created and implemented latest real estate loan features and banking regulations.</li>
            </ul>
            <p>
                <b><i>Key Projects:</i></b>
            </p>

            <ul className={styles.listContainer}>
              <li className={styles.listItem}>Created multiple C# scripts for analyzing, annotating, and resolving JavaScript to ensure compliance with organizational and internet programming standards.</li> 
              <li className={styles.listItem}>Developed C# script for accurately searching specific files among 15K files through regular expressions.</li>
              <li className={styles.listItem}>Programmed C# scripts for parsing and analyzing application logs for specific issues, which complied data into spreadsheets and charts for efficient resolution of issues.</li>
            </ul>
            
            <hr style={{width: "100%"}}/>

            <h2>Education and Credentials</h2>
            <p>
                <b>Bachelor of Science in Computer Science</b>, Minors in Math and Physics - Cum Laude
                <br />
                University of North Texas, Denton, TX
                <br />
                <br />
                <b>University Honors</b>
                <br />
                <b>Dean's List</b>: Fall 2012, Fall 2013, Spring 2014, Fall 2015, Fall 2016
                <br />
                <b>President's List</b>: Fall 2014, Spring 2016, Spring 2017
                <br />
                <br />
                <b>Affiliation</b>
                <br />
                Member, Golden Key International Honour Society, Fall 2015 – Current
            </p>
          </Viewport>
        </main>
      </div>
    )
  }