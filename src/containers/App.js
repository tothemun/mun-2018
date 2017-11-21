import React, { Component } from 'react'
import baseStyles from '_styles/index.css';
import { Navigation } from '_components';

class App extends Component {
  render() {
    return (
      <div className={baseStyles.wrapper}>
        <Navigation />
        <div className={baseStyles.container}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App
