import React from 'react'
import { useFileContext } from '../FileContext'
import { Chart } from "react-google-charts";

const ActiveUsers = ({ labels, data }) => {

  const { fileContent } = useFileContext()

  if (!labels || !data || labels.length === 0 || data.length === 0) {
    return null;
  }

  const formatChartData = () => {
    const chartData = [["Label", "Data"]];
    if (labels && data && labels.length === data.length) {
      labels.forEach((label, index) => {
        chartData.push([label, data[index]]);
      });
    }
    return chartData;
  };

  const chartData = formatChartData();

  return (
    <>
        <div>
            <div className='text-white text-3xl font-bold'>Most Active Users</div>            
            <hr className='mt-3' />   

            <div className='flex justify-around mt-10'>
                <div>           
                  <Chart
      width={'100%'}
      height={'400px'}
      chartType="ColumnChart"
      loader={<div>Loading Chart</div>}
      data={chartData}
      options={{
        title: '',
      }}
      rootProps={{ 'data-testid': '1' }}
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
                   <td className='px-2 py-3'>{fileContent?.activeNames?.[i]}</td> 
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
