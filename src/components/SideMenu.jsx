import React, { useState } from 'react'
import { Select } from '@chakra-ui/react'
import axios from 'axios'
import { useFileContext } from './FileContext'

const SideMenu = () => {

  const [gpOption, setGpOption] = useState(false)
  const { uploadFile } = useFileContext()

  const handleFile = async (e) => {
    let file = e.target.files[0]
    console.log(file);

    const formData = new FormData();
    formData.append('file', file);

    const res = await axios.post('/file-data', formData)
    console.log(res.data);
    uploadFile(res.data)
  }

  const handleSelect = (e) => {
    if(e.target.value == 'group') {
        setGpOption(true)
    }

    else {
        setGpOption(false)
    }
  }

  return (
    <>
        <div className='px-6'>
            <div className='text-2xl text-white font-bold'>Whatsapp Chat</div>

            <div className='text-2xl text-white font-bold mt-1'>Analysis Tool</div>

            <div className='mt-[2.8rem]'>
                <form method='post'>

                    {/* <Select placeholder='Select Chat Option' className='bg-black' color={'white'} width={'80%'}>
                        <option value='friend'>Friend Chat</option>
                        <option value='group'>Group Chat</option>                       
                    </Select> */}

                    <select className='w-[80%] h-8 pl-2' onChange={handleSelect}>
                        <option>Select Chat Option</option>                    
                        <option value='friend'>Friend Chat</option>
                        <option value='group'>Group Chat</option>
                    </select>

                    {gpOption && <>
                        <select className='w-[80%] h-8 pl-2 mt-2' onChange={handleSelect}>
                        <option>Select Name</option>                    
                        <option value='friend'>Friend Chat</option>
                        <option value='group'>Group Chat</option>
                    </select>
                    </>}                    

                    <div className='w-3/4 flex justify-center'>                   

                    <label className="bg-white border border-black text-black shadow-xl w-48 h-11 rounded-lg font-semibold text-sm flex justify-center items-center hover:text-white hover:bg-black hover:-translate-y-1 hover:border-white hover:transition-all hover:duration-300 cursor-pointer mt-6">
                    <input type="file" className="hidden" onChange={handleFile} />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                    </svg>
                        Upload
                    </label> 

                    </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default SideMenu
