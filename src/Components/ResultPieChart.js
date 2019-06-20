import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const COLORS = ["green","red"];

const RADIAN = Math.PI / 180;
class ResultPieChart extends React.Component {

    renderCustomizedLabel = ({
        cx, cy, midAngle, innerRadius, outerRadius, percent, index,
    }) => {
       const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
      const x = cx + radius * Math.cos(-midAngle * RADIAN);
      const y = cy + radius * Math.sin(-midAngle * RADIAN);
    
        return (
            <text style={{fontSize: '2rem'}} x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    render () {
        const { data } = this.props
        return (
            <PieChart width={300} height={300}>
                <Pie
                data={data}
                label={this.renderCustomizedLabel}
                >
                {
                    data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
                }
                </Pie>
            </PieChart>
        );
    }
}

export default ResultPieChart;