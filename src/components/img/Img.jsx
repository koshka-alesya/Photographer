import React, {Component} from 'react';

class Img extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="img">
                <img src={this.props.src} alt={this.props.alt}/>
            </div>
        );
    }
}

export default Img;