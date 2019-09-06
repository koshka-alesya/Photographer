import React, {Component} from 'react';
import logo from '../logo.svg';
import './App.scss';


import Menu from '../components/menu/Menu';
import Icon from '../components/icon/Icon';
import Img from '../components/img/Img';


class App extends Component{
  constructor(props){
    super(props);


    this.state={
      menu:[
        {
          url:'#',
          title:'Главная',
        },
        {
          url:'#',
          title:'Обо мне',
        },
        {
          url:'#',
          title:'Портфолио',
        },
        {
          url:'#',
          title:'Контакты',
        }

      ],

    icons:[
      {
        url:'#',
        src: require('../img/icons8-vk-в-круге-50.png'),
      },
      {
        url:'#',
        src: require('../img/icons8-instagram-старый-50.png'),
      },
      {
        url:'#',
        src: require('../img/icons8-facebook-новый-50.png'),
      },
    ]
    }
  }

  render(){
    return(
      <div className = "App">
        <div className = {'container-fluid'}>
          <div className={'row'}>
            <div className={'col-2'}>
              <div className="left-main">
                  <span className="left-main__logo">
                    SLAVA
                  </span>
                    <Icon icons={this.state.icons}/>
                  

              </div>
            </div>

            <div className={'col-10 p-0'}>
              <div className="right-main">
                <div className = {'row m-0'}>
                  <div className={'col-5 p-0'}>
                      <Img src={require('../img/slava.png')} alt='me'/>
                  </div>

                  <div className={'col-7'}>
                    <div className="right-main__main">
                      <Menu menu={this.state.menu}/>
                      <div className="right-main__main__hello">
                        <h1>Привет. Меня зовут Слава и я фотограф, который тебе нужен.
                          </h1>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            </div>
          </div>
        </div>
    
    );
  }
}

export default App;