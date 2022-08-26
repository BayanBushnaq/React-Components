import Footer from './Components/Footer';
import Main from '../src/Components/Main'
import Header from '../src/Components/Header'
import Data from './Components/Data'
import React from 'react';
import SelectedBeast from './Components/SelectedBeast';


class  App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      show:false,
      title :'',
      img : '',
      desc : ''
    }; 
  }
    showModal= (title,img,desc)=>{
      this.setState({
        show:true,
        title :title,
        img:img,
        desc:desc,
      })
    }
    hideModal =()=>{
      this.setState=({
        show:false
      })
    }
    render(){
  return (
    
   
    <div className="App">
    <Header/>
    <Main data={Data}/>
    <Footer/>
    <SelectedBeast show={this.state.showModal} hide={this.state.hideModal}/>
    </div>
    
  
  );
}}

export default App;
