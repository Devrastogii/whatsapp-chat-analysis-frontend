import React from 'react'
import { useFileContext } from '../FileContext'

const WordCloud = () => {

  const { fileContent } = useFileContext()

  if(!fileContent){
    return null
  }

  return (
    <>
        <div>
            <div className='text-white text-3xl font-bold'>Wordcloud Art</div>            
            <hr className='mt-3' /> 

            <div className='flex justify-around mt-10 gap-x-5'>
              <div className='w-1/2'><img src={`data:image/png;base64,${fileContent?.image}`} alt="image" className='text-white' /></div>
              <div className='w-1/2'>
              <table class="text-white border-2 border-white">
        <thead>
          <tr>
            <th class="px-3 py-3 font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Name</th>
            <th class="px-3 py-3 font-medium text-gray-900 text-sm bg-gray-100">Message Sent</th>      
            <th class="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br"></th>
          </tr>
        </thead>
        <tbody>

        {fileContent?.commonValues.map((v, i) => {
              return (
                <>
                <tr className='text-center'>
                   <td className='px-2 py-3'>{fileContent?.commonWords?.[i]}</td> 
                   <td className='px-2 py-3'><div className='text-white'>{v}</div></td>
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

export default WordCloud
