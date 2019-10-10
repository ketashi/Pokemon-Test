import React from "react"
import {Radar} from "react-chartjs-2"
 
export default ({stats}) => {
    const data = stats.map(stat => stat.base_stat)
    const statsPokemon = (data) => ({
        labels: ['Speed', 'Special-Defense', 'Special-Attack', 'Defense', 'Attack', 'Hp'],
        datasets: [{
            label: 'STATS',
            data: data,
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        }]
    })
    return(
        <Radar 
                data={statsPokemon(data)}
                width={400}
                height={400}
                options={{ maintainAspectRatio: false }}/>
    )
} 
