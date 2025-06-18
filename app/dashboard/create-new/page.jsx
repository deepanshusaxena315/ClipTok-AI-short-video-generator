"use client"
import React, { useState } from 'react'
import SelectTopic from './_components/SelectTopic'
import SelectStyle from './_components/SelectStyle';
import SelectDuration from './_components/SelectDuration';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import CustomLoading from './_components/CustomLoading';

function CreateNew() {
    const [formData,setFormData] = useState({});
    const [loading,setLoading] = useState(false);
    const [videoScript,setVideoScript] = useState()
    const onHandleInputChange = (fieldName,fieldValue)=>{

        setFormData(prev=>({
          ...prev,[fieldName]:fieldValue
        }))
       console.log(formData);
    }

    const onCreateClickHandler = () => {
      if (!formData.topic || !formData.duration || !formData.imageStyle) {
      alert("Please select topic, duration and style before generating!");
      return;
    }
      GetVideoScript();
    }
    

    //get video script
    const GetVideoScript= async()=>{
      setLoading(true);
      const prompt = 'Write a script to generate '+formData.duration+' video on topic : Interesting '+formData.topic+' along with AI image prompt in '+formData.imageStyle+' format for each scene and give me result in JSON format with imagePrompt and contentText as field'
      console.log(prompt);
      const result = await axios.post('/api/get-video-script',{
        prompt:prompt
      }).then(resp=>{
        console.log(resp.data.result);
        setVideoScript(resp.data.result);
      })
      setLoading(false);
    }
  return (
    <div className='md:px20' >
      <h2 className='font-bold text-4xl text-primary text-center'>Create New</h2>

      <div className='shadow-md mt-10 p-10'>
        {/* Select topic */}
            <SelectTopic onUserSelect={onHandleInputChange}/>
        {/* Select stylef */}
            <SelectStyle onUserSelect={onHandleInputChange}/>
        {/* select duration */}
            <SelectDuration onUserSelect={onHandleInputChange}/>
        {/* create button */}
          <Button onClick={onCreateClickHandler} className='mt-10 w-full' > Create New Video</Button>
      </div>

      <CustomLoading loading={loading}/>
    </div>
  )
}

export default CreateNew
