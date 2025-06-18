"use client"
import React, { useState } from 'react'
import SelectTopic from './_components/SelectTopic'
import SelectStyle from './_components/SelectStyle';
import SelectDuration from './_components/SelectDuration';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import CustomLoading from './_components/CustomLoading';
import { v4 as uuidv4 } from 'uuid';

const scriptData = "Once upon a time, in a forest filled with glowing mushrooms, lived a little fox named Finley. Finley loved bedtime stories, but even more, he loved adventures! One night, Finley decided to have his own adventure. He found a friendly snail named Sheldon and asked for a ride.  'To the Land of Sleepy Clouds!' Finley exclaimed. On their journey, they met Professor Hoot, a grumpy owl who guarded the way to the Sleepy Clouds.  He grumbled, 'No one goes to the Sleepy Clouds without solving my riddle!' The riddle read: 'I have cities, but no houses; forests, but no trees; water, but no fish. What am I?' Finley thought hard. Then, he looked at the map Sheldon was carrying!  'A map!' he shouted. 'It has cities, forests, and even water, but no houses, trees or fish!' Professor Hoot chuckled.  'Well done, Finley! You may pass!' And so, Finley and Sheldon reached the Land of Sleepy Clouds. It was magical! But even adventures make you sleepy... ...and Finley, nestled amongst the fluffy clouds, drifted off to the sweetest of dreams."

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
      // GetVideoScript();
      generateAudiofile(scriptData);
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
        generateAudiofile(resp.data.result);
      })
      setLoading(false);
    }

    const generateAudiofile = async (videoScriptData) => {
      setLoading(true);
      let script = '';
      const id = uuidv4();
      // videoScriptData.forEach(item => {
      //   script=script+item.contentText+ ' ';
      // });
      console.log(script);
      await axios.post('/api/generate-audio',{
        text:scriptData,
        id:id
      }).then(resp=>{
        console.log(resp.data);
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
