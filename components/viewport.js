import React from 'react'

class Viewport extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return <div style={{
            height: "100%",
            width: "100%",
            position: "fixed",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            paddingLeft: "25%",
            paddingRight: "15%",
            paddingBottom: "10%",
            overflow: "auto"
          }}>
              {this.props.children}
        </div>
    }
}

export default Viewport