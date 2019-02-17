import React, { Component } from 'react';
import './App.css';
import Coverflow from 'react-coverflow';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import Cards from './CardComponent/CardComponent';
import { StyleRoot } from 'radium';
// import { Card } from '@material-ui/core';


class App extends Component {


  render() {
    return (

    <StyleRoot>


      <Grid container justify="center" alignItems="center"  style={{ margin: 50 }}>
 
      <Grid item xs={8}>
       <Coverflow
       
         displayQuantityOfSide={2} 
         navigation
         enableHeading
         media={{
           '@media (max-width: 900px)': {
             width: '600px',
             height: '300px'
           },
           '@media (min-width: 560px)': {
             width: '600px',
             height: '300px',
           },
         }}  
       >
         <div
           // onClick={() => fn()}
           // onKeyDown={() => fn()}
           role="menuitem"
           tabIndex="0"
         >
          <Cards>
 
          </Cards>
          
            
         </div>
 
         <Cards>
         </Cards>
         <Cards>
         </Cards>
         
        </Coverflow>, 
 
      </Grid>
      {/* <Grid item xs ={8}>
         <IconButton>
         <KeyboardArrowLeftIcon/>
       </IconButton>
         
 
       <IconButton>
         <KeyboardArrowRightIcon/>
       </IconButton>
 
      </Grid>
  */}
       
        
 
 
      </Grid>
      </StyleRoot>
     )
  }
    
}

export default App;
