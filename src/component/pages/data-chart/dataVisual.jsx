import React from 'react';
import HeadTitle from '../../commonElement/HeadTitle';
import BoardBase from '../../commonElement/boardBase';
import { Scatterdata, Barchartdata } from '../../commonElement/testdata/testDataSet';
import { ScatterChart,BarChart,Bar, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, } from 'recharts';


const ScatterPlot = ({data}) => {
    return (
        <ResponsiveContainer width="95%" aspect = {2.7}>
          <ScatterChart
            width={400}
            height={400}
            margin={{
              top: 30,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid />
            <XAxis type="number" dataKey="x" name="stature" unit="cm" />
            <YAxis type="number" dataKey="y" name="weight" unit="kg" />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            <Scatter name="A school" data={data} fill="#8884d8" />
          </ScatterChart>
        </ResponsiveContainer>
      );
}


const BarchartPlot = ({data}) => {
    return (
        <ResponsiveContainer width="95%" aspect = {2.5}>
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" stackId="a" fill="#8884d8" />
            <Bar dataKey="amt" stackId="a" fill="#82ca9d" />
            <Bar dataKey="uv" fill="#ffc658" />
          </BarChart>
        </ResponsiveContainer>
    );
}


export const HistogramPage = () => {
    return(
        <>    
            <HeadTitle>막대그래프</HeadTitle>
            <BoardBase>
                <BarchartPlot data = {Barchartdata} />
            </BoardBase>
        </>
    )   
}


export const ScatterPage = () => {
    return(
        <>
            <HeadTitle>산점도</HeadTitle>
            <BoardBase>
                <ScatterPlot data = {Scatterdata}/>
            </BoardBase>
        </>
    )
}
