import React ,{useState}from 'react'
import { ResponsiveContainer, LineChart, Line, BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

export default function Graph({props}) {

  

  const data = [
    { label: 0,  percentile: 31 },
    { label: 20, percentile: 47 },
    { label: 40, percentile: props },
    { label: 60, percentile: 69 },
    { label: 80, percentile: 22 },
    { label: 100,percentile: 33 },
    
  ];
  return (
    <div className="row">
      <div className="col-md-12">
      
      </div>

      <div className="section col-md-6">
        
        <div className="section-content">
          <ResponsiveContainer width="60%" height={300}>
            <LineChart data={data} margin={{ top: 15, right: 0, bottom: 15, left: 0 }}>
              <Tooltip />
              <XAxis dataKey="label" />
              <YAxis />
              {/* <CartesianGrid stroke="#ccc" strokeDasharray="5 5" /> */}
              <Legend/>
              {/* <Line type="monotone" dataKey="sales" stroke="#FB8833" /> */}
              <Line type="monotone" dataKey="percentile" stroke="#17A8F5" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>


    </div>
  )
}