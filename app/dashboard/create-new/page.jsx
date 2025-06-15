import React, { useState } from 'react'
import SelectTopic from './_components/SelectTopic'

function CreateNew() {
    const [formData,setFormData] = useState([]);
    const onHandleInputChange = (fieldName,fieldValue)=>{
        
    }
  return (
    <div className='md:px20'>
      <h2 className='font-bold text-4xl text-primary text-center'>Create New</h2>

      <div className='shadow-md mt-10 p-10'>
        {/* Select topic */}
            <SelectTopic/>
        {/* Select stylef */}

        {/* select duration */}

        {/* create button */}
      </div>

    </div>
  )
}

export default CreateNew
