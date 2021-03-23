import styles from './App.module.css' 
import React from 'react'
import {fetchData} from './Api'
import {Chart, CountryPicker} from './Components'
import covidImage from './img/logo-corona.png';

class App extends React.Component{
  state = {
      data: {},
      country : '',
  };

  async componentDidMount(){
    const fetchedData = await fetchData();
    this.setState({data: fetchedData});

    console.log(fetchedData);
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    
    this.setState({data: fetchedData, country: country})
}

  render(){
    const {data, country} = this.state;
    return(
      <div className={styles.container}>
        <img className={styles.image} src={covidImage} alt="COVID-19" />
      <CountryPicker handleCountryChange={this.handleCountryChange}/>
      <br/>
      <Chart data={data} country={country}/>
      </div>
    )
  }
}

export default App;
