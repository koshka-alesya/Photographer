import React,{Component} from 'react';

const Menu= (props)=>{
    return(
        <nav className="menu">
            <ul className="menu__list">
                {props.menu.map((item)=>(
                    <li className="menu__item">
                        <a className="menu__link" href= {item.url} >
                            {item.title}
                        </a>

                    </li>
                )
                )}
            </ul>
        </nav>
    )

};

export default Menu;