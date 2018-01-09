import React, { Component } from 'react';

import { connect } from 'react-redux';
import { browserHistory,Link } from 'react-router';
import { isEqual, isEmpty } from 'lodash/lang';


export default class Hello extends Component {
    constructor(){
        super();
        console.log('Inside Constructor',this.props);

    }

    componentWillMount() {

    }

    render() {
        var self = this;
        console.log('hello', self.props);
        return (
            <div>
                Hey
            </div>

        )
    }
}






