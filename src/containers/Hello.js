import React, { Component } from 'react';

import { connect } from 'react-redux';
import { browserHistory,Link } from 'react-router';
import { isEqual, isEmpty } from 'lodash/lang';


export default class Hello extends Component {
    constructor(props){
        super(props);
        console.log('Inside Constructor',this.props);

    }

    componentWillMount() {

    }

    componentDidMount(){

    }

    componentWillReceiveProps(nextProps) {

    }

    render() {
        return (
            <div>
                Hey
            </div>

        )
    }
}






