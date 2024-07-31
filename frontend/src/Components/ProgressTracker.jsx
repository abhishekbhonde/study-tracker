import React, { useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import BarChart from "./BarChart";
import SteamChart from "./StreamChart";

import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend,
    PointElement
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, Title, Tooltip, Legend, PointElement);

const ProgressTracker = () => {
    const [studyHours, setStudyHours] = useState('');
    const [restHours, setRestHours] = useState('');
    const [data, setData] = useState([]);

    const handleStudyHours = async () => {
        const studyHoursValue = parseFloat(studyHours);
        const restHoursValue = parseFloat(restHours);

        if (isNaN(studyHoursValue) || isNaN(restHoursValue)) {
            alert("Please enter valid numbers for both study hours and rest hours.");
            return;
        }

        try {
            await axios.post("http://localhost:3002/progress/checkprogress", {
                studyhours: studyHoursValue,
                resthours: restHoursValue
            });

            const response = await axios.get("http://localhost:3002/progress/getprogress");
            setData(response.data);

            setStudyHours('');
            setRestHours('');
        } catch (error) {
            console.error("Error handling study hours:", error);
        }
    };

    return (
        <div>
            <div className="flex justify-center mt-[100px]">
                <div>
                    <h1 className="text-center text-3xl">
                        Success is the sum of small efforts, <br /> repeated day in and day
                        out.
                    </h1>
                    <p className="text-[19px] text-slate-400 mt-[20px]">
                        Tracking your study hours helps you measure those small, consistent
                        efforts that lead to success.
                    </p>
                </div>
            </div>
            <div className="border w-[500px] flex flex-col items-center ml-auto mr-auto mt-[50px] h-[550px] p-[20px]">
                <h1 className="text-center text-xl mt-[50px] text-blue-600">
                    Enter your details to generate graphs
                </h1>
                <label htmlFor="studyHours" className="mt-[30px] ml-[30px] font-bold">Enter today's study hours</label>
                <input 
                    onChange={(e) => setStudyHours(e.target.value)}
                    value={studyHours}
                    id="studyHours"
                    className="h-[35px] ml-[30px] mt-[10px] rounded-md border w-[400px] p-[20px] hover:border-black"
                    placeholder="Enter today's study hours"
                    type="text" 
                />
                <label htmlFor="restHours" className="mt-[30px] ml-[30px] font-bold">Enter today's rest hours</label>
                <input 
                    onChange={(e) => setRestHours(e.target.value)}
                    value={restHours}
                    id="restHours"
                    className="h-[35px] ml-[30px] mt-[10px] rounded-md border w-[400px] p-[20px] hover:border-black"
                    placeholder="Enter today's rest hours"
                    type="text" 
                />
                <button 
                    onClick={handleStudyHours} 
                    className="h-[60px] p-[10px] w-[400px] text-center text-white bg-slate-950 ml-[30px] mt-[50px] rounded-lg"
                >
                    Generate Graphs
                </button>
                <div className="mt-[200px] w-full h-[300px]">
                    <Line 
                        data={{
                            labels: data.map(item => item.date),
                            datasets: [
                                {
                                    label: 'Study Hours',
                                    data: data.map(item => ({ x: item.date, y: item.studyhours })),
                                    borderColor: 'rgba(75, 192, 192, 1)',
                                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                                    fill: true,
                                },
                                {
                                    label: 'Rest Hours',
                                    data: data.map(item => ({ x: item.date, y: item.resthours })),
                                    borderColor: 'rgba(153, 102, 255, 1)',
                                    backgroundColor: 'rgba(153, 102, 255, 0.2)',
                                    fill: true,
                                }
                            ]
                        }}
                        options={{
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
                        }} 
                    />
                </div>
                <div className="mt-[100px] w-full h-[300px]">
                    <BarChart data={data} />
                </div>
                {/* <div className="mt-[50px] w-full h-[300px]">
                    <SteamChart data={data} />
                </div> */}
            </div>
        </div>
    );
};

export default ProgressTracker;
