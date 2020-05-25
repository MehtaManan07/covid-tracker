import React, { Component } from "react";
import Cards from "./components/Cards/Cards";
import Chart from './components/Chart/Chart'
import CountryPicker from "./components/CountryPicker/CountryPicker";
import styles from './App.module.css'
import { fetchData } from './api'

class App extends Component {
  state = {
    data: {}
  }
  async componentDidMount () {
    const fetchedData = await fetchData()
    // console.log('fetchedData:',fetchedData)
    this.setState({data: fetchedData})
    // console.log('fetchedData:',fetchedData)
  }
  render() {
    return (
      <div className={styles.container}>
        <Cards data={this.state.data} />
        <CountryPicker />
        <Chart />
      </div>
    );
  }
}
export default App;
