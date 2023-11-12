import React from 'react'
import ActiveUsers from './Statistics/ActiveUsers'

const MainMenu = () => {
  return (
    <>
        <section>
            <div className='flex justify-evenly flex-wrap gap-y-8'>
                <div className='w-[17rem] h-[8rem] rounded-lg border-2 flex flex-col bg-blue-300 font-semibold p-4'>
                    <div>Total Messages</div>
                    <div className='mt-5 font-bold text-2xl'>8090 Messages</div>
                </div>

                <div className='w-[17rem] h-[8rem] rounded-lg border-2 flex flex-col bg-blue-300 font-semibold p-4'>
                    <div>Total Words</div>
                    <div className='mt-5 font-bold text-2xl'>8090 Words</div>
                </div>

                <div className='w-[17rem] h-[8rem] rounded-lg border-2 flex flex-col bg-blue-300 font-semibold p-4'>
                    <div>Media Shared</div>
                    <div className='mt-5 font-bold text-2xl'>8090 Items</div>
                </div>

                <div className='w-[17rem] h-[8rem] rounded-lg border-2 flex flex-col bg-blue-300 font-semibold p-4'>
                    <div>Total Links Shared</div>
                    <div className='mt-5 font-bold text-2xl'>8090 Links</div>
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