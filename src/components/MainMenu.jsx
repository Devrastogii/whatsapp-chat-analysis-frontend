import React from 'react'
import ActiveUsers from './Statistics/ActiveUsers'
import { useFileContext } from './FileContext'

const MainMenu = () => {

  const { fileContent } = useFileContext()

  return (
    <>
        <section>
            <div className='flex justify-evenly flex-wrap gap-y-8'>
                <div className='w-[17rem] h-[8rem] rounded-lg border-2 flex flex-col bg-blue-300 font-semibold p-4'>
                    <div>Total Messages</div>
                    <div className='mt-5 font-bold text-2xl'>{fileContent?.msg ? fileContent.msg : <span>0</span>} Messages</div>
                </div>

                <div className='w-[17rem] h-[8rem] rounded-lg border-2 flex flex-col bg-blue-300 font-semibold p-4'>
                    <div>Total Words</div>
                    <div className='mt-5 font-bold text-2xl'>{fileContent?.words ? fileContent.words : <span>0</span>} Words</div>
                </div>

                <div className='w-[17rem] h-[8rem] rounded-lg border-2 flex flex-col bg-blue-300 font-semibold p-4'>
                    <div>Media Shared</div>
                    <div className='mt-5 font-bold text-2xl'>{fileContent?.media ? fileContent.media : <span>0</span>} Items</div>
                </div>

                <div className='w-[17rem] h-[8rem] rounded-lg border-2 flex flex-col bg-blue-300 font-semibold p-4'>
                    <div>Total Links Shared</div>
                    <div className='mt-5 font-bold text-2xl'>0 Links</div>
                </div>
            </div>

            <div className='p-10'>
                <ActiveUsers />
            </div>
        </section>
    </>    
  )
}

export default MainMenu
