import React from 'react'
import { useFileContext } from '../FileContext'

const WordCloud = () => {

  const { fileContent } = useFileContext()

  return (
    <>
        <div>
            <div className='text-white text-3xl font-bold'>Wordcloud Art</div>            
            <hr className='mt-3' />   
        </div>
    </>
  )
}

export default WordCloud
