// src/components/BubbleChart.jsx

import React from "react";
import { Bubble } from "react-chartjs-2";
import { Chart as ChartJS, BubbleElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from "chart.js";

// Register the required components
ChartJS.register(BubbleElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const BubbleChart = ({ data }) => {
    const chartData = {
        datasets: [
            {
                label: 'Study Hours',
                data: data.map(item => ({
                    x: item.date,
                    y: item.studyhours,
                    r: item.studyhours // Bubble radius
                })),
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            },
            {
                label: 'Rest Hours',
                data: data.map(item => ({
                    x: item.date,
                    y: item.resthours,
                    r: item.resthours // Bubble radius
                })),
                backgroundColor: 'rgba(153, 102, 255, 0.5)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1
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
                    label: (context) => `${context.dataset.label}: ${context.raw.y}`,
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

    return <Bubble data={chartData} options={options} />;
};

export default BubbleChart;
