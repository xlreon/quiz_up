import React from 'react';
import { PieChart, Pie, Sector, Cell } from 'recharts';

const COLORS = ["red","green"];

class ResultPieChart extends React.Component {
    render () {
        const { data } = this.props
        return (
            <PieChart width={200} height={200}>
                <Pie
                data={data} 
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