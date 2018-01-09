import React, { Component } from 'react';

export default  (props) => {
   return (
       <div>
           {props.status && <div>Count is {props.count}</div>}
           {!props.status && <div>Count is Loading</div>}
       </div>
   )
};