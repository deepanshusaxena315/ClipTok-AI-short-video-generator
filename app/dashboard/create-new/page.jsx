"use client"
import React, { useState } from 'react'
import SelectTopic from './_components/SelectTopic'
import SelectStyle from './_components/SelectStyle';
import SelectDuration from './_components/SelectDuration';
import { Button } from '@/components/ui/button';

function CreateNew() {
    const [formData,setFormData] = useState([]);
    const onHandleInputChange = (fieldName,fieldValue)=>{
      console.log(formData);
        setFormData(prev=>({
          ...prev,[fieldName]:fieldValue
        }))
    }
  return (
    <div className='md:px20'>
      <h2 className='font-bold text-4xl text-primary text-center'>Create New</h2>

      <div className='shadow-md mt-10 p-10'>
        {/* Select topic */}
            <SelectTopic onUserSelect={onHandleInputChange}/>
        {/* Select stylef */}
            <SelectStyle onUserSelect={onHandleInputChange}/>
        {/* select duration */}
            <SelectDuration onUserSelect={onHandleInputChange}/>
        {/* create button */}
          <Button className='mt-10 w-full'> Create New Video</Button>
      </div>

    </div>
  )
}

export default CreateNew
