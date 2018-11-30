import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import MyHeader from './components/MyHeader.js';

class App extends Component {
  render() {
    return (
      <div className="App">
      
        <MyHeader
        classNameTitle={'mainTitleHome'}
        bgColor={'#f1a'}
        title={"My New React App"}
        number={0}
        myBoolean={false}
        myArray={[1,2,3,4,5,6]}>
        
        </MyHeader>
        
        
      </div>
    );
  }
}

export default App;
