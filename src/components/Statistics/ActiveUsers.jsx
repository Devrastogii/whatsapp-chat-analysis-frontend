import React, { useEffect, useState } from 'react'
import { useFileContext } from '../FileContext'
import Chart from 'react-apexcharts'

const ActiveUsers = () => {

  const { fileContent } = useFileContext()
  console.log(fileContent?.activeNames);

  const [state, setState] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      title: {
        text: "Most Active Users",
        align: "center",  
        style: {
          color: "#fff"        
        }     
      },
      xaxis: {
        categories: fileContent?.activeNames,  
        labels: {
          style: {
            colors: "#fff",
          },
        }, 
        title: {
          text: "Contact Names",
          style: {
            color: "#fff"        
          } 
        },   
      },  
      yaxis: {             
        labels: {
          style: {
            colors: "#fff",
          },
        },
        title: {
          text: "Number of Messages",
          style: {
            color: "#fff",             
          } 
        },   
      },    
    },
    series: [
      {
        name: "Number of Messages",
        data: fileContent?.activeValues,
      },
    ],    
  })

  return (
    <>
        <div>
            <div className='text-white text-3xl font-bold'>Statistics</div>            
            <hr className='mt-3' />           

            <Chart
              options={state.options}
              series={state.series}
              type='bar'
              width="500"
              className='mt-10'
              />            
        </div>
    </>
  )
}

export default ActiveUsers
