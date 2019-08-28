import React,{Component} from 'react';

export default class Ttem extends React.Component{
  constructor(props){
    super(props)
    this.state={

    }
  }

  handleDel(){
    this.props.handleDel(this.props.index)
  }


  render(){
    return(
      <li onClick={this.handleDel.bind(this)}>{this.props.content}</li>
    )
  }
}