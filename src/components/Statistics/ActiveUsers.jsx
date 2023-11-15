import React, { useState } from 'react'
import { useFileContext } from '../FileContext'
import Chart from 'react-apexcharts'

const ActiveUsers = () => {

  const { fileContent } = useFileContext()
  const [name, setName] = useState(fileContent?.activeNames)

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

            <div className='flex justify-around mt-10'>
                <div>
                  <Chart
                  options={state.options}
                  series={state.series}
                  type='bar'
                  width="500"    
                  />   
                </div>

                <div>
                <table class="text-white border-2 border-white">
        <thead>
          <tr>
            <th class="px-3 py-3 font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Name</th>
            <th class="px-3 py-3 font-medium text-gray-900 text-sm bg-gray-100">Message Sent</th>      
            <th class="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br"></th>
          </tr>
        </thead>
        <tbody>

        {fileContent?.percentage.map((v, i) => {
              return (
                <>
                <tr className='text-center'>
                  {/* <td className='px-2 py-3'>{name[i]}</td> */}
                  <td className='px-2 py-3'><div className='text-white'>{v.toFixed(2)}%</div></td>
                </tr>                  
                </>
              )
            })}             
          
        </tbody>
        </table> 
                </div>
            </div>                                        
                                  
        </div>        
    </>
  )
}

export default ActiveUsers
