import React, { Component } from 'react';
import FirstComponent from '../components/FirstComponent';

export default class FirstContainer extends Component {
    constructor(props){
        super(props);
    }


    render(){
        return (
            <div>
                <FirstComponent status={true} count={1}/>
            </div>
        )
    }
}