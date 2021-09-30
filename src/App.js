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
        <table className="content-table">
          <thead>
            <tr>
              <th>TRADING_CODE</th>
              <th>LTP</th>
              <th>HIGH</th>
              <th>LOW</th>
            </tr>
          </thead>
          <tbody>
              {data.map(item => {
                return(
                  <>
                  <tr>
                    <td>{item.TRADING_CODE}</td>
                    <td>{item.LTP}</td>
                    <td>{item.HIGH}</td>
                    <td>{item.LOW}</td>
                    </tr>
                  </>
                )
              })}
          </tbody>
        </table>
  );
}

export default App;
