import React, { useState, useEffect } from 'react';
import './App.css';
import MaterialTable from 'material-table'

function App() {

  const [data, setData] = useState([])
  const columns = [
    { title: "TRADING_CODE", field: "TRADING_CODE" },
    { title: "LTP", field: "LTP" },
    { title: "HIGH", field: "HIGH" }, 
    { title: "LOW", field: "LOW", },
  ]
  
  useEffect(()=>{
    fetch("https://heroku-dse-api.herokuapp.com/api/latest_price")
    .then(resp=>resp.json())
    .then(resp=>{
      console.log(resp.stocks)
      setData(resp.stocks)})
  },[])
 

  return (
    <div className="App">
      <h1 align="center">DSE</h1>
      <h4 align='center'>Made By Zunaid Amin Enan</h4>
      <MaterialTable
        title="Company List"
        data={data}
        columns={columns}
      />
    </div>
  );
}

export default App;
