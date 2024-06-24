import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
// you can explore more - and check as how to use materiul ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// implement the class below
class Carousel extends Component {
  constructor(props){
   super(props);
   this.state={
    id:0,
   }
  }
   prev=()=>{
   this.setState({
    id:this.state.id<=0?2:this.state.id-1
   })
  }
  
  next=()=>{
  this.setState({
  id:this.state.id>=2?0:this.state.id+1})}

  render(){
    return(
        <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}className="container">
        <div className="arrow" onClick={this.prev}><ArrowBackIosIcon/></div>
        <div className="data" >
        <div className="title"><h1>{images[this.state.id].title}</h1></div>
        <div><img src={images[this.state.id].img}></img></div>
        <div><h2>{images[this.state.id].subtitle}</h2></div>
        </div>
        <div className="arrow"onClick={this.next}><ArrowForwardIosIcon/></div>
        </div>
    )
  }
}

export default Carousel;