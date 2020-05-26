import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api";
import { Line, Bar } from "react-chartjs-2";
import styles from './Chart.module.css'

const Chart = (props/* */) => {
  const [dailyData, setDailyData] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    };
    fetchAPI();
  },[]);

  const lineChart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [{
            data: dailyData.map(({ confirmed }) => confirmed),
            label: 'Infected',
            borderColor: '#3333ff',
            fill: true
        }, {
            data: dailyData.map(({ deaths }) => deaths),
            label: 'Deaths',
            borderColor: '#d50000',
            backgroundColor: 'rgba(255,0,0,0.5)',
            fill: true
        }],
      }}
    />
  ) : null;

  const barChart = (
    props.data.confirmed ? (
      <Bar 
      data={{
        labels: ['Infected', 'Recovered', 'Deaths'],
        datasets: [{
          label: 'People',
          backgroundColor: ['rgba(0,0,255,0.5)','rgba(0,255,0,0.5)','rgba(255,0,0,0.5)'],
          data: [props.data.confirmed.value, props.data.recovered.value, props.data.deaths.value]
        }]
      }}
      options={{
        legend: {display: false},
        title: {display: true, text: `Current condition of ${props.country}`}
      }}
       />
    ) : null
  )

  return (
    <div className={styles.container}>
      {!props.country ? lineChart : barChart}
    </div>
  );
};

export default Chart;
