"use client"
import React, { useState } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

function SelectTopic( {onUserSelect}) {
    const options = ['Custom Prompt','Random AI story','Scary Story','Historical Facts','Bed Time Story','Motivational','Fun Facts']
    const [selectedOption,setSelectedOption] = useState('');
    return (
    <div>
      <h2 className='text-primary text-2xl font-bold'>Content</h2>
      <p className='text-gray-500'>What is the topic of your video</p>
      <Select onValueChange={(value)=>{
        setSelectedOption(value);
        value!= 'Custom Prompt' && onUserSelect('topic',value);
      }} >
        <SelectTrigger className="w-full p-6 mt-2 text-lg">
            <SelectValue placeholder="Content Type" />
        </SelectTrigger>
        <SelectContent>
            {options.map((item,index)=>(
                <SelectItem value={item} key={index} >{item}</SelectItem>
            ))}
        </SelectContent>
      </Select>

        {selectedOption== 'Custom Prompt' && 
            <Textarea className={"mt-3"} 
            placeholder="Write promp on which you want to generate video"
            onChange = {(e)=>onUserSelect('topic',e.target.value)} />
        }
    </div>
  )
}

export default SelectTopic
