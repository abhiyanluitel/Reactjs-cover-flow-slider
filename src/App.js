import React, { Component } from 'react';
import './App.css';
import Coverflow from 'react-coverflow';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';



class App extends Component {

  
  render() {
    return (
     <Grid container justify="center" alignItems="center"  style={{ margin: 50 }}>

     <Grid item xs={8}>
      <Coverflow
        width={1000}
        height={400}
      
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
            src= 'http://www.mining.com/wp-content/uploads/2018/08/unnamed.jpg' 
            alt='this is cover flow slider one1'
            style={{ display: 'block', width: '100%' }}
          />
        </div>
        <img
        src='https://previews.123rf.com/images/glopphy/glopphy1605/glopphy160500019/57119394-gold-diamond-illustration.jpg' 
        alt='Hey this is cover flow sider 2' 
        data-action="http://andyyou.github.io/react-coverflow/"
        style={{ display: 'block', width: '100%' }}
        />
        <img
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxjzK0WowFClne4dV4t-YJGaBK83cjSywW157SIfk6uYdm2gfJ' 
          alt='Hey this is cover flow slider 3 ' 
          data-action="http://andyyou.github.io/react-coverflow/"
          style={{ display: 'block', width: '100%' }}
        />
        </Coverflow>, 

     </Grid>
     <Grid item xs ={8}>
        <IconButton>
        <KeyboardArrowLeftIcon/>
      </IconButton>
        

      <IconButton>
        <KeyboardArrowRightIcon/>
      </IconButton>

     </Grid>

      
       


     </Grid>
    )
  }
}

export default App;
