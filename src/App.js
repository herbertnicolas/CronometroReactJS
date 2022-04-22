import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './styles.css'
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      tempo: 0,
      estado: "GO"      
    };
    this.timer = null;
    this.start = this.start.bind(this);
    this.zerar = this.zerar.bind(this);
  }

  start(){
    let estado = this.state.estado;
    if(this.timer !== null){
      clearInterval(this.timer);   //pausando timer
      this.timer = null;
      this.setState({estado: "GO"});
    }else{
      this.timer = setInterval(()=>{
        let state = this.state;
        state.tempo += 0.1;
        this.setState(state);
      },100)
    this.setState({estado: "PAUSE"});
    }
    //console.log(this.timer);
  }
  zerar(){
    let state = this.state;

    if(state.tempo !== 0){
      clearInterval(this.timer);
      this.timer = null;
      this.state.tempo = 0;
      state.estado = "GO";
    }
    this.setState(state);
  }

  render(){
    return(
      <div className='container'>
        <img src={require('./assets/cronometro.png')}/>
        <p className='timer'>{this.state.tempo.toFixed(1)}</p>
        <div className='areaBtn'>
          <a className='botao' onClick={this.start}>{this.state.estado}</a>
          <a className='botao' onClick={this.zerar}>CLEAR</a>
        </div>
      </div>  
    )
  }   
}

export default App;
