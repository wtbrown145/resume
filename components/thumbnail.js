import React from 'react'
import ReactDOM from 'react-dom'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Thumbnail.module.css'

class Thumbnail extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return <div style={{paddingBottom: "20px"}}>
            <div className={styles.thumbnailCard}>
                <Link href="/">
                    <a>
                        <h3>{this.props.ThumbnailTitle}</h3>
                        <Image
                            src={this.props.src} 
                            width={this.props.width} 
                            height={this.props.height}
                            alt={this.props.alt} 
                            title={this.props.title}
                        />
                    </a>
                </Link>
                <p>{this.props.ThumbnailDescription}</p>
            </div>
        </div>
    }
}

Thumbnail.defaultProps = {
    ThumbnailTitle: "Preview Title",
    ThumbnailDescription: "A description of the previewed image.",
    width: "800px",
    height: "650px",
    alt: "Preview Image",
    title: "Preview Image"
}

export default Thumbnail;