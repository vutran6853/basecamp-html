import React, { Component } from 'react';
import './Computer.css';

class Computer extends Component {
    render() {
        return (
            <div className="Computer">
                <header className="Computer_header">
                    <h1 className="Computer_title">Welcome to Computer Labs</h1> 
                </header>
                <p className="Computer_intro">
                    This section will be display custom PC !!
                </p>
                
            </div>
        );
    }
}

export default Computer;