import React from 'react'

// import Space_X_Image from '../../public/spacex-background.png'
// console.log(Space_X_Image)
// background: 'url('+ imgUrl + ') noRepeat center center fixed'
const HomeViewStyles = {
  // container: {
  //   background:`url("http://i.imgur.com/Nssk73Q.png")`,
  //   backgroundSize: 'cover',
  //   height: "90vh",
  //   width: "90vw",
  // }
}
class HomeView extends React.Component{
  render(){
    return (
      <div id='HomeView' style={HomeViewStyles.container}>
      </div>
    )
  }
}

export default HomeView