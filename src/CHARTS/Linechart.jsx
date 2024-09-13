import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);
const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'My First Dataset',
            data: [65, 55, 44, 32, 30, 20],
            fill: false,
            backgroundColor: ['forestgreen',
                'brown',
            ],
            tension: 0.1
        }
    ]
}

const options = {
    responsive: true,
    pulgins: {
        length: {
            position: 'top',
        },
        tooltip: {
            backgroundColor: 'yellow',
            callbacks: {
                label: function (tooltipItem) {
                    return `Value: ${tooltipItem.raw}`;
                }
            }
        }
    },
    scales: {
        x: {
            title: {
                display: true,
                text: 'Months'
            }
        },
        y: {
            title: {
                display: true,
                text: 'Values',
            }
        }
    }

}


export const LineChart = () => {

    return (
        <>
            <h2>Line Chart Example</h2>
            <Line width={400} height={100} data={data} options={options} />
        </>
    )
}