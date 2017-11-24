import React, {Component} from 'react'


class Sidebar extends React.Component {
  render(){
    return (
      <div style={{borderRight:'1px solid white', height:'100%', position:'fixed', paddingTop:'2rem'}}>
        {/* <hr width="1" style={{height:'500px', backgroundColor:'white'}}/> */}
        <li style={{position:'relative', left:'25px', color:'white'}}></li>
        <li style={{position:'relative', left:'25px'}}></li>
        <li style={{position:'relative', left:'25px'}}></li>
        <li style={{position:'relative', left:'25px'}}></li>
        <li style={{position:'relative', left:'25px'}}></li>
        <li style={{position:'relative', left:'25px'}}></li>
        <li style={{position:'relative', left:'25px'}}></li>
        <li style={{position:'relative', left:'25px'}}></li>
        <li style={{position:'relative', left:'25px'}}></li>
      </div>
    )
  }

}


export default Sidebar
