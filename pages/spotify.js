import React,{Component, useState ,Fragment} from 'react';
import parse from 'html-react-parser';
import giveOutput from './index';
const H = () => {
 

var k=<a onClick={giveOutput}>love</a>
console.log(k);
 //setApiOutput(`${linkify(output.text).ToString(Formatting.None)}`)
    //setApiOutput(`${k}`);
    
  

  return (
   

    <div>
        <p>{k}</p>
     </div>)
};

export default H;
