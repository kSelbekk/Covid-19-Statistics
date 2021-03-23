import './App.css';
import React from 'react';
import {fetchData} from './Api/api'
import {Cards, Chart, CountryPicker} from './Components'

class App extends React.Component{
  state = {
      data: {},
  };

  async componentDidMount(){
    const fetchedData = await fetchData();
    //There you go maaan

    console.log(fetchedData);
  }

  render(){
    const {data} = this.state;
    return(
      <div>
      <Cards data={data}/>
      
        Hola micha!
      </div>
    )
  }
}



export default App;
