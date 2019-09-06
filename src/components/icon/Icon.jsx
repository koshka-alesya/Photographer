import React, {Component} from 'react';

const Icon= (props)=>{
    return(
        <div className="icon">
        {props.icons.map( icon => (
            <div className="icon__item">
                <a className="icon__link" href={icon.url} >
                <img className="icon__img" src={icon.src} alt=''/>
                </a>
            </div>
        ))}
        </div>
       
    )
};

export default Icon;