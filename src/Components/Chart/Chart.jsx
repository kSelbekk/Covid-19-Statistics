import React, {useState, useEffect} from 'react';
import {fetchDailyData} from '../../Api';
import {Line, Doughnut} from 'react-chartjs-2';
import styles from './Chart.module.css'



const Chart = ({data: {confirmed, recovered, deaths}, country}) => {
    const [dailyData, setDailyData] = useState([])

    useEffect (() =>{
        const fetchAPI = async () =>{
            setDailyData(await fetchDailyData());
        }

        fetchAPI();
    }, []);

    const lineChart = (
        dailyData.length ?
        (<Line  
        data={{
            labels: dailyData.map(({date}) => date),
            datasets: [{
                data: dailyData.map(({confirmed}) => confirmed),
                label: 'Infected',
                borderColor: '#0C2340',
                fill: true

            },{
                data: dailyData.map(({deaths}) => deaths),
                label: 'Deaths',
                borderColor: 'red',
                backgroundColor: 'rgba(255, 0, 0, 0.5)',
                fill: true
            },],
        }}
        height={500}
        options={{
            maintainAspectRatio: false,
        }}
            
        />) : null
   );

   const doughnutChart = (
       confirmed 
       ? (
           <Doughnut
                data={{
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets: [{
                        label: 'People',
                        backgroundColor: ['#0C2340', '#FFC72C', 'red'],
                        data: [confirmed.value, recovered.value, deaths.value]
                    }]
                }}
                height={500}
                options={{
                    maintainAspectRatio: false,
                    title: { display: true, text:`Current state in ${country}`}
                }}
           />
       ) : null

   );
   


    return (
        <div className={styles.container}>
            {country ? doughnutChart : lineChart}
        </div>
    )
}

export default Chart
