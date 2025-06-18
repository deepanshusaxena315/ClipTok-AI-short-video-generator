"use client"
import React, { useState } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

function SelectDuration({onUserSelect}) {
  return (
    <div className='mt-7'>
      <h2 className='text-primary text-2xl font-bold'>Duration</h2>
      <p className='text-gray-500'>Select the Duration of your video</p>
      <Select onValueChange={(value)=>{
        value!= 'Custom Prompt' && onUserSelect('duration',value);
      }} >
        <SelectTrigger className="w-full p-6 mt-2 text-lg">
            <SelectValue placeholder="Select Duration" />
        </SelectTrigger>
        <SelectContent>

                <SelectItem value='30 seconds' >30 seconds</SelectItem>
                <SelectItem value='45 seconds' >45 seconds</SelectItem>
                <SelectItem value='60 seconds' >60 seconds</SelectItem>

        </SelectContent>
      </Select>

    </div>
  )
}

export default SelectDuration
