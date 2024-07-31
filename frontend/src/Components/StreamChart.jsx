// src/components/SteamChart.jsx

import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const SteamChart = ({ data }) => {
    const chartData = {
        labels: data.map(item => item.date),
        datasets: [
            {
                label: 'Study Hours',
                data: data.map(item => ({
                    x: item.date,
                    y: item.studyhours
                })),
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.4)',
                fill: true,
                tension: 0.4 // For smoother lines
            },
            {
                label: 'Rest Hours',
                data: data.map(item => ({
                    x: item.date,
                    y: item.resthours
                })),
                borderColor: 'rgba(153, 102, 255, 1)',
                backgroundColor: 'rgba(153, 102, 255, 0.4)',
                fill: true,
                tension: 0.4 // For smoother lines
            }
        ]
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: (context) => {
                        return `${context.dataset.label}: ${context.raw.y}`;
                    }
                }
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Date'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Hours'
                },
                beginAtZero: true
            }
        }
    };

    return <Line data={chartData} options={options} />;
};

export default SteamChart;
