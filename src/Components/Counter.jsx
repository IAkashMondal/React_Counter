import React, { useState } from 'react'


const Counter = () =>{
// let count = 0 ;
// const IncrementCount = () => {
//     count++ ;
//     console.log(count); 
// }

// hookes--------[use ,setUse]--------------------->

 const [count,setCount]= useState(0);
//  const IncrementCount = () => {
//     setCount(count+1) ; //because of hookes(setCont will visibel on vertualdom to actual dom)
//     console.log(count); 
// }
{/* <button onClick={ IncrementCount} >Increment</button>  */} //inside return

return(
    
    <React.Fragment>
        <h1 style={{color : "#f7941d"}}>Count Value:<span style={{color:count%2===0 ? "green":"red"}}> {count} </span></h1>
        
        
        <div id='gap'>
        <button className='increment' onClick={ () => setCount(count + 1)} >Increment</button>
        <button id='decrement' onClick={ () => { if (count>0){ setCount(count - 1)}}} >Decrement</button>
        <button className='Double' onClick={ () => setCount(count * 2)}>Double</button>
        </div>

    </React.Fragment>

    

)} ;

export{Counter} ;