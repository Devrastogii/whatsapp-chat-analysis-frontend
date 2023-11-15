import React, { useState } from 'react'
import { useFileContext } from '../FileContext'

const WordCloud = () => {

  const { fileContent } = useFileContext()

  return (
    <>
        <div>
            <div className='text-white text-3xl font-bold'>Wordcloud Art</div>            
            <hr className='mt-3' /> 

            <img src={`data:image/png;base64,${fileContent?.image}`} alt="image" className='text-white w-96 mt-10' />  
        </div>
    </>
  )
}

export default WordCloud
