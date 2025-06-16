import Image from 'next/image'
import React, { useState } from 'react'

function SelectStyle({onUserSelect}) {
    const styleOptions = [
        {
            name:'Realistic',
            image:'/realistic.png'
        },
        {
            name:'Cartoon',
            image:'/cartoon.png'
        },
        {
            name:'Comic',
            image:'/comic.png'
        },
        {
            name:'Watercolor',
            image:'/watercolor.png'
        },
        {
            name:'GTA',
            image:'/gta.png'
        },

    ]
    const [selectedOption,setSelectedOption] = useState('');

  return (
    <div className='mt-7'>
          <h2 className='text-primary text-2xl font-bold'>Style</h2>
      <p className='text-gray-500'>Choose the style of your video</p>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-5 mt-3'>
        {styleOptions.map((item,index)=>(
            <div className={`relative hover:scale-105 transition-all cursor-pointer
                ${selectedOption==item.name&& 'border-4 border-primary rounded-xl'}`
             }key={index}>
                <Image  width={100} height={100} src={item.image} alt={item.name}
                className='h-48 object-cover rounded-lg w-full'
                onClick={()=>{
                    setSelectedOption(item.name)
                    onUserSelect('imageStyle',item.name)
                    }}/>
                <h2 className='text-center absolute p-1 bottom-0 rounded-b-lg text-white bg-black w-full'>{item.name}</h2>
            </div>
        ))}
      </div>
    </div>
  )
}

export default SelectStyle
