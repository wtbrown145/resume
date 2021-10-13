import React from 'react'
import ReactDOM from 'react-dom'
import Link from 'next/link'
import styles from '../styles/Navigation.module.css'

class Navigation extends React.Component {
    constructor(props){
        super(props);
        this.state = {expanded: true};
        this.toggleState = this.toggleState.bind(this);
    }



    toggleState(e){
        this.setState({expanded: !this.state.expanded});
    }

    render() {
        var expansion = "", expanderText = "";
        if(this.state.expanded){
            expansion = styles.navMenu + " " + styles.expanded;
            expanderText = "COLLAPSE";
        }
        else{
            expansion = styles.navMenu + " " + styles.collapsed;
            expanderText = "EXPAND";
        }

        return <div className={expansion}>
            <Link href="/">
                <a><h2 className={styles.navItem}>About</h2></a>
            </Link>
            <Link href="/resume">
                <a><h2 className={styles.navItem}>Resume</h2></a>
            </Link>
            <Link href="/projects">
                <a><h2 className={styles.navItem}>Projects</h2></a>
            </Link>
            <Link href="/contact">
                <a><h2 className={styles.navItem}>Contact</h2></a>
            </Link>
            {/* <p className={styles.expander} onClick={this.toggleState}>EXPANDER</p> */}
            <div className={styles.expander} onClick={this.toggleState}>{expanderText}</div>
        </div>
    }
}

export default Navigation