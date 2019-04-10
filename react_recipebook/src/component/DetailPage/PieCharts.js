import React, { Component } from 'react';

import {Pie, PieChart , Cell } from 'recharts'
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042' ,'#e6194b', '#3cb44b', '#ffe119', '#4363d8', '#f58231', '#911eb4', '#f12711', '#bcf60c', '#50C9C3'];

class PieCharts extends Component {
    state = {  }
    render() { 
        return ( 
            <PieChart width={1000} height={800}>
            <Pie
              dataKey="value"
              data={this.props.data} 
              cx="50%" 
              cy="50%" 
              innerRadius={150}
              outerRadius={220} 
              fill="#8884d8"
              paddingAngle={0.5}
              label={({
                cx,
                cy,
                midAngle,
                innerRadius,
                outerRadius,
                value,
                index
              }) => {
                const RADIAN = Math.PI / 180;
                // eslint-disable-next-line
                const radius = 25 + innerRadius + (outerRadius - innerRadius);
                // eslint-disable-next-line
                const x = cx + radius * Math.cos(-midAngle * RADIAN);
                // eslint-disable-next-line
                const y = cy + radius * Math.sin(-midAngle * RADIAN);
      
                return (
                  <text
                    x={x}
                    y={y}
                    fill="#8884d8"
                    textAnchor={x > cx ? "start" : "end"}
                    dominantBaseline="central"
                  >
                    {this.props.data[index].name}({parseInt(value)})
                  </text>
                );
              }}
            >
                {
                 this.props.data.map((entry, index) => <Cell key={index}  fill={COLORS[index % COLORS.length]}/>)
              }
            </Pie>
          </PieChart>
         );
    }
}
 


export default PieCharts;
