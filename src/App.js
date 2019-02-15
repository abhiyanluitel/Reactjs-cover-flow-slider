import React, { Component } from 'react';
import './App.css';
var Coverflow = require('react-coverflow');

class App extends Component {
  render() {
    return (
      
     <React.Fragment>
     <Coverflow
      width={960}
      height={480}
      displayQuantityOfSide={2}
      navigation={false}
      enableHeading={false}
    >
      <div
        // onClick={() => fn()}
        // onKeyDown={() => fn()}
        role="menuitem"
        tabIndex="0"
      >
        <img
          src= 'Images/IMG1090A.jpg' 
          alt='this is cover flow slider one1'
          style={{ display: 'block', width: '100%' }}
        />
      </div>
      <img src='Images/IMG1091A.jpg' alt='Hey this is cover flow sider 2' data-action="http://andyyou.github.io/react-coverflow/"/>
       <img src='Images/IMG1092A.jpg' alt='Hey this is cover flow slider 3 ' data-action="http://andyyou.github.io/react-coverflow/"/>
      </Coverflow>, 



     </React.Fragment>
    )
  }
}

export default App;
