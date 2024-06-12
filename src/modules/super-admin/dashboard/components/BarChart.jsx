import { Bar } from 'react-chartjs-2';
import styled from 'styled-components';

const ChartWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;

const BarChart = ({ data, labels }) => {
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Count",
        data: data,
        backgroundColor: ['#1196f0', '#ebe836'],
        hoverBackgroundColor: ['#1E88E5', '#bec04b'],
      },
    ],
  };

  return (
    <ChartWrapper>
      <Bar data={chartData} />
    </ChartWrapper>
  );
};

export default BarChart;