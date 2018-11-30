import React, {Component } from "react";



class MyHeader extends Component {
    constructor (props) {
        super (props);

        this.state ={
            bgColorActive :this.props.myBoolean

        }
        this.changeBgColor = this.changeBgColor.bind(this)
      }

      changeBgColor () {
            this.setState ({bgColorActive:true})

      }
    render (){
        console.log(this.state)
        const {bgColor, classNametitle, title} = this.props;
        return (
            <div>
               <header style ={{backgroundColor: this.state.bgColorActive ? bgColor:'green', 
               color:'yellow', fontsixe:'70px'}}
               className="App-header">
               
               <h3 className={this.props.title}>{title}</h3>
               <button onClick={this.changeBgColor}>Change background color</button>
                 </header> 
               
            </div>
        );
    };
    
    

}
export default MyHeader;